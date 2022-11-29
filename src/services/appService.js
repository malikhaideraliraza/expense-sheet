import { authHeader } from "./authHeader";

//enums
import { SERVICE_URL_LIST } from "../utills/enums";

export const register = (user) => {

    return {
        method: 'POST',
        url: SERVICE_URL_LIST.REGISTER,
        baseURL: process.env.REACT_APP_API_URL,
        data: user
    }
}

export const login = (user) => {

    return {
        method: 'POST',
        url: SERVICE_URL_LIST.LOGIN,
        baseURL: process.env.REACT_APP_API_URL,
        data: user
    }
}
