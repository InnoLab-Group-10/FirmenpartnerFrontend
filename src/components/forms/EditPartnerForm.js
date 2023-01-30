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
	} = useForm({
		defaultValues: {
			name: entry.company.name,
			maxStudents: entry.company.maxStudents,
			address: entry.locations.length ? entry.locations[0].address : '',
			zipcode: entry.locations.length ? entry.locations[0].zipcode : '',
			city: entry.locations.length ? entry.locations[0].city : '',
			notes: entry.company.notes,
			contractSigned: entry.company.contractSigned,
		},
	});

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
							{...register('name', { required: true })}
							isInvalid={errors.name}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Studenten pro Jahr' className='mb-3'>
						<Form.Control
							type='text'
							{...register('maxStudents', {
								required: true,
								pattern: /^[1-9][0-9]*$/,
							})}
							isInvalid={errors.maxStudents}
						/>
					</FloatingLabel>
				</Col>
			</Row>
			<Row>
				<Col lg>
					<FloatingLabel label='Adresse' className='mb-3'>
						<Form.Control
							type='text'
							{...register('address', { required: true })}
							isInvalid={errors.address}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Postleitzahl' className='mb-3'>
						<Form.Control
							type='text'
							{...register('zipcode', { required: true, pattern: /^[0-9]+$/ })}
							isInvalid={errors.zipcode}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Ort' className='mb-3'>
						<Form.Control
							type='text'
							{...register('city', { required: true })}
							isInvalid={errors.city}
						/>
					</FloatingLabel>
				</Col>
			</Row>
			<Row className='textarea'>
				<Col lg>
					<FloatingLabel controlId='floatingTextarea2' label='Notizen'>
						<Form.Control
							as='textarea'
							style={{ height: '100px' }}
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
						label='Nimmt das Unternehmen derzeit Studierende auf?'
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
