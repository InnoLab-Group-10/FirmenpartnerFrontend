import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const CreateNewNotification = () => {
	return (
        <Form>
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
                        placeholder="Woran möchten Sie erinnert werden?"
                        style={{ height: '100px' }}
                    />
                </Form.Group>
            </Row>  
		</Form>
	);
};

export default CreateNewNotification;
