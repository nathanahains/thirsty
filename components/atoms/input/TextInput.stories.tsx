import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextInput from "./TextInput";

export const basicTextInput = <TextInput value="" />;
export default {
  title: "Input",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;