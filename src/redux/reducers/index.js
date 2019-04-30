import { combineReducers } from 'redux';
// REDUCERS
import data from './data';
import modal from './modal';

const reducers = combineReducers({
  data,
  modal,
});

export default reducers;
