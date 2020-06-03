import React from 'react'
import { post } from 'axios'
import { ROOT_URL } from '../../TopLevelConstants'
import { Redirect } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { toast } from 'react-toastify'

const CreateUser = () => {

    React.useEffect(() => {
        checkLoginToken(localStorage.getItem('jwt'))
    })

    const [errorMessages, setErrorMessages] = React.useState([])
    const showErrorMessages = (messages) => {
        // const message = localStorage.getItem('errorMessages')
        console.log(messages)
        // console.log( message)
        // toast.error(`${message}`, {
        //     hideProgressBar: true,
        //     closeOnClick: true,
        //     position: 'top-left',
        // })
        // localStorage.removeItem('errorMessages')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const email = document.getElementById('email').value
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const request = {
            "user": {
                "username": username,
                "email": email,
                "password": password
            }
        }
        let response = null
        try {
            response = await post(`${ROOT_URL}/api/users`, request)
            if (response.status === 201){
                const autoLoginResponse = await post(`${ROOT_URL}/api/user_token`,{
                    "auth": {
                        "username": username,
                        "password": password
                    }
                })
                if (autoLoginResponse.status === 201) {
                    localStorage.setItem('jwt', autoLoginResponse.data.jwt)
                    localStorage.setItem('user', username)
                    window.location.reload(false)
                }
            }
            if (response.status === 200){
                console.log(response)
                setErrorMessages(response.data.error)
                debugger
                showErrorMessages(errorMessages)
            }
        } catch(err){
            response = err
            setErrorMessages(response.data.error)
        } 
    }

    const checkLoginToken = (token) => {
        const user = localStorage.getItem('user')
        if(token){
            return <Redirect to={`/${user}`} />
        }
    }


    return(
        <Container>
            {/* {showErrorMessages()} */}
            <Jumbotron>
                <h2>Create your Account!</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label>Username: </Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" placeholder="Email"/>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Button type="submit" variant="dark">Submit</Button>
                </Form>
            </Jumbotron>
        </Container>
    )
}

export default CreateUser