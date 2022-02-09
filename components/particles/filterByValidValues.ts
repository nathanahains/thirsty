const filterByValidValues = (set: any) =>
  Object.values(set).filter((data) => !!data);

export default filterByValidValues;
