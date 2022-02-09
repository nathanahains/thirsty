import React from "react";
import styled from "styled-components";
import CustomPieChart from "../../components/atoms/chart/PieChart";
import { Text } from "../../components/atoms/text/Text";
import LegendCell from "../../components/molecules/legendCell/LegendCell";
import genPastelColor from "../../components/particles/genPastelColor";
import ListContainer from "../listContainer/ListContainer";
import IngredientVisualProps, { IngredientItem } from "./interfaces";

const IngredientVisual = ({ ingredients }: IngredientVisualProps) => {
  ingredients?.forEach((obj: IngredientItem) => {
    obj.color = genPastelColor();
  });

  return (
    <StyledDiv>
      <div className="main-text">
        <Text content="Ingredients:" bold={true} />
      </div>
      <div className="visual-container">
        <div className="list-container">
          <ListContainer dataSet={ingredients} cell={<LegendCell data="" />} />
        </div>
        <div className="pie-graph">
          <CustomPieChart dataSet={ingredients} />
        </div>
      </div>
    </StyledDiv>
  );
};

export default IngredientVisual;

const StyledDiv = styled.div`
  .main-text {
    margin: 30px 0px 20px 20px;
  }
  .visual-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .list-container {
    margin: 20px
  }
  .pie-graph {
    margin: 20px;
  }
`;
