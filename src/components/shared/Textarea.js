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

  // ref
  const textInput = React.createRef();

  const handleValue = (newValue) => {
    if (newValue !== null) {
      value(newValue);
    }
  };

  return (
    <div className="label" id={label}>
      {label}
      <div
        className="textarea"
        id={label}
        ref={textInput}
        role="textbox"
        contentEditable="true"
        aria-labelledby={label}
        aria-placeholder={placeholder}
        aria-required={isRequired}
        aria-multiline="true"
        onInput={() => handleValue(textInput.current.innerHTML)}
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
