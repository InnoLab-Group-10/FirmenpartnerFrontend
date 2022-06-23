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
		formState: { isSubmitSuccessful },
	} = useForm();

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
				contactId: entry.contacts[0].id,
				locationId: entry.locations[0].id,
				contractSigned: entry.company.contractSigned,
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
							{...register('name')}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Vorname' className='mb-3'>
						<Form.Control
							type='text'
							placeholder='Vorname'
							defaultValue={entry.contacts[0].firstName}
							{...register('firstName')}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Nachname' className='mb-3'>
						<Form.Control
							type='text'
							placeholder='Nachname'
							defaultValue={entry.contacts[0].lastName}
							{...register('lastName')}
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
							defaultValue={entry.contacts[0].email}
							{...register('email')}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Telefonnummer' className='mb-3'>
						<Form.Control
							type='tel'
							placeholder='+43 (0) 000 000 00 00'
							defaultValue={entry.contacts[0].phone}
							{...register('phone')}
						/>
					</FloatingLabel>
				</Col>
			</Row>
			<Row>
				<Col lg>
					<FloatingLabel label='Addresse' className='mb-3'>
						<Form.Control
							type='text'
							defaultValue={entry.locations[0].address}
							{...register('address')}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Postleitzahl' className='mb-3'>
						<Form.Control
							type='text'
							defaultValue={entry.locations[0].zipcode}
							{...register('zipcode')}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Ort' className='mb-3'>
						<Form.Control
							type='text'
							defaultValue={entry.locations[0].city}
							{...register('city')}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Studenten pro Jahr' className='mb-3'>
						<Form.Control
							type='number'
							defaultValue={entry.company.maxStudents}
							{...register('maxStudents')}
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
							{...register('notes')}
						/>
					</FloatingLabel>
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
