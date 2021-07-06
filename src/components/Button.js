import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

function Button(props) {
  const { name, color } = props;
  const handleClick = (buttonName) => props.clickHandler(buttonName);
  const styles = {
    backgroundColor: color,
  };

  return (

    <button
      className={name === '0' ? 'button zero-button' : 'button'}
      type="button"
      style={styles}
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  );
}

Button.defaultProps = {
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default Button;
