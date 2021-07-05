import React, { useState } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = ({ calculator: initialCalculator }) => {
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
      <Display result={show.toString()} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

App.defaultProps = {
  calculator: { total: null, next: null, operation: null },
};

App.propTypes = {
  calculator: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }),
};

export default App;
