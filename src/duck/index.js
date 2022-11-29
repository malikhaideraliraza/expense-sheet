import { combineReducers } from 'redux';

//Reducers
import ExpenseReducer from "./expense/Reducer";
import UserReducer from "./user/Reducer";

export default combineReducers({
    expense: ExpenseReducer,
    user: UserReducer
});
