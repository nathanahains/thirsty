import React from "react";
import styled from "styled-components";
import theme from "../../../theme";
import ExitIcon from "../../atoms/icon/ExitIcon";
import SearchIcon from "../../atoms/icon/SearchIcon";
import TextInput from "../../atoms/input/TextInput";
import SearchBarProps from "./interfaces";

const SearchBar = ({ onChange, onClick, value }: SearchBarProps) => {
  const { borderGray, darkGray } = theme.colors;
  return (
    <StyledDiv borderGray={borderGray}>
      <div className="search-container">
        <div className="search icon">
          <SearchIcon width="15px" height="15px" fill={darkGray} />
        </div>
        <div className="text-input">
          <TextInput value={value} placeholder="Find a drink"/>
        </div>
        {value && (
          <div className="exit icon" onClick={onClick}>
            <ExitIcon width="16px" height="16px" fill={darkGray} />
          </div>
        )}
      </div>
    </StyledDiv>
  );
};

export default SearchBar;

const StyledDiv = styled.div`
  padding: 6px;
  .search-container {
    height: 20px;
    padding: 5px 6px;
    display: flex;
    align-items: center;
    border-radius: 7px;
    background: ${({ borderGray }: { borderGray: string }) => borderGray};
  }
  .icon {
    margin-bottom: -3px;
  }
  .search {
    margin-right: 5px;
  }
  .exit {
    margin-left: auto;
    cursor: pointer;
  }
`;
