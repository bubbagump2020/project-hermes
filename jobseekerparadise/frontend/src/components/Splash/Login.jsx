import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { ROOT_URL } from '../../TopLevelConstants'
import Alert from 'react-bootstrap/Alert'
import Toast from 'react-bootstrap/Toast'


const Login = (props) => {

    const [user, setUser] = React.useState({
        username: null,
        password: null,
        success: null
    })

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

    const handleChange = (e) => {
        e.preventDefault()
        switch(e.currentTarget.placeholder){
            case "Username":
                setUser({ ...user, username: e.target.value })
                break;
            default:
                setUser({ ...user, password: e.target.value })
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const userResponse = await fetch(`${ROOT_URL}/login`, data)
        const userData = await userResponse.json()
        console.log(userData)
        if (userData.success){
            localStorage.setItem('token', userData.jwt)
            props.props.history.push(`/${userData.user.username}`)
        }
    }

    return(
        <Jumbotron>
            <h2>Welcome Back!</h2>
            <Form onSubmit={handleSubmit}>
                {/* {handleSuccess(user)} */}
                <br></br>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" onChange={handleChange}/>               
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Jumbotron>
    )
}

export default Login