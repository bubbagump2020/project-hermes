import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useAuth } from '../../context/aut'

const SiteNavbar = (props) => {
    const path = props.path

    const { setAuthTokens } = useAuth()

    const logOutClick = () => {
        setAuthTokens(null)
    }

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href={`${path}`}>Home</Navbar.Brand>
            <Nav>
                <Nav.Link href={`${path}/profile`}>User Profile (To be replaced with icon w/dropdown menu)</Nav.Link>
            </Nav>
            <Button variant="outline-info" onClick={logOutClick}>Logout</Button>
        </Navbar>
    )
}

export default SiteNavbar