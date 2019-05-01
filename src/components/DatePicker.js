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
        id="date-picker"
        // input
        date={state.date}
        onDateChange={date => handleDate({ date })}
        focused={state.focused}
        onFocusChange={({ focused }) => setState({ focused })}
        displayFormat={() => 'DD.MMM.YYYY'}
        // customInputIcon - PropTypes.nodes (custom icon for date picker)
        // calendar
        numberOfMonths={1}
        monthFormat="YYYY MMMM" // changes calendar's month and year format
        openDirection="up"
        keepOpenOnDateSelect={false}
        hideKeyboardShortcutsPanel
      />
    </div>
  );
}

DatePicker.propTypes = {
  date: PropTypes.func.isRequired,
};

export default DatePicker;
