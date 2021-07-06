import React, { useState } from 'react';
import '../styles/Navbar.css';
import '../styles/Calculator.css';
import PropTypes from 'prop-types';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const Calculator = ({ calculator: initialCalculator }) => {
  const [calculator, setCalculator] = useState(initialCalculator);

  const handleClick = (buttonName) => {
    setCalculator(calculate(calculator, buttonName));
  };
  let show = calculator.total;
  if (calculator.next) {
    show = calculator.next;
  }
  if (show === null) {
    show = '0';
  }
  return (
    <>
      <div className="calculator-div">
        <h3>Let’s do some math!</h3>
        <div className="calculator">
          <Display result={show.toString()} />
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </div>
    </>
  );
};

Calculator.defaultProps = {
  calculator: { total: null, next: null, operation: null },
};

Calculator.propTypes = {
  calculator: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }),
};

export default Calculator;
