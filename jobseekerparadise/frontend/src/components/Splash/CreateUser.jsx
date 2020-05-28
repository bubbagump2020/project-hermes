import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Alert from 'react-bootstrap/Alert'
import { ROOT_URL } from '../../TopLevelConstants'
import { useDispatch, useSelector } from 'react-redux'
import { userName, userEmail, userPassword, userLogin } from '../../redux/actions/userActions'

const CreateUser = (props) => {

    const { newUser } = useSelector(state => ({ newUser: state.userReducer }))
    const [isLoggedIn, setLoggedIn] = React.useState(false)
    const [isError, setIsError] = React.useState(false)
    const history = props.props.history
    const dispatch = useDispatch()

    let data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username: newUser.username,
            email: newUser.email,
            password: newUser.password
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
        console.log(newUserResponse)
        const newUserData = await newUserResponse.json()
        dispatch(userLogin(newUserData))
        if (newUserData.success) {
            console.log('success!')
            // localStorage.setItem('token', newUserData.jwt)
            // history.push(`/${newUserData.username}`)
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
                    <Form.Control type="email" placeholder="Email" onChange={e => dispatch(userEmail(e.target.value))} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" onChange={e => dispatch(userName(e.target.value))} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => dispatch(userPassword(e.target.value))} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form><br></br>
        </Jumbotron>
    )
}

export default CreateUser