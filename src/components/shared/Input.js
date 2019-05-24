import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
// COMPONENTS
import Errors from './Errors';
// UTILS
import { addClass, removeClass } from '../../utils/index';
// CSS
import './Input.sass';

const Input = (props) => {
  const {
    type,
    name,
    label,
    placeholder,
    classname,
    autocomplete,
    value,
    // actions
    errors,
    focused,
    isFocused,
  } = props;

  const [inputValue, setInputValue] = useState(null);
  const [focusedState, setFocusedState] = useState(null);

  // Pass value dynamically to parent component
  const handleValue = (newValue) => {
    setInputValue(newValue.trim());
    value(newValue.trim());
  };

  const handleBlur = (e) => {
    isFocused(name, false, 'form');
    handleValue(e.target.value);
  };

  const handleFocus = (e) => {
    const targetAttribute = e.target.getAttribute('name');
    if (name === targetAttribute) {
      isFocused(name, true, 'form');
    }
  };

  useEffect(() => {
    const target = document.querySelector(`input[name=${name}]`);
    if (focused !== undefined && focused !== null) {
      const hasKey = Object.prototype.hasOwnProperty.call(focused, name);
      // when input is focused don't indicate input error style
      if (hasKey && focused[name].status) {
        removeClass(target, 'input--error');
        setFocusedState(true);
      }
      // when input is blurred indicate input error style
      if (hasKey && !focused[name].status) {
        addClass(target, 'input--error');
        setFocusedState(false);
      }
    }
  }, [errors, focused]);

  return (
    <Fragment>
      <label className={`label ${classname}`} htmlFor={name}>
        {label}
        <input
          // ref={ref}
          className={`input ${classname}`}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          autoComplete={autocomplete !== undefined ? autocomplete : ''}
          onChange={e => handleValue(e.target.value)}
          onBlur={e => handleBlur(e)}
          onFocus={e => handleFocus(e)}
          required
        />
      </label>
      {focusedState !== null && !focusedState ? <Errors value={inputValue} inputId={name} /> : null}
    </Fragment>
  );
};

Input.defaultProps = {
  placeholder: '',
  classname: '',
  autocomplete: '',
};

Input.defaultProps = {
  errors: null,
  focused: null,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  classname: PropTypes.string,
  autocomplete: PropTypes.string,
  value: PropTypes.func.isRequired,
  // actions
  errors: PropTypes.shape({
    text: PropTypes.string,
  }),
  focused: PropTypes.shape({
    todo: PropTypes.object,
  }),
  isFocused: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  errors: store.errors,
  focused: store.focused.form,
});

export default connect(mapStateToProps, actions)(Input);
