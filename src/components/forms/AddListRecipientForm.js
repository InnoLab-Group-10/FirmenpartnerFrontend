import React, { useEffect } from 'react';
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { mailingListNewRecipient } from '../../store/mailinglist-thunks';
import { contactGetAll } from '../../store/contact-thunks';

const AddListRecipientForm = props => {
	const dispatch = useDispatch();
	const { contacts, shouldReload } = useSelector(state => state.contact);

	useEffect(() => {
		if (shouldReload) {
			dispatch(contactGetAll());
		}
	});

	// new entry
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { isSubmitSuccessful, errors },
	} = useForm();

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset]);

	const handleChange = e => {
		const entry = contacts.find(entry => entry.id === e.target.value);
		setValue('firstName', entry.firstName);
		setValue('lastName', entry.lastName);
		setValue('email', entry.email);
	};

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
			<Row>
				<Col lg>
					<Form.Select
						className='mt-3'
						aria-label='Default select example'
						size='lg'
						defaultValue='1'
						onChange={handleChange}
					>
						<option value='1' disabled>
							Person aus der Liste auswählen
						</option>
						{contacts.map(entry => (
							<option key={entry.id} value={entry.id}>
								{entry.firstName} {entry.lastName}
							</option>
						))}
					</Form.Select>
				</Col>
			</Row>
		</Form>
	);
};

export default AddListRecipientForm;
