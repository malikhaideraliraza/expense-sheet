import { SET_CURRENT_USER } from '../ActionsTypes/index';

export const setCurrentUser = (payload) => {
    
    return {
        type: SET_CURRENT_USER,
        payload
    }
}
