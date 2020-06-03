import React from 'react'
import { post, get } from 'axios'
import { ROOT_URL } from '../../TopLevelConstants'
import { useHistory } from 'react-router-dom'


const Login = () => {

    const [user, setUser] = React.useState({
        username: null,
        password: null
    })
    const history = useHistory()
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const request = {
            "auth":{
                "username": user.username,
                "password": user.password
            }
        }
        const response = await post(`${ROOT_URL}/api/user_token`, request)
        localStorage.setItem('jwt', response.data.jwt)
        localStorage.setItem('user', user.username)
        history.push(`/${user.username}`)
    }
    return(
        <div className="jumbotron">
            <h2>Login!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Email: </label>
                    <input name="name" id="name" type="name" className="form-control" onChange={e => setUser({ ...user, username: e.target.value })}/>
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