import React from "react";
import styled from "styled-components";
import { Text } from "../../atoms/text/Text";
import LegendCellProps from "./interfaces";

const LegendCell = ({ color="red", name, value }: LegendCellProps) => {
  return (
    <StyledDiv color={color}>
      <div className="color-box"></div>
      <div className="text-field">
        <Text content={name} />
      </div>
      <Text content={`(${value})`} />
    </StyledDiv>
  );
};

export default LegendCell;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  .color-box {
    width: 20px;
    height: 20px;
    border-radius: 3px;
    background-color: ${({ color }: { color: string }) => color};
  }
  .text-field {
    margin: 0px 5px;
  }
`;
