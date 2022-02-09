interface IngredientVisualProps {
  ingredients: IngredientItem[];
}

export interface IngredientItem {
  name: string | null;
  value: string | null;
  color: string | null;
}
export default IngredientVisualProps;
