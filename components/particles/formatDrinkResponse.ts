const joinIngredientsToMeasurements = (dataObj: any) => {
  const ingredientConversionObj: any = {};
  const extractNumberFromKey = (key: string) => key.replace(/^\D+/g, "");
  const isExtractedNumberInObj = (key: string) =>
    ingredientConversionObj[extractNumberFromKey(key)];
  Object.keys(dataObj).map((key: string) => {
    // checks if a previous iteration has matching number
    if (isExtractedNumberInObj(key)) {
      // if so, joins the two values together for the correct combination
      ingredientConversionObj[key.replace(/^\D+/g, "")] = [
        ingredientConversionObj[key.replace(/^\D+/g, "")],
        dataObj[key],
      ];
    } else {
      // else, validates the key is without any numbers
      if (extractNumberFromKey(key) !== "")
        // if so, adds the key/value to the object
        ingredientConversionObj[key.replace(/^\D+/g, "")] = dataObj[key];
    }
  });
  return ingredientConversionObj;
};

const formatDrinkResponse = (data: any) => {
  return data.map(
    (dataObj: {
      strDrink: string;
      strDrinkThumb: string;
      strInstructions: string;
    }) => {
      return {
        name: dataObj.strDrink || "N/A",
        url: dataObj.strDrinkThumb || "",
        instructions: dataObj.strInstructions || "",
        ingredients: joinIngredientsToMeasurements(dataObj) || [],
      };
    }
  );
};

export default formatDrinkResponse;
