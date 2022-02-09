import type { NextPage } from "next";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { Text } from "../components/atoms/text/Text";
import ListCell from "../components/molecules/listCell/ListCell";
import formatDrinkResponse from "../components/particles/formatDrinkResponse";
import ListContainer from "../organisms/listContainer/ListContainer";
import SearchBar from "../organisms/searchBar/SearchBar";
import { fetchDrinks } from "./api/fetchDrinks";

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [noResults, setNoResults] = useState(false);
  useEffect(() => {
    noResults && setNoResults(false);
    const startGetDrinks = async () => {
      const [response, ok] = await fetchDrinks(value);
      if (ok) {
        if (response.drinks) setData(formatDrinkResponse(response.drinks));
        else {
          setData([]);
          setNoResults(true);
        }
      }
    };
    value !== "" && startGetDrinks();
  }, [value]);
  console.log(data);
  const handleSearchChange = (newValue: string) => {
    setValue(newValue);
  };
  const handleSearchClear = () => {
    setValue("");
    setData([]);
  };
  const validData = value && !noResults;
  const welcome = !validData && !noResults;
  return (
    <StyledDiv>
      <SearchBar
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          handleSearchChange(e.target.value)
        }
        onClick={handleSearchClear}
        value={value}
      />
      {welcome && (
        <div className="display-text">
          <Text content="Thirsty? Find a drink!" />
        </div>
      )}
      
      {validData && <ListContainer dataSet={data} cell={<ListCell />} />}
      {noResults && (
        <div className="display-text">
          <Text content="No results" />
        </div>
      )}
    </StyledDiv>
  );
};

export default Home;

const StyledDiv = styled.div`
  .display-text {
    margin-top: 20px;
    text-align: center;
  }
`;
