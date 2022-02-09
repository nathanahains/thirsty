import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListCell from "./ListCell";

export default {
  title: "molecules/List Cell",
  component: ListCell,
} as ComponentMeta<typeof ListCell>;

const Template: ComponentStory<typeof ListCell> = (args: any) => (
  <ListCell {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    url: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Orange Drink",
  },
};
