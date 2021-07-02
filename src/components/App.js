import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  const calculator = {
    total: '0',
    next: '0',
    operation: '',
  };
  return (
    <>
      <Display result={calculate(calculator, '').total.toString()} />
      <ButtonPanel />
    </>
  );
}

export default App;
