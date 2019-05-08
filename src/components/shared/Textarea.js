import React from 'react';
import PropTypes from 'prop-types';
// CSS
import './Textarea.sass';

function Textarea(props) {
  const {
    label,
    value,
    placeholder,
    isRequired,
  } = props;

  const handleValue = (newValue) => {
    value(newValue.trim());
  };

  return (
    <div className="label" id={label}>
      {label}
      <div
        className="textarea"
        id={label}
        role="textbox"
        contentEditable="true"
        aria-labelledby={label}
        aria-placeholder={placeholder}
        aria-required={isRequired}
        aria-multiline="true"
        onChange={e => handleValue(e.target.value)}
      />
    </div>
  );
}

Textarea.defaultProps = {
  placeholder: '',
  isRequired: false,
};

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  // value
  value: PropTypes.func.isRequired,
};

export default Textarea;
