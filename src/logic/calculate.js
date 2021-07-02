import operate from './operate';

export default function calculate(calculator, buttonName) {
  let { total, next, operation } = calculator;
  if (buttonName === '+/-') {
    total *= (-1);
    total = total.toString();
    next *= (-1);
    next = next.toString();
  }
  if (buttonName === 'AC' || (total === null && next === null)) {
    total = null;
    next = null;
    operation = null;
  }

  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(buttonName)) {
    if (!total) {
      total = buttonName;
    } else if (!next) {
      total += buttonName;
    } else {
      next += buttonName;
    }
  }

  if (buttonName === '.') {
    if (next && !next.includes('.')) {
      next += '.';
    } else if (total && !total.includes('.')) {
      total += '.';
    }
  }

  if (['+', '-', '÷', '%', 'X'].includes(buttonName)) {
    total = operate(total, next, operation);
  }
  return { total, next, operation };
}
