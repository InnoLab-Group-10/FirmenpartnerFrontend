import React, { useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { notificationNew } from '../../store/notification-thunks';

const CreateNotificationForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful },
	} = useForm();
	const dispatch = useDispatch();
	const { id } = useSelector(state => state.user);

	const submitHandler = data => {
		// combine date and time, add recipientId
		const notificationData = {
			message: data.message,
			recipientId: id,
			timestamp: `${data.date}T${data.time}:00`,
		};
		dispatch(notificationNew(notificationData));
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset]);

	return (
		<Form onSubmit={handleSubmit(data => submitHandler(data))}>
			<Row>
				<Col>
					<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
						<Form.Label>Datum</Form.Label>
						<Form.Control type='date' {...register('date')} />
					</Form.Group>
				</Col>
				<Col>
					<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
						<Form.Label>Uhrzeit</Form.Label>
						<Form.Control type='time' {...register('time')} />
					</Form.Group>
				</Col>
			</Row>
			<Row>
				<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
					<Form.Label>Nachricht</Form.Label>
					<Form.Control
						as='textarea'
						placeholder='Woran möchten Sie erinnert werden?'
						style={{ height: '100px' }}
						{...register('message')}
					/>
				</Form.Group>
			</Row>
			<Row>
				<Col lg>
					<div className='d-grid'>
						<Button variant='light' onClick={() => reset()}>
							Zurücksetzen
						</Button>
					</div>
				</Col>
				<Col lg className='mt-2'>
					<div className='d-grid'>
						<Button variant='primary' type='submit'>
							Speichern
						</Button>
					</div>
				</Col>
			</Row>
		</Form>
	);
};

export default CreateNotificationForm;