import React, {useRef} from 'react';
import { Form, Container, Card, Row, Col, FloatingLabel, Button, Accordion } from 'react-bootstrap';
import {BiInfoCircle} from 'react-icons/bi';
import { useDispatch } from 'react-redux';

import { newCompany } from '../../store/company-thunks';

const CreatePartnerForm = () => {
    const dispatch = useDispatch();
    const companyNameRef = useRef(); 
    const contactPersonRef = useRef(); 
    const emailRef = useRef();
    const phoneRef = useRef(); 
    const streetRef = useRef();
    const houseNumberRef = useRef();
    const postcodeRef = useRef();
    const cityRef = useRef();
    const studentsPerYearRef = useRef();
    const notesRef = useRef();

	const submitHandler = e => {
		e.preventDefault();
		dispatch(
			newCompany({
                companyName: companyNameRef.current.value,
                contactPerson: contactPersonRef.current.value,
				email: emailRef.current.value,
                phone: phoneRef.current.value,
                street: streetRef.current.value,
                houseNumber: houseNumberRef.current.value,
                postcode: postcodeRef.current.value,
                city: cityRef.current.value,
                studentsPerYear: studentsPerYearRef.current.value,
                notes: notesRef.current.value,
			})
		);
	};

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
                                            <Form.Control type="text" placeholder="Firmenname" ref={companyNameRef} />
                                        </FloatingLabel>
                                    </Col>
                                    <Col lg>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Ansprechperson"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="Vorname Nachname" ref={contactPersonRef}/>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="E-Mail-Adresse"
                                            className="mb-3"
                                        >
                                            <Form.Control type="email" placeholder="name@example.com" ref={emailRef}/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col lg>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Telefonnummer"
                                            className="mb-3"
                                        >
                                            <Form.Control type="tel" placeholder="+43 (0) 000 000 00 00" ref={phoneRef}/>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Straße"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="Vorname Nachname" ref={streetRef}/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col lg>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Hausnummer"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="Vorname Nachname" ref={houseNumberRef}/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col lg>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Postleitzahl"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="Vorname Nachname" ref={postcodeRef}/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col lg>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Ort"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="Vorname Nachname" ref={cityRef}/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col lg>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Studenten pro Jahr"
                                            className="mb-3"
                                        >
                                            <Form.Control type="number" placeholder="Vorname Nachname" ref={studentsPerYearRef}/>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row className="textarea">
                                    <Col lg>
                                        <FloatingLabel controlId="floatingTextarea2" label="Notizen" ref={notesRef}>
                                            <Form.Control
                                            as="textarea"
                                            placeholder="Notizen anlegen"
                                            style={{ height: '100px' }}
                                            />
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg>
                                        <div className="d-grid">
                                            <Button variant="primary" type="submit" size="lg" onClick={submitHandler}>
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
