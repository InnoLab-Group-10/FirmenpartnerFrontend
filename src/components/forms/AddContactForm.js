import React, { useEffect } from 'react';
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { contactNewWithAssignment } from '../../store/contact-thunks';

const AddContactForm = props => {
	const dispatch = useDispatch();

	// new entry
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful, errors },
	} = useForm();

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset]);

	return (
		<Form
			onSubmit={handleSubmit(data =>
				dispatch(contactNewWithAssignment({ id: props.id, entry: data }))
			)}
		>
			<Row>
				<Col lg>
					<FloatingLabel label='Vorname' className='mb-3'>
						<Form.Control
							type='text'
							{...register('firstName', { required: true })}
							isInvalid={errors.firstName}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Nachname' className='mb-3'>
						<Form.Control
							type='text'
							{...register('lastName', { required: true })}
							isInvalid={errors.lastName}
						/>
					</FloatingLabel>
				</Col>
			</Row>
			<Row>
				<Col lg>
					<FloatingLabel label='E-Mail-Adresse' className='mb-3'>
						<Form.Control
							type='text'
							{...register('email', {
								required: true,
								pattern: /^(([a-z]|[0-9]|-|_)+\.?)+@(([a-z]|[0-9]|-|_)+\.?)+$/i,
							})}
							isInvalid={errors.email}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Telefonnummer' className='mb-3'>
						<Form.Control
							type='text'
							{...register('phone', { required: true, pattern: /^\+?[0-9]+$/ })}
							isInvalid={errors.phone}
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

export default AddContactForm;
