import React, { useEffect } from 'react';
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { studentcountUpdate } from '../../store/studentcount-thunks';

const EditStudentcountForm = props => {
	const { entry, companyId } = props;
	const dispatch = useDispatch();

	// update studentcount
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful, errors },
	} = useForm({
		defaultValues: {
			year: entry.year,
			count: entry.count,
		},
	});

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset]);

	const updateHandler = data => {
		dispatch(
			studentcountUpdate({
				...data,
				id: entry.id,
				companyId,
			})
		);
		props.toggleHandler();
	};

	return (
		<Form onSubmit={handleSubmit(data => updateHandler(data))}>
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

export default EditStudentcountForm;
