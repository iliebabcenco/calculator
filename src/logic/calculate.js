import operate from './operate';

export default function calculate(calculator, buttonName) {
  let { total, next, operation } = calculator;
  if (buttonName === '+/-') {
    total *= (-1);
    next *= (-1);
  }
  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(buttonName)) {
    if (total === '0') {
      total = buttonName;
    } else if (!next) {
      total += buttonName;
    }
    if (next) {
      next += buttonName;
    }
  }

  if (buttonName === '.') {
    if (next) {
      next += '.';
    } else {
      total += '.';
    }
  }

  if (['+', '-', '÷', '%', 'X'].includes(buttonName)) {
    total = operate(parseFloat(total), parseFloat(next), operation);
  }
  return { total, next, operation };
}
