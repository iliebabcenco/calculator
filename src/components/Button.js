import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { content } = props;
  return (
    <button className="button" type="button">{content}</button>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Button;
