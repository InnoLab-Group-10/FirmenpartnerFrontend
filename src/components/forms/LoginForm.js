import React, { useEffect } from 'react';
import { Form, Button, Container, FloatingLabel, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { sessionLogin } from '../../store/session-thunks';

const LoginForm = () => {
	const dispatch = useDispatch();

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
		<Container>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit(data => dispatch(sessionLogin(data)))}>
						<FloatingLabel label='Email' className='mb-3'>
							<Form.Control
								type='text'
								placeholder='Email'
								{...register('email', {
									required: true,
								})}
								isInvalid={errors.email}
							/>
						</FloatingLabel>
						<FloatingLabel controlId='floatingPassword' label='Passwort'>
							<Form.Control
								type='password'
								placeholder='Passwort'
								{...register('password', { required: true })}
								isInvalid={errors.password}
							/>
						</FloatingLabel>
						<br />
						<div className='d-grid gap-2'>
							<Button size='lg' variant='primary' type='submit'>
								Anmelden
							</Button>
						</div>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default LoginForm;
