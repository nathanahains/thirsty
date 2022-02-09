import type { NextPage } from "next";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../components/atoms/icon/Loader";
import { Text } from "../components/atoms/text/Text";
import ListCell from "../components/molecules/listCell/ListCell";
import formatDrinkResponse from "../components/particles/formatDrinkResponse";
import AppContext from "../context";
import ListContainer from "../organisms/listContainer/ListContainer";
import SearchBar from "../organisms/searchBar/SearchBar";
import { fetchDrinks } from "./api/fetchDrinks";

const Home: NextPage = () => {
  const value = useContext(AppContext);
  const { data, setData } = value;

  const [searchValue, setSearchValue] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    noResults && setNoResults(false);
    const startGetDrinks = async () => {
      setloading(true);
      const [response, ok] = await fetchDrinks(searchValue);

      if (ok) {
        if (response.drinks) setData(formatDrinkResponse(response.drinks));
        else {
          setData([]);
          setNoResults(true);
        }
      }

      setloading(false);
    };
    searchValue !== "" && startGetDrinks();
  }, [searchValue]);

  const handleSearchChange = (newValue: string) => {
    setSearchValue(newValue);
  };
  const handleSearchClear = () => {
    setSearchValue("");
    setData([]);
  };
  const validData = searchValue && !noResults && !loading;
  const welcome = !validData && !noResults && !loading;
  return (
    <StyledDiv>
      <SearchBar
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          handleSearchChange(e.target.value)
        }
        onClick={handleSearchClear}
        value={searchValue}
      />
      {welcome && (
        <div className="display">
          <Text content="Thirsty? Find a drink!" />
        </div>
      )}
      {loading && (
        <div className="display">
          <Loader width="20px" height="20px" />
        </div>
      )}
      {validData && <ListContainer dataSet={data} cell={<ListCell />} />}
      {noResults && (
        <div className="display">
          <Text content="No results" />
        </div>
      )}
    </StyledDiv>
  );
};

export default Home;

const StyledDiv = styled.div`
  .display {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
`;
