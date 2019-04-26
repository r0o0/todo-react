import {
  ADD_TODO,
  FETCH_TODO,
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

const fetchTodos = () => async (dispatch) => {
  db.ref().child('todos').on('value', (snapshot) => {
    dispatch({
      type: FETCH_TODO,
      payload: snapshot.val(),
    });
  });
};

export {
  addTodo,
  fetchTodos,
};
