import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  const calculator = {
    total: '56',
    next: '35',
    opeartion: '',
  };
  return (
    <>
      <Display result={calculate(calculator, '%').total.toString()} />
      <ButtonPanel />
    </>
  );
}

export default App;
