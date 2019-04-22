import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    classname,
    type,
    value,
  } = props;
  return (
    <input className={classname} type={type} value={value} />
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
};

export default Button;
