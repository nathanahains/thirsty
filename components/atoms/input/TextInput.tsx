import React from 'react';
import styled from 'styled-components';
import TextInputProps from './interfaces';

const TextInput = ({value, onChange, background="none", border="none", ...props}: TextInputProps) => {
  return <StyledInput type="text" {...props}></StyledInput>;
};

export default TextInput;

const StyledInput = styled.input`
  

`
