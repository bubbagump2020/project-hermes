import { userActions } from '../action-types/index'

const initialState = {
    user: {
        username: null,
        email: null,
        password: null,
        success: null
    },
    token: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case userActions.USERNAME:
            return{
                ...state,
                user: {
                    ...state.user,
                    username: action.payload
                }
            }
        case userActions.PASSWORD:
            return{
                ...state,
                user: {
                    ...state.user,
                    password: action.payload
                }
            }
        default:
            return state
    }
  
}