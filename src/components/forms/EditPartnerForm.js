import React, { useEffect } from 'react';
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { companyUpdate } from '../../store/company-thunks';

// TODO support update of companies without assignments
const EditPartnerForm = props => {
	const entry = props.entry;
	const dispatch = useDispatch();

	// update company
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful, errors },
	} = useForm({ defaultValues: { contractSigned: entry.company.contractSigned } });

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset]);

	const updateHandler = data => {
		dispatch(
			companyUpdate({
				...data,
				companyId: entry.company.id,
				contactId: entry.contacts.length ? entry.contacts[0].id : '0',
				locationId: entry.locations.length ? entry.locations[0].id : '0',
			})
		);
		props.toggleHandler();
	};

	return (
		<Form onSubmit={handleSubmit(data => updateHandler(data))}>
			<Row>
				<Col lg>
					<FloatingLabel label='Firmenname' className='mb-3'>
						<Form.Control
							type='text'
							placeholder='Firmenname'
							defaultValue={entry.company.name}
							{...register('name', { required: true })}
							isInvalid={errors.name}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Vorname' className='mb-3'>
						<Form.Control
							type='text'
							placeholder='Vorname'
							defaultValue={entry.contacts.length ? entry.contacts[0].firstName : ''}
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
							defaultValue={entry.contacts.length ? entry.contacts[0].lastName : ''}
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
							defaultValue={entry.contacts.length ? entry.contacts[0].email : ''}
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
							type='tel'
							placeholder='+43 (0) 000 000 00 00'
							defaultValue={entry.contacts.length ? entry.contacts[0].phone : ''}
							{...register('phone', { required: true, pattern: /^\+?[0-9]+$/ })}
							isInvalid={errors.phone}
						/>
					</FloatingLabel>
				</Col>
			</Row>
			<Row>
				<Col lg>
					<FloatingLabel label='Addresse' className='mb-3'>
						<Form.Control
							type='text'
							defaultValue={entry.locations.length ? entry.locations[0].address : ''}
							{...register('address', { required: true })}
							isInvalid={errors.address}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Postleitzahl' className='mb-3'>
						<Form.Control
							type='text'
							defaultValue={entry.locations.length ? entry.locations[0].zipcode : ''}
							{...register('zipcode', { required: true, pattern: /^[0-9]+$/ })}
							isInvalid={errors.zipcode}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Ort' className='mb-3'>
						<Form.Control
							type='text'
							defaultValue={entry.locations.length ? entry.locations[0].city : ''}
							{...register('city', { required: true })}
							isInvalid={errors.city}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Studenten pro Jahr' className='mb-3'>
						<Form.Control
							type='number'
							defaultValue={entry.company.maxStudents}
							{...register('maxStudents', {
								required: true,
								pattern: /^[1-9][0-9]*$/,
							})}
							isInvalid={errors.maxStudents}
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
							defaultValue={entry.company.notes}
							{...register('notes', { required: true })}
							isInvalid={errors.notes}
						/>
					</FloatingLabel>
				</Col>
			</Row>
			<Row>
				<Col lg>
					<Form.Check
						type='checkbox'
						{...register('contractSigned')}
						label='Nimmt das Unternehmen derzeit Studenten?'
						className='mb-3'
					/>
				</Col>
			</Row>
			<Row>
				<Col lg>
					<div className='d-grid'>
						<Button variant='primary' type='submit' size='lg'>
							Ändern
						</Button>
					</div>
				</Col>
			</Row>
		</Form>
	);
};

export default EditPartnerForm;
