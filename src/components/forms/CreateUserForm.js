import React, { useEffect } from 'react';
import { Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { userNew } from '../../store/user-thunks';

const CreateUserForm = () => {
	const dispatch = useDispatch();

	// new user
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
		<Form onSubmit={handleSubmit(data => dispatch(userNew(data)))}>
			<Row>
				<Col lg>
					<FloatingLabel label='Name' className='mb-3'>
						<Form.Control
							type='text'
							placeholder='Name'
							{...register('username', { required: true, pattern: /^\S+$/ })}
							isInvalid={errors.username}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='E-Mail-Adresse' className='mb-3'>
						<Form.Control
							type='text'
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
					<FloatingLabel label='Password' className='mb-3'>
						<Form.Control
							type='password'
							placeholder='Password'
							{...register('password', { required: true, minLength: 8 })}
							isInvalid={errors.password}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel controlId='floatingSelect' label='Rolle'>
						<Form.Select
							aria-label='Floating label select example'
							{...register('role', { required: true })}
							isInvalid={errors.role}
						>
							<option value='User'>User</option>
							<option value='Administrator'>Administrator</option>
						</Form.Select>
					</FloatingLabel>
				</Col>
			</Row>
			<Row>
				<Col lg>
					<div className='d-grid'>
						<Button variant='primary' type='submit' size='lg'>
							Anlegen
						</Button>
					</div>
				</Col>
			</Row>
		</Form>
	);
};

export default CreateUserForm;
