import {
  ADD_TODO,
  FETCH_TODOS,
  FETCH_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from '../../constants/action-types';

const data = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        new_todo: action.payload,
      };
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case FETCH_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        archive: action.payload,
      };
    case UPDATE_TODO:
      return {
        ...state,
        updated: action.payload,
      };
    default:
      return state;
  }
};

export default data;
