import React from 'react';
import {Form, Row, Col, FloatingLabel, Button} from 'react-bootstrap';

const EditPartnerForm = () => {
    return (
        <Form>
            <Row>
                <Col lg>
                    <FloatingLabel label='Firmenname' className='mb-3'>
                        <Form.Control type='text' placeholder='Firmenname'/>
                    </FloatingLabel>
                </Col>
                <Col lg>
                    <FloatingLabel label='Vorname' className='mb-3'>
                        <Form.Control
                            type='text'
                            placeholder='Vorname'
                        />
                    </FloatingLabel>
                </Col>
                <Col lg>
                    <FloatingLabel label='Nachname' className='mb-3'>
                        <Form.Control
                            type='text'
                            placeholder='Nachname'
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col lg>
                    <FloatingLabel label='E-Mail-Adresse' className='mb-3'>
                        <Form.Control
                            type='email'
                            placeholder='name@example.com'
                        />
                    </FloatingLabel>
                </Col>
                <Col lg>
                    <FloatingLabel label='Telefonnummer' className='mb-3'>
                        <Form.Control
                            type='tel'
                            placeholder='+43 (0) 000 000 00 00'
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col lg>
                    <FloatingLabel label='Straße' className='mb-3'>
                        <Form.Control
                            type='text'
                            placeholder='Vorname Nachname'
                        />
                    </FloatingLabel>
                </Col>
                <Col lg>
                    <FloatingLabel label='Hausnummer' className='mb-3'>
                        <Form.Control
                            type='text'
                            placeholder='Vorname Nachname'
                        />
                    </FloatingLabel>
                </Col>
                <Col lg>
                    <FloatingLabel label='Postleitzahl' className='mb-3'>
                        <Form.Control
                            type='text'
                            placeholder='Vorname Nachname'
                        />
                    </FloatingLabel>
                </Col>
                <Col lg>
                    <FloatingLabel label='Ort' className='mb-3'>
                        <Form.Control
                            type='text'
                            placeholder='Vorname Nachname'
                        />
                    </FloatingLabel>
                </Col>
                <Col lg>
                    <FloatingLabel label='Studenten pro Jahr' className='mb-3'>
                        <Form.Control
                            type='number'
                            placeholder='Vorname Nachname'
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className='textarea'>
                <Col lg>
                    <FloatingLabel controlId='floatingTextarea2' label='Notizen'>
                        <Form.Control
                            as='textarea'
                            placeholder='Notizen anlegen'
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col lg>
                    <div className='d-grid'>
                        <Button
                            variant='primary'
                            type='submit'
                            size='lg'
                        >
                            Anlegen
                        </Button>
                    </div>
                </Col>
            </Row>
        </Form>
    );
};

export default EditPartnerForm;
