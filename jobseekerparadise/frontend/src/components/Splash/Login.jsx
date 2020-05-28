import React from 'react'
import { post } from 'axios'
import { ROOT_URL } from '../../TopLevelConstants'


const Login = (props) => {

    const [user, setUser] = React.useState({
        email: null,
        password: null
    })

    const handleSubmit = async (event) => {
        event.preventDefault()
        const request = { "auth": {"email": user.email, "password": user.password}}
        const response = await post(`${ROOT_URL}/api/user_token`, request)
        console.log(response)
    }

    return(
        <div className="jumbotron">
            <h2>Login!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input name="email" id="email" type="email" className="form-control" onChange={e => setUser({ ...user, email: e.target.value })}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input name="password" id="password" type="password" className="form-control" onChange={e => setUser({ ...user, password: e.target.value})}/>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}

export default Login