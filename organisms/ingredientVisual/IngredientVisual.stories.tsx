import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IngredientVisual from "./IngredientVisual";
import data from "./seed";

export default {
  title: "Ingredient Visual",
  component: IngredientVisual,
} as ComponentMeta<typeof IngredientVisual>;

const Template: ComponentStory<typeof IngredientVisual> = (args: any) => (
  <IngredientVisual {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  ingredients: data,
};