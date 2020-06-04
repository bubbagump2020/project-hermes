import React from 'react'
import Container from 'react-bootstrap/Container'
import SiteNavbar from '../SiteWide/SiteNavbar'
import SearchBarForm from './SearchBarForm'

const Home = (props) => {

    const currentUser = props.match.params.username
    const currentUserURI = props.location.pathname



    return(
        <Container>
            <SiteNavbar currentUser={currentUser} path={currentUserURI} />
            <div>
               <SearchBarForm />
            </div>
            <div>
                Welcome back message component?
            </div>
            <div>
                Search bar component?
            </div>
        </Container>
    )
}

export default Home