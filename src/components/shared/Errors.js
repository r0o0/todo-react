import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
// CSS
import './Errors.sass';

function Errors(props) {
  const {
    value,
    inputId,
    // actions
    isError,
  } = props;

  const [errors, setErrors] = useState(null);

  const inputRequired = (data) => {
    const errorMsgs = {};
    // trigger error when no value is found in input field
    if (data.length <= 0) {
      errorMsgs.text = 'Please type something.';
    } else {
      errorMsgs.text = null;
    }
    return errorMsgs.text;
  };

  useEffect(() => {
    const msg = inputRequired(value);
    setErrors(msg);
    // set error state
    if (msg !== null) {
      isError(inputId, errors);
    } else {
      isError(inputId, errors);
    }
  }, [value]);

  return (
    <p className="text--error">{errors}</p>
  );
}

Errors.propTypes = {
  value: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  // actions
  isError: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  focused: store.focused.form,
});

export default connect(mapStateToProps, actions)(Errors);
