import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CreateUser from './CreateUser'
import Login from './Login'

const SplashPage = (props) => {
    return(
        <Container>
            <Row>
                <Col>
                    <CreateUser props={props}/>
                </Col>
                <Col>
                    <Login props={props}/>
                </Col>
            </Row>
            <h5 style={{textAlign: "center"}}>Some cool/stock photos about jobs and employment if possible</h5>
            <h6 style={{textAlign: "center"}}>Created By Kevin Bagnall, May 2020</h6>
        </Container>
    )
}

export default SplashPage;