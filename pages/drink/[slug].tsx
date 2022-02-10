import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Text } from "../../components/atoms/text/Text";
import DetailsHeader from "../../components/molecules/detailsHeader/DetailsHeader";
import AppContext from "../../context";
import IngredientVisual from "../../organisms/ingredientVisual/IngredientVisual";

const Details = () => {
  const [drink, setDrink]: any = useState({});
  const value = useContext(AppContext);
  const { data } = value;
  const router = useRouter();
  const { slug }: { slug?: string } = router.query;
  const findDrink = (data: any, slug?: string) =>
    data.find((drinkItem: any) => drinkItem.slug === slug);

  useEffect(() => {
    const foundDrink = findDrink(data, slug)
      ? findDrink(data, slug)
      : JSON.parse(localStorage.getItem("currentDrink") as string);
    if (foundDrink) {
      console.log(foundDrink.ingredients);
      localStorage.setItem("currentDrink", JSON.stringify(foundDrink));
      setDrink(foundDrink);
      return;
    }
  }, []);
  return (
    <StyledDiv>
      <DetailsHeader data={drink} />
      <IngredientVisual ingredients={drink.ingredients} />
      <div className="instructions-text"><Text content={drink.instructions}/></div>
    </StyledDiv>
  );
};

export default Details;

const StyledDiv = styled.div`
.instructions-text{
  margin: 30px 20px 20px 20px;
}
`;
