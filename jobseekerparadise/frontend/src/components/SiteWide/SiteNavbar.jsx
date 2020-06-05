import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router-dom'

const SiteNavbar = (props) => {
    const path = props.path

    React.useEffect(() => {
        const user = localStorage.getItem('user')
        if (!user){
           return <Redirect to="/" />
        }
    })

    const handleLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('jwt')
        window.location.reload(false)
    }

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href={`${path}`}>Home</Navbar.Brand>
            <Nav>
                <Nav.Link href={`${path}/profile`}>User Profile (To be replaced with icon w/dropdown menu)</Nav.Link>
            </Nav>
            <Button variant="outline-info" onClick={handleLogout}>Logout</Button>
        </Navbar>
    )
}

export default SiteNavbar