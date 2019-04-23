import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    classname,
    type,
    value,
    handleClick,
  } = props;
  return (
    <input
      className={classname}
      type={type}
      value={value}
      onClick={handleClick}
    />
  );
}

Button.defaultProps = {
  classname: '',
  type: 'button',
};

Button.propTypes = {
  classname: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
