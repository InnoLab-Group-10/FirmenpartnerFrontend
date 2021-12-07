import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const SiteTitle = (props) => {
	return <Container className="site-title">
        <Row>
            <Col>
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>
                <p>{props.text}</p>
            </Col>
        </Row>
    </Container>
};

export default SiteTitle;
