import operate from './operate';

export default function calculate(calculator, buttonName) {
  let { total, next, operation } = calculator;
  if (buttonName === '+/-') {
    if (next && next !== 0) {
      next *= (-1);
      next = next.toString();
    } else {
      total *= (-1);
      total = total.toString();
    }
  }
  if (buttonName === 'AC' || (total === null && next === null)) {
    total = null;
    next = null;
    operation = null;
  }

  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(buttonName)) {
    if (!total) {
      total = buttonName;
    } else if (total && !operation) {
      total += buttonName;
    } else if (!next) {
      next = buttonName;
    } else if (operation && total) {
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

  if (buttonName === '%' && (next === null || next === '0')) {
    total /= 100;
  } else if (buttonName === '%' && (operation === '+' || operation === '-')) {
    next = (total * next) / 100;
  } else if (buttonName === '%' && (operation === 'X' || operation === '÷')) {
    next /= 100;
  }

  if (['+', '-', '÷', 'X', '='].includes(buttonName)) {
    if (!total) total = '0';
    if (total && !next) {
      operation = buttonName;
    }
    if (total && next && operation) {
      total = operate(total, next, operation).toString();
      next = null;
      operation = buttonName;
    }
  }

  if (buttonName === '=') {
    if (!total && !next) {
      total = '0';
    }
    if (total && next && operation) {
      total = operate(total, next, operation).toString();
      next = null;
    }
  }
  return { total, next, operation };
}
