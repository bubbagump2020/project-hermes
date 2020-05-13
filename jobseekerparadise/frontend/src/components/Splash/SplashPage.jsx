import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CreateUser from './CreateUser'
import Login from './Login'

const SplashPage = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <CreateUser />
                </Col>
                <Col>
                    <Login />
                </Col>
            </Row>
            <h6 style={{textAlign: "center"}}>Created By Kevin Bagnall, May 2020</h6>
        </Container>
    )
}

export default SplashPage;