import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchBar from "./SearchBar";

export const searchBar = <SearchBar value=""/>;
export default {
  title: "organisms/Search Bar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;