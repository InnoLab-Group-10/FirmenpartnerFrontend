import React from 'react';
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';

// TODO support update of companies without assignments
const AddListRecipientForm = props => {
	return (
		<Form>
			<Row>
				<Col lg>
					<FloatingLabel label='Firmenname' className='mb-3'>
						<Form.Control
							type='text'
							placeholder='Firmenname'
							// defaultValue={entry.company.name}
							/*{...register('name', { required: true })}
							isInvalid={errors.name}*/
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Vorname' className='mb-3'>
						<Form.Control
							type='text'
							placeholder='Vorname'
							// defaultValue={entry.contacts[0].firstName}
							/*{...register('firstName', { required: true })}
							isInvalid={errors.firstName}*/
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Nachname' className='mb-3'>
						<Form.Control
							type='text'
							placeholder='Nachname'
							// defaultValue={entry.contacts[0].lastName}
							/*{...register('lastName', { required: true })}
							isInvalid={errors.lastName}*/
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
							// defaultValue={entry.contacts[0].email}
							/* {...register('email', {
								required: true,
								pattern: /^(([a-z]|[0-9]|-|_)+\.?)+@(([a-z]|[0-9]|-|_)+\.?)+$/i,
							})}
							isInvalid={errors.email}*/
						/>
					</FloatingLabel>
				</Col>
			</Row>
			<Row>
				<Col lg>
					<div className='d-grid'>
						<Button variant='primary' type='submit' size='lg'>
							Hinzufügen
						</Button>
					</div>
				</Col>
			</Row>
		</Form>
	);
};

export default AddListRecipientForm;
