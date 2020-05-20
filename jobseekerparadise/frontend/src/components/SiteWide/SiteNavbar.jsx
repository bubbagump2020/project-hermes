import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const SiteNavbar = (props) => {

    // console.log(props)
    const path = props.path

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href={`${path}`}>Home</Navbar.Brand>
            <Nav>
                <Nav.Link href={`${path}/profile`}>User Profile (To be replaced with icon w/dropdown menu)</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default SiteNavbar