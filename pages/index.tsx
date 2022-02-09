import type { NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'
import SearchBar from '../organisms/searchBar/SearchBar'

const Home: NextPage = () => {
  const [value, setValue] = useState("")
  return (
    <StyledDiv>
      <SearchBar value={value}/>
    </StyledDiv>
  )
}

export default Home

const StyledDiv = styled.div`
  

`