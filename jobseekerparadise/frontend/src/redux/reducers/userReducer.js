import { userActions } from '../action-types/index'

const initialState = {

}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case userActions.USERNAME:
            return{
                ...state,
                username: action.payload
            }
        case userActions.PASSWORD:
            return{
                ...state,
                password: action.payload
            }
        case userActions.EMAIL:
            return{
                ...state,
                email: action.payload
            }
        case userActions.LOGIN:
            return{
                user: action.payload
            }
        default:
            return state
    }
  
}