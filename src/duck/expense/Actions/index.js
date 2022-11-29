import { SET_EXPENSES } from '../ActionsTypes';

export const setExpensesList = (payload) => {

    return {
        type: SET_EXPENSES,
        payload
    }
}
