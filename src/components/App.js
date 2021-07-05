import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const calculator = calculate(this.state, buttonName);
    this.setState(
      calculator,
    );
  }

  render() {
    const { total, next } = this.state;
    let show = total;
    if (next) {
      show = next;
    }
    if (show === null) {
      show = '0';
    }
    return (
      <>
        <Display result={show.toString()} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
