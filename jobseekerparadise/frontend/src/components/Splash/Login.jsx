import React from 'react'
import { post } from 'axios'
import { ROOT_URL } from '../../TopLevelConstants'
import { Redirect } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import {toast} from 'react-toastify'


const Login = () => {

    const showErrorMessage = () => {
        toast.error('Username or password incorrect', {
            hideProgressBar: true,
            closeOnClick: true,
            position: 'top-right',
        })
    }    

    const handleSubmit = async (event) => {
        event.preventDefault()
        const request = {
            "auth":{
                "username": document.getElementById('login-username').value,
                "password": document.getElementById('login-password').value
            }
        }
        let response = null 
        try{
            response = await post(`${ROOT_URL}/api/user_token`, request)
            if (response.status === 201){
                localStorage.setItem('jwt', response.data.jwt)
                localStorage.setItem('user', document.getElementById('login-username').value)
                window.location.reload(false)
            }
        } catch (err) {
            response = err.response
            showErrorMessage(response)
        }     
    }

    const checkForToken = (token) => {
        const user = localStorage.getItem('user')
        if (token){
            return <Redirect to={`/${user}`} />
        }
    }

    return(
        <Container>
            {checkForToken(localStorage.getItem('jwt'))}
            <Jumbotron>
                <h2>Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="login-username">
                        <Form.Label>Username: </Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="login-password">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="dark" type="submit">Login</Button>
                </Form>
            </Jumbotron>
        </Container>
    )
}

export default Login