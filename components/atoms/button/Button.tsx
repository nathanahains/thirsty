import React from "react";
import styled from "styled-components";

interface ButtonProps {
  color?: string;

  label: string;

  onClick?: () => void;
}

export const Button = ({
  color = "blue",
  label = "Button",
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button`

`


