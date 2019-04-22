import {
  ADD_TODO,
} from '../../constants/action-types';
import { db } from '../../firebase/firebaseConfig';

// to view in redux
const setTodo = newTodo => ({
  type: ADD_TODO,
  payload: newTodo,
});

const addTodo = newTodo => async (dispatch) => {
  // send to redux
  await dispatch(setTodo(newTodo));
  // send to firebase
  db.ref().child('todos').push().set(newTodo);
};

export {
  // eslint-disable-next-line import/prefer-default-export
  addTodo,
};
