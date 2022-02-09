import React from "react";
import styled from "styled-components";
import ColorBox from "../../atoms/colorBox/ColorBox";
import { Text } from "../../atoms/text/Text";
import LegendCellProps from "./interfaces";

const LegendCell = ({ data }: LegendCellProps) => {
    const { color = "red", name, value } = data
  return (
    <StyledDiv color={color}>
      <ColorBox color={color} />
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

  .text-field {
    margin: 0px 5px;
  }
`;
