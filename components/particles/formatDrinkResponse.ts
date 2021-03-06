import convertToSlug from "./convertToSlug";


const joinIngredientsToMeasurements = (dataObj: any) => {
  const ingredientConversionObj: any = {};
  const extractNumberFromKey = (key: string) => key.replace(/^\D+/g, "");
  const isExtractedNumberInObj = (key: string) =>
    ingredientConversionObj[extractNumberFromKey(key)];
  
  Object.keys(dataObj).map((key: string) => {
    // checks if a previous iteration has matching number
    if (isExtractedNumberInObj(key)) {
      // if so, adds the matching name to the object
      ingredientConversionObj[key.replace(/^\D+/g, "")].value =  dataObj[key]
    } else {
      // else, validates the key is without any numbers 
      if (extractNumberFromKey(key) !== "")
        // if so, adds the value to the object
        ingredientConversionObj[key.replace(/^\D+/g, "")] = {
          name: dataObj[key]
        };
    }
  });
  return Object.values(ingredientConversionObj).filter((obj:any)=> obj.name);
};

const formatDrinkResponse = (data: any) => {
  return data.map(
    (dataObj: {
      strDrink: string;
      strDrinkThumb: string;
      strInstructions: string;
    }) => {
      console.log(joinIngredientsToMeasurements(dataObj))
      return {
        name: dataObj.strDrink || "N/A",
        slug: convertToSlug(dataObj.strDrink) || "",
        url: dataObj.strDrinkThumb || "",
        instructions: dataObj.strInstructions || "",
        ingredients: joinIngredientsToMeasurements(dataObj) || [],
      };
    }
  );
};

export default formatDrinkResponse;
