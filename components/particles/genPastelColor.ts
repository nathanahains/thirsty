const genPastelColor = () => {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 70 * Math.random()) +
    "%," +
    (75 + 10 * Math.random()) +
    "%)"
  );
};

export default genPastelColor;
