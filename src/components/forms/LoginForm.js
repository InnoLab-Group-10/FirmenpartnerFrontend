import React, { useRef } from 'react';
import { Form, Button, Container, FloatingLabel } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { sessionLogin } from '../../store/session-thunks';

const LoginForm = () => {
	const dispatch = useDispatch();
	const emailRef = useRef();
	const passwordRef = useRef();

	const submitHandler = e => {
		e.preventDefault();
		dispatch(
			sessionLogin({
				email: emailRef.current.value,
				password: passwordRef.current.value,
			})
		);
	};

	return (
		<Container>
			<Form>
				<FloatingLabel controlId='floatingInput' label='E-Mail-Adresse' className='mb-3'>
					<Form.Control type='email' placeholder='name@example.com' ref={emailRef} />
				</FloatingLabel>
				<FloatingLabel controlId='floatingPassword' label='Passwort'>
					<Form.Control type='password' placeholder='Passwort' ref={passwordRef} />
				</FloatingLabel>
				<div className='d-grid gap-2'>
					<Button variant='primary' type='submit' onClick={submitHandler}>
						Anmelden
					</Button>
				</div>
			</Form>
		</Container>
	);
};

export default LoginForm;
