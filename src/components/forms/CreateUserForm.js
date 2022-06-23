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
		formState: { isSubmitSuccessful },
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
						<Form.Control type='text' placeholder='Name' {...register('name')} />
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel label='E-Mail-Adresse' className='mb-3'>
						<Form.Control
							type='email'
							placeholder='name@example.com'
							{...register('email')}
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
							{...register('password')}
						/>
					</FloatingLabel>
				</Col>
				<Col lg>
					<FloatingLabel controlId='floatingSelect' label='Rolle'>
						<Form.Select aria-label='Floating label select example' {...register('role')}>
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
