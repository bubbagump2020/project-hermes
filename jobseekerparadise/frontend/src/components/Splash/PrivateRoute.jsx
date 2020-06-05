import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const loginToken = localStorage.getItem('jwt')
    return(
        <Route
            {...rest}
            render={props =>
                loginToken ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    )

}

export default PrivateRoute