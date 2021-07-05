import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

function Button(props) {
  const { name } = props;
  const handleClick = (buttonName) => props.clickHandler(buttonName);

  return (

    <button
      className={name === '0' ? 'button zero-button' : 'button'}
      type="button"
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
