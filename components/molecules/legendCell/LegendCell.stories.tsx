import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LegendCell from "./LegendCell";

export default {
  title: "LegendCell",
  component: LegendCell,
} as ComponentMeta<typeof LegendCell>;

const Template: ComponentStory<typeof LegendCell> = (args: any) => (
  <LegendCell {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    color: "red",
    name: "Orange Juice",
    value: "1 oz",
};
