import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ColorBox from "./ColorBox";

export default {
  title: "Color Box",
  component: ColorBox,
} as ComponentMeta<typeof ColorBox>;

const Template: ComponentStory<typeof ColorBox> = (args: any) => (
  <ColorBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: "red",
};
