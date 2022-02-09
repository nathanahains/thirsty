import React from "react";
import styled from "styled-components";
import ColorBoxProps from "./interfaces";

const ColorBox = ({ color }: ColorBoxProps) => {
  return <StyledDiv color={color}></StyledDiv>;
};

export default ColorBox;

const StyledDiv = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background-color: ${({ color }: { color: string }) => color};
`;
