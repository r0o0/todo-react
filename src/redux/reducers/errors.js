/* eslint-disable no-case-declarations */
import {
  IS_ERROR,
} from '../../constants/action-types';

const errors = (state = {}, action) => {
  switch (action.type) {
    case IS_ERROR:
      const {
        type,
        status,
      } = action.payload;
      return {
        type,
        status,
      };
    default:
      return state;
  }
};

export default errors;
