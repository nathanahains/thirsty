import Image from "next/image";
import React from "react";
import styled from "styled-components";
import CircleImage from "../../atoms/image/CircleImage";
import { Text } from "../../atoms/text/Text";
import DetailsHeaderProps from "./interfaces";

const DetailsHeader = ({ data = "" }: DetailsHeaderProps) => {
  const { url, name } = data;
  return (
    <StyledDiv>
      <div className="details-container">
        <div className="details-image">
          <CircleImage url={url} height="120px" width="120px" />
        </div>
        <div className="details-text">
          <Text bold={true} fontSize="20px" content={name} />
        </div>
      </div>
    </StyledDiv>
  );
};

export default DetailsHeader;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  .details-container {
    display: flex;
    flex-direction: column;
  }
  .details-image {
    margin-top: 30px;
  }
  .details-text {
    margin-top: 20px;
    text-align: center;
  }
`;
