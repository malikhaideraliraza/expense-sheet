import { SET_CURRENT_USER } from '../ActionsTypes';

const initialState = {
  currentUser: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
}
