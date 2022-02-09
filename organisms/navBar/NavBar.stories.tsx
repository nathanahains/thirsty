import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavBar from "./NavBar";

export default {
  title: "organisms/Nav Bar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args: any) => (
  <NavBar {...args} />
);

export const Primary = Template.bind({});
