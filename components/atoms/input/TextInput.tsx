import React from "react";
import styled from "styled-components";
import TextInputProps from "./interfaces";

const TextInput = ({
  value,
  onChange,
  backgroundColor = "rgba(0, 0, 0, 0)",
  background = "transparent",
  border = "none",
  outline = "none",
  autoFocus = true,
  fontSize = "14px",
  placeholder = "",
  ...props
}: TextInputProps) => {
  return (
    <StyledInput
      autoFocus={autoFocus}
      onChange={onChange}
      type="text"
      value={value}
    placeholder={placeholder}
      {...props}
    ></StyledInput>
  );
};

export default TextInput;

const StyledInput = styled("input") <TextInputProps>`
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.backgroundColor};
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
`;
