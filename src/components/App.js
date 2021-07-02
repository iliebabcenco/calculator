import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Big from 'big.js';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App(props) {
  const { num } = props;
  return (
    <div className="App">
      <p>
        Result:
        {num}
      </p>
      <p>
        And this is Big object:
        {new Big(123.4567).toPrecision(5)}
      </p>

      <Display result="15" />
      <ButtonPanel />
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
