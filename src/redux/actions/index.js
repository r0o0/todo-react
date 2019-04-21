import {
  ADD_TODO
} from '../../constants/action-types';
import { db } from '../../firebase/firebaseConfig';

export const addTodo = newTodo => async dispatch => {
  // send to redux
  await dispatch(setTodo(newTodo));
  // send to firebase
  db.ref().child('todos').push().set(newTodo);
};

// to view in redux
const setTodo = newTodo => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
};
