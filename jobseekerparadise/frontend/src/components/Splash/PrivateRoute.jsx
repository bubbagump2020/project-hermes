import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../context/aut'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const {authTokens} = useAuth()
    const loginToken = localStorage.getItem('loginToken')
    console.log(authTokens)
    console.log(loginToken)
    return(
        <Route
            {...rest}
            render={props =>
                authTokens ? (
                    loginToken ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/" />
                    )
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    )

}

export default PrivateRoute