import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import SearchBar from "../organisms/searchBar/SearchBar";

const Home: NextPage = () => {
  const [value, setValue] = useState("");
  const handleSearchChange = (newValue: string) => {
    setValue(newValue);
  };
  const handleSearchClear = () => {
    setValue("");
  };
  return (
    <StyledDiv>
      <SearchBar
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          handleSearchChange(e.target.value)
        }
        onClick={handleSearchClear}
        value={value}
      />
    </StyledDiv>
  );
};

export default Home;

const StyledDiv = styled.div``;
