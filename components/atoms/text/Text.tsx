import React, { ReactChild } from "react";
import styled from "styled-components";
import TextProps from "./interfaces";

export const Text = ({
  fontSize = "17px",
  bold = false,
  color,
  content,
  ...props
}: TextProps) => {
  return (
    <StyledText fontSize={fontSize} content={content} bold={bold} color={color} {...props}>
      {content}
    </StyledText>
  );
};

const StyledText = styled("p")<TextProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => (props.bold ? "bold" : "unset")};
  color: ${(props) => (props.color ? props.color : "unset")};
  margin:0;
  overflow-wrap;
`;
