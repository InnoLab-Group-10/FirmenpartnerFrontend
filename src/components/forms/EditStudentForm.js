import React from 'react';
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';

const EditStudentForm = () => {
	return (
		<Form>
			<Row>
				<Col lg>
					<FloatingLabel label='Studenten-ID' className='mb-3'>
						<Form.Control type='text' placeholder='iXXbXXX' />
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Firstname' className='mb-3'>
						<Form.Control type='text' placeholder='Vorname' />
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Lastname' className='mb-3'>
						<Form.Control type='text' placeholder='Nachname' />
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel controlId='floatingSelect' label='Studiengang'>
						<Form.Select aria-label='Floating label select example'>
							<option>Wählen</option>
							<option value='5018209c-0398-4cac-bbbc-95941a41911b'>BIF</option>
						</Form.Select>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel controlId='floatingSelect' label='Semester'>
						<Form.Select aria-label='Floating label select example'>
							<option>Wählen</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
						</Form.Select>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='E-Mail-Adresse' className='mb-3'>
						<Form.Control type='email' placeholder='name@example.com' />
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
						<Button variant='primary' type='submit' size='lg'>
							Anlegen
						</Button>
					</div>
				</Col>
			</Row>
		</Form>
	);
};

export default EditStudentForm;
