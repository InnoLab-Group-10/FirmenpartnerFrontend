import React, { useEffect } from 'react';
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { mailingListNewRecipient } from '../../store/mailinglist-thunks';

const AddHistoryForm = props => {
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
				dispatch(mailingListNewRecipient({ id: props.id, entry: data }))
			)}
		>
			<Row>
				<Col lg>
					<FloatingLabel label='Firmenname' className='mb-3'>
						<Form.Control
							type='text'
							placeholder='Firmenname'
							{...register('company', { required: true })}
							isInvalid={errors.company}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Vorname' className='mb-3'>
						<Form.Control
							type='text'
							placeholder='Vorname'
							{...register('firstName', { required: true })}
							isInvalid={errors.firstName}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Nachname' className='mb-3'>
						<Form.Control
							type='text'
							placeholder='Nachname'
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
							type='email'
							placeholder='name@example.com'
							{...register('email', {
								required: true,
								pattern: /^(([a-z]|[0-9]|-|_)+\.?)+@(([a-z]|[0-9]|-|_)+\.?)+$/i,
							})}
							isInvalid={errors.email}
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

export default AddHistoryForm;
