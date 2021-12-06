import React from 'react';
import {Card, Container, Row, Col, Image} from 'react-bootstrap';
import { BiInfoCircle } from 'react-icons/bi';

import TestImage from '../../media/Default_Image_Thumbnail.png'

const Documents = () => {
	return <Container>
        <Card>
        <Card.Header>
            <Row>
                <Col>
                    Test
                </Col>
                <Col>
                    <BiInfoCircle className="info-button"></BiInfoCircle>
                </Col>
            </Row>
        </Card.Header>
        <Card.Body>
            <Container className="document-wrapper">
                <Row lg={6} md={4} sm={2}>
                    <Col>
                        <Image src={TestImage} rounded></Image>
                    </Col>
                    <Col>
                        <Image src={TestImage} rounded></Image>
                    </Col>
                    <Col>
                        <Image src={TestImage} rounded></Image>
                    </Col>
                    <Col>
                        <Image src={TestImage} rounded></Image>
                    </Col>
                    <Col>
                        <Image src={TestImage} rounded></Image>
                    </Col>
                    <Col>
                        <Image src={TestImage} rounded></Image>
                    </Col>
                    <Col>
                        <Image src={TestImage} rounded></Image>
                    </Col>
                    <Col>
                        <Image src={TestImage} rounded></Image>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
        <Card.Footer className="text-muted">Status</Card.Footer>
    </Card>
    </Container>
};

export default Documents;
