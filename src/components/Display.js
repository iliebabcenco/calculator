import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return (
    <div className="calc-display">
      {' '}
      <h3>{result}</h3>
      {' '}
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
