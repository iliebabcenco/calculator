import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css';

function Display(props) {
  const { result } = props;
  return (
    <div className="calc-display">
      <h3 className="calc-display-h3">
        {result}
      </h3>
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
