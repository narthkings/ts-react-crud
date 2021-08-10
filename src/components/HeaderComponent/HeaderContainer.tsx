import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export const HeaderContainer = () => {
    return (
        <Container fluid={true} className="py-5 bg-info">
            <Row>
                <Col>
                    <div className="fs-2 fw-bold text-white text-center">
                        USER RECORD APP
                    </div>
                </Col>
                <Col>
                    rest of the navs
                </Col>
            </Row>
        </Container>
    )
}


