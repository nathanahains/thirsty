import React from 'react';
import styled from 'styled-components';
import ImageProps from './interfaces';

const CircleImage = ({ url, alt, height="40px", width="40px"}: ImageProps) => {
    return <StyledImage src={url} alt={alt} width={width} height={height}/>;
};

export default CircleImage;

const StyledImage = styled.img`
    border-radius: 50%;
`