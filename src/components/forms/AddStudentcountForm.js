import React, { useEffect } from 'react';
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { studentcountNew } from '../../store/studentcount-thunks';

const AddStudentcountForm = props => {
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
				dispatch(studentcountNew({ ...data, companyId: props.id }))
			)}
		>
			<Row>
				<Col lg>
					<FloatingLabel label='Jahr' className='mb-3'>
						<Form.Control
							type='number'
							{...register('year', { required: true })}
							isInvalid={errors.year}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Anzahl der aufgenommenen Studierenden' className='mb-3'>
						<Form.Control
							type='number'
							{...register('count', { required: true })}
							isInvalid={errors.count}
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

export default AddStudentcountForm;
