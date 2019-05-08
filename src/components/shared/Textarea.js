import React from 'react';
import PropTypes from 'prop-types';

function Textarea(props) {
  const {
    label,
    value,
    placeholder,
    rows,
    cols,
    min,
    max,
    isSpellcheck,
    isRequired,
    autocomplete,
  } = props;

  const handleValue = (newValue) => {
    value(newValue.trim());
  };

  return (
    <label className="" htmlFor={label}>
      {label}
      <textarea
        id={label}
        name={label}
        placeholder={placeholder}
        required={isRequired}
        // options
        rows={rows}
        cols={cols}
        minLength={min}
        maxLength={max}
        spellCheck={isSpellcheck}
        autoComplete={autocomplete}
        // value on change
        onChange={e => handleValue(e.target.value)}
      />
    </label>
  );
}

Textarea.defaultProps = {
  placeholder: '',
  // options
  rows: '',
  cols: '',
  min: '',
  max: '',
  isRequired: false,
  autocomplete: 'off',
  isSpellcheck: true,
};

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  // options
  rows: PropTypes.string,
  cols: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  isSpellcheck: PropTypes.bool,
  autocomplete: PropTypes.string,
  // value
  value: PropTypes.func.isRequired,
};

export default Textarea;
