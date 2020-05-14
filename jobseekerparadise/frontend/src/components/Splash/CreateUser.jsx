import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Alert from 'react-bootstrap/Alert'
import { ROOT_URL } from '../../TopLevelConstants'

const CreateUser = (props) => {

    const [newUser, setNewUser] = React.useState({
        username: null,
        email: null,
        password_digest: null
    })

    const history = props.props.history

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

    const handleErrors = (errors) => {
        if (errors !== undefined ){
            return errors.map(warning => {
                return(
                    <Alert key={warning} variant="warning">
                        Sorry that {warning.toLowerCase()}
                    </Alert>
                )
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newUserResponse = await fetch(`${ROOT_URL}/users`, data)
        const newUserData = await newUserResponse.json()
        setNewUser(newUserData)
        console.log(newUserData)
        if (newUserData.success) {
            
            history.push(`/${newUserData.username}`)
            console.log(history)
        }
    }

    return(
        <Jumbotron>
            <h2>Join The Family!</h2>
            {handleErrors(newUser.error)}
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
            </Form><br></br>
        </Jumbotron>
    )
}

export default CreateUser