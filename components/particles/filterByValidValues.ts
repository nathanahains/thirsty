const filterByValidValues = (set: {[key: number]: any}) =>
  Object.values(set).filter((data) => !!data && data.includes(null) !== true)

export default filterByValidValues;
