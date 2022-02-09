import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListContainer from "./ListContainer";
import data from "./seed";
import ListCell from "../../components/molecules/listCell/ListCell";

export default {
  title: "organisms/List Container",
  component: ListContainer,
} as ComponentMeta<typeof ListContainer>;

const Template: ComponentStory<typeof ListContainer> = (args: any) => (
  <ListContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  dataSet: data,
  cell: <ListCell data="" />,
};
