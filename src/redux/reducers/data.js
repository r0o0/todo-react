import {
  ADD_TODO,
  FETCH_TODO,
} from '../../constants/action-types';

const data = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        new_todo: action.payload,
      }
    case FETCH_TODO:
      return {
        ...state,
        todos: action.payload,
      }
    default:
      return state;
  }
};

export default data;
