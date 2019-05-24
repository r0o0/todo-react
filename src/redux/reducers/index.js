import { combineReducers } from 'redux';
// REDUCERS
import data from './data';
import modal from './modal';
import errors from './errors';
import focused from './focused';

const reducers = combineReducers({
  data,
  modal,
  errors,
  focused,
});

export default reducers;
