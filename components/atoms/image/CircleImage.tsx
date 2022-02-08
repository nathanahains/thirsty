import React from 'react';
import styled from 'styled-components';
import ImageProps from './interfaces';

const CircleImage = ({ url, alt, height="50px", width="50px"}: ImageProps) => {
    return <StyledImage src={url} alt={alt} width={width} height={height}/>;
};

export default CircleImage;

const StyledImage = styled.img`
    border-radius: 50%;
`