import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListContainer from "./ListContainer";
import data from "./seed";
import ListCell from "../../components/molecules/listCell/ListCell";

export const searchBar = <ListContainer dataSet={data} cell={<ListCell data={data}/>}/>;
export default {
  title: "List Container",
  component: ListContainer,
} as ComponentMeta<typeof ListContainer>;