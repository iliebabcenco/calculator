import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);
  if (operation === '+') {
    return num1.plus(num2).toString();
  } if (operation === '-') {
    return num1.minus(num2).toString();
  } if (operation === '÷') {
    return num2 === '0' ? '0' : num1.div(num2).toString();
  } if (operation === 'X') {
    return num1.times(num2).toString();
  }
  return num1.toString();
}
