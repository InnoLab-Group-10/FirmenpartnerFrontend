import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { timelineNew } from '../../store/timeline-thunks';

const CreateAppointmentForm = props => {
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful },
	} = useForm();

	const submitHandler = data => {
		dispatch(timelineNew({ ...data, timestamp: `${data.date}T${data.time}:00` }));
		props.toggleHandler();
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset]);

	const [selectedType, setSelectedType] = useState();

	return (
		<Form onSubmit={handleSubmit(data => submitHandler(data))}>
			<Row>
				<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
					<Form.Label>Eintrags-Typ wählen</Form.Label>
					<Form.Select
						{...register('type')}
						onChange={e => setSelectedType(e.target.value)}
					>
						<option value='0'>Nachricht</option>
						<option value='1'>Link</option>
						<option value='2'>Email</option>
					</Form.Select>
				</Form.Group>
			</Row>
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
						placeholder='Ihre Nachricht'
						style={{ height: '100px' }}
						{...register('message')}
					/>
				</Form.Group>
			</Row>
			{selectedType === '1' && (
				<>
					<Row>
						<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
							<Form.Label>Link</Form.Label>
							<Form.Control
								type='text'
								{...register('link')}
								placeholder='https://www.orf.at'
							/>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
							<Form.Label>Linktext</Form.Label>
							<Form.Control type='text' {...register('linkText')} placeholder='orf.at' />
						</Form.Group>
					</Row>
				</>
			)}
			<Row>
				<Col lg>
					<div className='d-grid'>
						<Button
							variant='light'
							onClick={() => {
								reset();
								setSelectedType('0');
							}}
						>
							Zurücksetzen
						</Button>
					</div>
				</Col>
				<Col lg>
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

export default CreateAppointmentForm;
