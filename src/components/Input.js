import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// CSS
import './Input.sass';

const Input = React.forwardRef((props, ref) => {
  const {
    type,
    name,
    label,
    placeholder,
    classname,
    autocomplete,
    value,
  } = props;

  // Pass value dynamically to parent component
  const handleValue = (newValue) => {
    value(newValue.trim());
  };
  return (
    <Fragment>
      <label className={`label ${classname}`} htmlFor={name}>
        {label}
        <input
          ref={ref}
          className={`input ${classname}`}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          autoComplete={autocomplete !== undefined ? autocomplete : ''}
          onChange={e => handleValue(e.target.value)}
        />
      </label>
    </Fragment>
  );
});

Input.defaultProps = {
  placeholder: '',
  classname: '',
  autocomplete: '',
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  classname: PropTypes.string,
  autocomplete: PropTypes.string,
  value: PropTypes.func.isRequired,
};

export default Input;
