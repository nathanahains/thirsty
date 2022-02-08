import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListCell from "./ListCell";

export const drinkCell = <ListCell url="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" name="Orange Drink"/>;
export default {
  title: "ListCell",
  component: ListCell,
} as ComponentMeta<typeof ListCell>;
