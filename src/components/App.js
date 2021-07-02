import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  const calculator = {
    total: '1000',
    next: '34',
    operation: 'X',
  };
  return (
    <>
      <Display result={calculate(calculator, '-').total.toString()} />
      <ButtonPanel />
    </>
  );
}

export default App;
