export const fetchDrinks = async (value: string) => {
  const url = `${process.env.NEXT_PUBLIC_COCKTAIL_URL}${process.env.NEXT_PUBLIC_SEARCH_COCKTAIL_BY_NAME}${value}`;
  console.log(url)
  try {
    const response = await fetch(url);
    console.log(response);
    const ok = response.ok;
    const json = await response.json();
    return [json, ok];
  } catch (e) {
    return [`Error fetching data: ${e}`, false];
  }
};
