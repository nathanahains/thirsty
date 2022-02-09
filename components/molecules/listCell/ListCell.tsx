import Link from "next/link";
import React from "react";
import styled from "styled-components";
import theme from "../../../theme";
import ChevronRight from "../../atoms/icon/ChevronRight";
import CircleImage from "../../atoms/image/CircleImage";
import { Text } from "../../atoms/text/Text";
import ListCellProps from "./interfaces";
const ListCell = ({ data = "", onClick }: ListCellProps) => {
  const { defaultGray, borderGray } = theme.colors;
  const { url, name, slug } = data;
  return (
    <Link href={`/drink/${slug}`} passHref>
      <StyledDiv onClick={onClick} borderGray={borderGray}>
        <div className="image-view">
          <CircleImage url={url} />
        </div>
        <div className="name">
          <Text content={name} />
        </div>
        <div className="chevron-right">
          <ChevronRight height="15px" width="15px" fill={defaultGray} />
        </div>
      </StyledDiv>
    </Link>
  );
};

export default ListCell;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid
    ${({ borderGray }: { borderGray: string }) => borderGray};
  cursor: pointer;
  transition: 150ms linear all;
  :hover {
    background: #fafafa;
  }
  .image-view {
    display: flex;
    margin: 10px 15px 10px 10px;
  }
  .chevron-right {
    margin-left: auto;
    margin-right: 10px;
  }
`;
