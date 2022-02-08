import React, { ReactChild } from "react";
import styled from "styled-components";

interface TextProps {
  fontSize?: string;
  bold?: boolean;
  content: string;
}

export const Text = ({
  fontSize = "17px",
  bold = false,
  content,
  ...props
}: TextProps) => {
  return (
    <StyledButton fontSize={fontSize} content={content} bold={bold} {...props}>
      {content}
    </StyledButton>
  );
};

const StyledButton = styled("p")<TextProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => (props.bold ? "bold" : "unset")};
`;
