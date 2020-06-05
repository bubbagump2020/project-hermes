import React from 'react'
import {post, get} from 'axios'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SearchBarForm = () => {

    const handleSubmit = async (event) => {
        // Indeed API needs Publisher Key
        // Monster API needs AppID and AppSecret
        // ZipRecruiter API needs Publisher Key
    }

    return(
        <Container>
            <Row>
                <Col>
                    <h3 style={{textAlign: "center"}}>Job Search</h3>
                    <Form onSubmit={handleSubmit} >
                        <Form.Row>
                            <Form.Group as={Col} controlId="keywords">
                                <Form.Control type="text" placeholder="Keywords, Company, or Title" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="location">
                                <Form.Control type="text" placeholder="Job Location" />
                            </Form.Group>
                            <Form.Group>
                                <Button type="submit">Search</Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>                
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBarForm