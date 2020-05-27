import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const SiteNavbar = (props) => {

    // console.log(props)
    const path = props.path

    const handleLogoutClick = (e) => {
        let token = localStorage.getItem('token')
        if (token) {
            console.log('token exist')
        } else {
            console.log('token does not exist')
        }
        token = null
        localStorage.setItem('token', token)
    }

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href={`${path}`}>Home</Navbar.Brand>
            <Nav>
                <Nav.Link href={`${path}/profile`}>User Profile (To be replaced with icon w/dropdown menu)</Nav.Link>
            </Nav>
            <Button variant="outline-info" onClick={handleLogoutClick}>Logout</Button>
        </Navbar>
    )
}

export default SiteNavbar