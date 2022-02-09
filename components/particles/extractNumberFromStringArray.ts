const extractNumberFromStringArray = (value: string[]) =>
eval(
  value?.reduce((acc: any, cur: any) => {
    // Does the current value contain a number and is a valid decimal?
    if (/\d/.test(cur) && parseFloat(eval(cur))) {
      // if so, add the formatted value to the formatted accumulator
      return parseFloat(eval(acc)) + parseFloat(eval(cur));
    } else {
      // else, return the accumulator
      return acc;
    }
  })
    );

    export default extractNumberFromStringArray