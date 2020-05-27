import * as actions from '../action-types/index'

export const userName = (payload) => {
    return { type: actions.userActions.USERNAME, payload }
}

export const userEmail = (payload) => {
    return { type: actions.userActions.EMAIL, payload }
}

export const userPassword = (payload) => {
    return { type: actions.userActions.PASSWORD, payload }
}

export const userToken = (payload) => {
    return { type: actions.userActions.TOKEN, payload }
}

export const userLogin = (payload) => {
    return { type: actions.userActions.LOGIN, payload }
}