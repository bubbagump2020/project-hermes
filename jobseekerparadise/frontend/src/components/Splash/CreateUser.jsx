import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { ROOT_URL } from '../../TopLevelConstants'

const CreateUser = () => {

    const [newUser, setNewUser] = React.useState({
        username: null,
        email: null,
        password_digest: null
    })

    const handleChange = (e) => {
        e.preventDefault()
        switch(e.currentTarget.placeholder){
            case "Email":
                setNewUser({ ...newUser, email: e.target.value })
                break;
            case "Username":
                setNewUser({ ...newUser, username: e.target.value })
                break;
            default:
                setNewUser({ ...newUser, password_digest: e.target.value})
        }

    }

    let data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username: newUser.username,
            email: newUser.email,
            password_digest: newUser.password_digest
        })
    }


    const handleSubmit =  (e) => {
        e.preventDefault()
        console.log(e.target)
        fetch(`${ROOT_URL}/users`)
        .then(response => response.json())
        .then(data => console.log(data))
        fetch(`http://localhost:3001/users`, data)
        .then(response => response.json())
        .then(data => console.log(data))

    }

    return(
        <Jumbotron>
            <h2>Join The Family!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Text>We're happy to have you!</Form.Text>
                <br></br>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" onChange={handleChange}/>
                </Form.Group>
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

export default CreateUser