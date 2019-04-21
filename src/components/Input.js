import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// CSS
import './Input.sass';

function Input (props) {
  const {
    type,
    name,
    label,
    placeholder,
    classname,
    autocomplete,
    value
  } = props;

  // Pass value dynamically to parent component
  const handleValue = newValue => {
    value(newValue.trim());
  }
  return (
    <Fragment>
      <label className={`label ${classname}`} htmlFor={name}>{label}</label>
      <input
        className={`input ${classname}`}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete={autocomplete !== undefined ? autocomplete : ""}
        // onChange={e => setValue(e.target.value)}
        onChange = {e => handleValue(e.target.value)}
      />
    </Fragment>
  )
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  autocomplete: PropTypes.string,
  value: PropTypes.func.isRequired
};

export default Input;