import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ButtonPanel.css';

function ButtonPanel(props) {
  const handleClick = (buttonName) => props.clickHandler(buttonName);
  return (
    <div className="button-panel">
      <div className="first-group group">
        <Button name="AC" clickHandler={handleClick} color="#E0E0E0" />
        <Button name="+/-" clickHandler={handleClick} color="#E0E0E0" />
        <Button name="%" clickHandler={handleClick} color="#E0E0E0" />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div className="second-group group">
        <Button name="7" clickHandler={handleClick} color="#E0E0E0" />
        <Button name="8" clickHandler={handleClick} color="#E0E0E0" />
        <Button name="9" clickHandler={handleClick} color="#E0E0E0" />
        <Button name="X" clickHandler={handleClick} />
      </div>
      <div className="third-group group">
        <Button name="4" clickHandler={handleClick} color="#E0E0E0" />
        <Button name="5" clickHandler={handleClick} color="#E0E0E0" />
        <Button name="6" clickHandler={handleClick} color="#E0E0E0" />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="fourth-group group">
        <Button name="1" clickHandler={handleClick} color="#E0E0E0" />
        <Button name="2" clickHandler={handleClick} color="#E0E0E0" />
        <Button name="3" clickHandler={handleClick} color="#E0E0E0" />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="fifth-group group">
        <Button
          name="0"
          clickHandler={handleClick}
          color="#E0E0E0"
        />
        <Button
          name="."
          clickHandler={handleClick}
          color="#E0E0E0"
        />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
