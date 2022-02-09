import React, { cloneElement } from "react";
import styled from "styled-components";
import ListCell from "../../components/molecules/listCell/ListCell";
import formatDrinkResponse from "../../components/particles/formatDrinkResponse";
import ContainerProps from "./interfaces";
import data from "./seed";
const ListContainer = ({
  dataSet=[],
  cell,
}: ContainerProps) => {
  return (
    <StyledDiv>
      {dataSet.map((dataSegment: any) => {
        return cloneElement(cell, { data: dataSegment });
      })}
    </StyledDiv>
  );
};

export default ListContainer;

const StyledDiv = styled.div``;
