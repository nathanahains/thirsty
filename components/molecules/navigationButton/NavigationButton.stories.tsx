import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavigationButton from "./NavigationButton";

export default {
  title: "molecules/Navigation Button",
  component: NavigationButton,
} as ComponentMeta<typeof NavigationButton>;

const Template: ComponentStory<typeof NavigationButton> = (args: any) => (
  <NavigationButton {...args} />
);

export const Left = Template.bind({});
Left.args = {
    position: "left",
    content: "Thirsty"
};
export const Right = Template.bind({});
Right.args = {
    position: "right",
    content: "Thirsty"
};
export const Default = Template.bind({});
Default.args = {
    content: "Thirsty"
};