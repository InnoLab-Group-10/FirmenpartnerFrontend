import React, { useEffect } from 'react';
import { Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { userUpdate } from '../../store/user-thunks';

const EditUserForm = props => {
	const user = props.entry;
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

	const handleUpdate = data => {
		dispatch(userUpdate(data));
		props.toggleHandler();
	};

	return (
		<Form
			onSubmit={handleSubmit(data =>
				handleUpdate({ ...data, id: user.id, currentRoles: user.roles })
			)}
		>
			<Row>
				<Col lg>
					<FloatingLabel label='Name' className='mb-3'>
						<Form.Control
							type='text'
							placeholder='Name'
							defaultValue={user.username}
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
							defaultValue={user.email}
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
					<FloatingLabel controlId='floatingSelect' label='Rolle'>
						<Form.Select
							aria-label='Floating label select example'
							defaultValue={user.roles[user.roles.length - 1]}
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
							Ändern
						</Button>
					</div>
				</Col>
			</Row>
		</Form>
	);
};

export default EditUserForm;
