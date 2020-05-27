import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { ROOT_URL } from '../../TopLevelConstants'
import { userName, userLogin, userPassword } from '../../redux/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../context/aut'
// import Alert from 'react-bootstrap/Alert'
// import Toast from 'react-bootstrap/Toast'


const Login = (props) => {

    const dispatch = useDispatch()
    const {user} = useSelector(state =>({ user: state.userReducer }))
    const { setAuthTokens } = useAuth()

    let data = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: user.username,
            password: user.password
        })
    }

    // Current implementation of token authentication requires user input (ex. logout button) to flush localStorage of the token

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userResponse = await fetch(`${ROOT_URL}/login`, data)
        const userData = await userResponse.json()
        if (userData.success){
            dispatch(userLogin(userData))
            localStorage.setItem('token', userData.jwt)
            // setAuthTokens(userData.jwt)
            props.props.history.push(`/${userData.username}`)
        }
    }

    return(
        <Jumbotron>
            <h2>Welcome Back!</h2>
            <Form onSubmit={handleSubmit}>
                <br></br>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" onChange={e => dispatch(userName(e.target.value))} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e=> dispatch(userPassword(e.target.value))} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Jumbotron>
    )
}

export default Login