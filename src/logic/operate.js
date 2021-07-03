import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);
  if (operation === '+') {
    return num1.plus(num2);
  } if (operation === '-') {
    return num1.minus(num2);
  } if (operation === '÷') {
    return num1.div(num2);
  } if (operation === 'X') {
    return num1.times(num2);
  } if (operation === '%') {
    return (num1.times(num2)).div(100);
  }
  return num1;
}
