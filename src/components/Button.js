import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  const handleClick = (buttonName) => props.clickHandler(buttonName);

  return (

    <button
      className="button"
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
