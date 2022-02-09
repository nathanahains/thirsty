import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "./Text";

export const basicText = <Text content="This is some text" />;
export default {
  title: "atoms/Text",
  component: Text,
} as ComponentMeta<typeof Text>;
