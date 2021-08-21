import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

export const HeaderContainer = () => {
    return (
        <Container fluid={true} className="py-5 bg-info">
            <Row>
                <Col>
                    <div className="fs-2  text-center">
                        <Link className="text-white text-decoration-none fw-bold" to="/">
                            USER RECORD APP
                        </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <Link className="text-white text-decoration-none fs-4" to="/all-users">All users</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


