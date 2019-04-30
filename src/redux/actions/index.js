import {
  // TODO
  ADD_TODO,
  FETCH_TODO,
  DELETE_TODO,
  // MODAL
  SHOW_MODAL,
  HIDE_MODAL,
} from '../../constants/action-types';
import { db } from '../../firebase/firebaseConfig';

// TODO
// to view in redux
const setTodo = newTodo => ({
  type: ADD_TODO,
  payload: newTodo,
});

// create todo
const addTodo = newTodo => async (dispatch) => {
  // send to redux
  await dispatch(setTodo(newTodo));
  // send to firebase
  db.ref().child('todos').push().set(newTodo);
};

// fetch todo from database
const fetchTodos = () => async (dispatch) => {
  db.ref().child('todos').on('value', (snapshot) => {
    dispatch({
      type: FETCH_TODO,
      payload: snapshot.val(),
    });
  });
};

// delete todo
const deleteTodo = (todoId, todoData) => async (dispatch) => {
  await dispatch({
    type: DELETE_TODO,
    payload: {
      id: todoId,
      todo: todoData,
    },
  });
  db.ref().child(`todos/${todoId}`).remove();
};

// MODAL
const showModal = (type, status) => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    payload: {
      type,
      status,
    },
  });
};

const hideModal = (type, status) => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    payload: {
      type,
      status,
    },
  });
};

export {
  // TODO
  addTodo,
  fetchTodos,
  deleteTodo,
  // MODAL
  showModal,
  hideModal,
};
