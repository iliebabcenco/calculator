import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  if (operation === '+') {
    return new Big(numberOne).plus(new Big(numberTwo));
  } if (operation === '-') {
    return new Big(numberOne).minus(new Big(numberTwo));
  } if (operation === '/') {
    return new Big(numberOne).div(new Big(numberTwo));
  } if (operation === '*') {
    return new Big(numberOne).times(new Big(numberTwo));
  } else {
    return (new Big(numberOne).times(new Big(numberTwo))).div(100);
  }
}
