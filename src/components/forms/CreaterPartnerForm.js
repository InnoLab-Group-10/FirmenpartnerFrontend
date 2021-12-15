import React from 'react';
import { Form, Container, Card, Row, Col, FloatingLabel, Button, Accordion } from 'react-bootstrap';
import {BiInfoCircle} from 'react-icons/bi'

const CreatePartnerForm = () => {
	return (
        <Container>
            <Card>
                <Card.Header>
                    <Row>
                        <Col>
                            Partnerunternehmen anlegen
                        </Col>
                        <Col>
                            <BiInfoCircle className="info-button"></BiInfoCircle>
                        </Col>
                    </Row>
                </Card.Header>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Anlegen</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row>
                                    <Col sm>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Firmenname"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="Firmenname" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col lg>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Ansprechperson"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="Vorname Nachname" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col lg>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="E-Mail-Adresse"
                                            className="mb-3"
                                        >
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col lg>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Telefonnummer"
                                            className="mb-3"
                                        >
                                            <Form.Control type="tel" placeholder="+43 (0) 000 000 00 00" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col lg>
                                        <div className="d-grid">
                                            <Button variant="primary" type="submit" size="lg">
                                                Anlegen
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Exportieren</Accordion.Header>
                        <Accordion.Body>
                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg">
                                    Als CSV exportieren
                                </Button>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Importieren</Accordion.Header>
                        <Accordion.Body>
                            <Form.Group controlId="formFileMultiple" className="mb-3 big-upload">
                                    <Form.Label>Hier stehen Informationen über die hochladbaren Dateien.</Form.Label>
                                    <Form.Control type="file" size="lg" multiple/>
                                </Form.Group>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
        </Container>	
	);
};

export default CreatePartnerForm;
