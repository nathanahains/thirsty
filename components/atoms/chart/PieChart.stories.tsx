import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomPieChart from "./PieChart";
import data from "./seed";


export default {
  title: "Pie Chart",
  component: CustomPieChart,
} as ComponentMeta<typeof CustomPieChart>;

const Template: ComponentStory<typeof CustomPieChart> = (args: any) => (
  <CustomPieChart {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  dataSet: data,
};
