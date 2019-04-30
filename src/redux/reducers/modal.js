import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../../constants/action-types';

const initialState = {
  type: 'all',
  status: false,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      if (action.type === SHOW_MODAL) {
        const {
          type,
          status,
        } = action.payload;
        return {
          type,
          status,
        };
      }
      break;
    case HIDE_MODAL:
      if (action.type === HIDE_MODAL) {
        const {
          type,
          status,
        } = action.payload;
        return {
          type,
          status,
        };
      }
      break;
    default:
      return state;
  }
};

export default modal;
