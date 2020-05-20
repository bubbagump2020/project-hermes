import React from 'react'
import Container from 'react-bootstrap/Container'
import SiteNavbar from '../SiteWide/SiteNavbar'

const Profile = (props) => {

    // Need Redux now

    console.log(props)
    const currentUser = props.match.params.username
    console.log(currentUser)
    return(
       <Container>
           <SiteNavbar profileUser={currentUser}/>
       </Container>
    )
}

export default Profile