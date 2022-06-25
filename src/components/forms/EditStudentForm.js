import React, { useEffect } from 'react';
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { studentUpdate } from '../../store/student-thunks';

const EditStudentForm = props => {
	const student = props.entry;
	const dispatch = useDispatch();

	// update student
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

	const updateHandler = data => {
		dispatch(studentUpdate({ ...data, id: student.id }));
		props.toggleHandler();
	};

	return (
		<Form onSubmit={handleSubmit(data => updateHandler(data))}>
			<Row>
				<Col lg>
					<FloatingLabel label='Studenten-ID' className='mb-3'>
						<Form.Control
							type='text'
							placeholder='iXXbXXX'
							defaultValue={student.studentId}
							{...register('studentId', { required: true, pattern: /^\S+$/ })}
							isInvalid={errors.studentId}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Firstname' className='mb-3'>
						<Form.Control
							type='text'
							placeholder='Vorname'
							defaultValue={student.firstName}
							{...register('firstName', { required: true })}
							isInvalid={errors.firstName}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='Lastname' className='mb-3'>
						<Form.Control
							type='text'
							placeholder='Nachname'
							defaultValue={student.lastName}
							{...register('lastName', { required: true })}
							isInvalid={errors.lastName}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel controlId='floatingSelect' label='Studiengang'>
						<Form.Select
							aria-label='Floating label select example'
							defaultValue={student.program.id}
							{...register('programId', { required: true })}
							isInvalid={errors.programId}
						>
							<option>Wählen</option>
							{/* TODO fetch from API */}
							<option value='5018209c-0398-4cac-bbbc-95941a41911b'>BIF</option>
						</Form.Select>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel controlId='floatingSelect' label='Semester'>
						<Form.Select
							aria-label='Floating label select example'
							defaultValue={student.semester}
							{...register('semester', { required: true })}
							isInvalid={errors.semester}
						>
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
						<Form.Control
							type='text'
							placeholder='name@example.com'
							defaultValue={student.email}
							{...register('email', {
								required: true,
								pattern: /^(([a-z]|[0-9]|-|_)+\.?)+@(([a-z]|[0-9]|-|_)+\.?)+$/i,
							})}
							isInvalid={errors.email}
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
							defaultValue={student.notes}
							{...register('notes', { required: true })}
							isInvalid={errors.notes}
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

export default EditStudentForm;
