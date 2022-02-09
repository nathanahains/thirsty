import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DetailsHeader from "./DetailsHeader";

export default {
  title: "Details header",
  component: DetailsHeader,
} as ComponentMeta<typeof DetailsHeader>;

const Template: ComponentStory<typeof DetailsHeader> = (args: any) => (
  <DetailsHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    url: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Orange Drink",
  },
};
