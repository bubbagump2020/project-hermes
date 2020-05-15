import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { ROOT_URL } from '../../TopLevelConstants'
const Login = () => {

    const [user, setUser] = React.useState({
        email: null,
        password_digest: null
    })

    const handleSubmit = async () => {
        const userResponse = await fetch(`${ROOT_URL}`)
    }

    return(
        <Jumbotron>
            <h2>Welcome Back!</h2>
            <Form>
                <br></br>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" />               
                </Form.Group>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Jumbotron>
    )
}

export default Login