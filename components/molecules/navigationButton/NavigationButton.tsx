import React from "react";
import styled from "styled-components";
import ChevronLeft from "../../atoms/icon/ChevronLeft";
import ChevronRight from "../../atoms/icon/ChevronRight";
import { Text } from "../../atoms/text/Text";
import NavigationButtonProps from "./interfaces";
import theme from "../../../theme";
import Link from "next/link";
const NavigationButton = ({
  position = "none",
  content = "Thirsty",
  route = "/"
}: NavigationButtonProps) => {
  const { vibrantBlue } = theme.colors;
  return (
    <Link href={route} passHref>
      <StyledDiv>
        {position === "left" && (
          <ChevronLeft height="20px" width="20px" fill={vibrantBlue} />
        )}
        <div className="button-text">
          <Text content={content} color={vibrantBlue}></Text>
        </div>
        {position === "right" && (
          <ChevronRight height="20px" width="20px" fill={vibrantBlue} />
        )}
      </StyledDiv>
    </Link>
  );
};

export default NavigationButton;

const StyledDiv = styled.div`
  display: flex;
  padding: 5px;
  cursor: Pointer;
  transition: 150ms linear all;
  border-radius: 4px;
  width: fit-content;
  :hover {
    opacity: 0.8;
  }
  .button-text {
    margin: 0px 4px;
  }
`;
