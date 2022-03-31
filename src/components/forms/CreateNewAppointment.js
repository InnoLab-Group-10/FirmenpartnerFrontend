import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const CreateNewAppointment = () => {
	return (
        <Form>
            <Row>
                <Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
                    <Form.Label>Eintrags-Typ wählen</Form.Label>
                    <Form.Select>
                        <option>Typ 1</option>
                        <option>Typ 2</option>
                        <option>Typ 3</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
                        <Form.Label>Datum</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
                        <Form.Label>Uhrzeit</Form.Label>
                        <Form.Control type="time"/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
                    <Form.Label>Nachricht</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Ihre Nachricht"
                        style={{ height: '100px' }}
                    />
                </Form.Group>
            </Row>  
		</Form>
	);
};

export default CreateNewAppointment;
