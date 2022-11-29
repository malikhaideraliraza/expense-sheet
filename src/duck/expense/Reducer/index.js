import { SET_EXPENSES } from '../ActionsTypes';

const initialState = {
  expenses: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EXPENSES:
      return {
        ...state,
        expenses: action.payload
      };
    default:
      return state;
  }
}
