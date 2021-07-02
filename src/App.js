import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Big from 'big.js';

function App(props) {
  const { num } = props;
  return (
    <div className="App">
      <p>
        This is the number:
        {num}
      </p>
      <p>
        And this is Big object:
        {new Big(123.4567).toPrecision(5)}
      </p>
    </div>
  );
}

App.defaultProps = {
  num: 100,
};

App.propTypes = {
  num: PropTypes.number,
};

export default App;
