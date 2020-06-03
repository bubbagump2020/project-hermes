import React from 'react'
import { post } from 'axios'
import { ROOT_URL } from '../../TopLevelConstants'
import { useDispatch, useSelector } from 'react-redux'
import { userName, userEmail, userPassword, userLogin } from '../../redux/actions/userActions'

const CreateUser = (props) => {

    const handleSubmit = async (event) => {
        event.preventDefault()
        const email = document.getElementById('email').value
        const name = document.getElementById('name').value
        const password = document.getElementById('password').value
        const request = {
            "user": {
                "name": name,
                "email": email,
                "password": password
            }
        }
        const response = await post(`${ROOT_URL}/api/users`, request)
        console.log(response)
    }

    return(
        <div className="jumbotron">
            <h2>Create your Account!</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Username: </label>
                    <input name="name" id="name" type="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input name="email" id="email" type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input name="password" id="password" type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}

export default CreateUser