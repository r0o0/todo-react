import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
// CSS
import './DatePicker.sass';

function DatePicker(props) {
  const { date } = props;
  const initialState = {
    date: moment(),
    focused: false,
  };
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);

  const handleDate = (newDate) => {
    setState({ date: newDate.date });

    // pass date to parent component
    // eslint-disable-next-line no-underscore-dangle
    date(newDate.date._d.toString());
  };

  return (
    <div className="date-picker__container">
      <SingleDatePicker
        showClearDate
        numberOfMonths={1}
        date={state.date}
        onDateChange={date => handleDate({ date })}
        focused={state.focused}
        onFocusChange={({ focused }) => setState({ focused })}
        openDirection="up"
        displayFormat={() => 'DD/MM/YYYY'}
        keepOpenOnDateSelect={false}
        hideKeyboardShortcutsPanel
        id="date-picker"
      />
    </div>
  );
}

DatePicker.propTypes = {
  date: PropTypes.func.isRequired,
};

export default DatePicker;
