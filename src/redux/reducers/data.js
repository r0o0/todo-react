import {
  ADD_TODO
} from '../../constants/action-types';

const data = (state={}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return action.payload;
    default:
      return state;
  }
};

export default data;
