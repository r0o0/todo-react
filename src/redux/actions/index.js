import {
  // TODO
  ADD_TODO,
  FETCH_TODOS,
  FETCH_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  // MODAL
  SHOW_MODAL,
  HIDE_MODAL,
  // ERROR
  IS_ERROR,
  // ETC
  IS_FOCUSED,
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
      type: FETCH_TODOS,
      payload: snapshot.val(),
    });
  });
};

const fetchTodo = todoId => async (dispatch) => {
  db.ref().child('todos').on('value', (snapshot) => {
    dispatch({
      type: FETCH_TODO,
      payload: snapshot.child(todoId).val(),
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

// update todo
const updateTodo = (todoId, updated) => async (dispatch) => {
  await dispatch({
    type: UPDATE_TODO,
    payload: {
      [todoId]: {
        data: updated,
      },
    },
  });
  db.ref().child(`todos/${todoId}`).update(updated);
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
    type: HIDE_MODAL,
    payload: {
      type,
      status,
    },
  });
};

// ERROR
const isError = (type, status) => (dispatch) => {
  dispatch({
    type: IS_ERROR,
    payload: {
      type,
      status,
    },
  });
};

// ETC
const isFocused = (type, status, category) => (dispatch) => {
  dispatch({
    type: IS_FOCUSED,
    payload: {
      type,
      status,
      category,
    },
  });
};

export {
  // TODO
  addTodo,
  fetchTodos,
  fetchTodo,
  deleteTodo,
  updateTodo,
  // MODAL
  showModal,
  hideModal,
  // ERROR
  isError,
  // ETC
  isFocused,
};
