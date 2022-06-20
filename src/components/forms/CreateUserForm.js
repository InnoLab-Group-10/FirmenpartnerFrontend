import React, { useRef } from 'react';
import {
	Form,
	Row,
	Col,
	Button,
	FloatingLabel
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { userNew } from '../../store/user-thunks';

const CreateUserForm = () => {
	const dispatch = useDispatch();

	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	// TODO allow more than one role (maybe tag field)
	const roleRef = useRef();

	const submitHandler = e => {
		e.preventDefault();
		dispatch(
			userNew({
				name: nameRef.current.value,
				email: emailRef.current.value,
				password: passwordRef.current.value,
				role: roleRef.current.value,
			})
		);
		// reset fields
		nameRef.current.value = '';
		emailRef.current.value = '';
		passwordRef.current.value = '';
		roleRef.current.value = '';
	};

	return (
		<Form>
		<Row>
			<Col lg>
				<FloatingLabel label='Name' className='mb-3'>
					<Form.Control type='text' placeholder='Name' ref={nameRef} />
				</FloatingLabel>
			</Col>
			<Col lg>
				<FloatingLabel label='E-Mail-Adresse' className='mb-3'>
					<Form.Control
						type='email'
						placeholder='name@example.com'
						ref={emailRef}
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
						ref={passwordRef}
					/>
				</FloatingLabel>
			</Col>
			<Col lg>
				<FloatingLabel controlId='floatingSelect' label='Rolle'>
					<Form.Select
						aria-label='Floating label select example'
						ref={roleRef}
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
					<Button
						variant='primary'
						type='submit'
						size='lg'
						onClick={submitHandler}
					>
						Anlegen
					</Button>
				</div>
			</Col>
		</Row>
	</Form>
	);
};

export default CreateUserForm;
