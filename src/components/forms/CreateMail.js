import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { sendmailSendByOption } from '../../store/sendmail-thunks';
import { mailinglistGetAll } from '../../store/mailinglist-thunks';
import { mailtemplateGetAll } from '../../store/mailtemplate-thunks';
import { fileGetAll } from '../../store/file-thunks';

const CreateMail = props => {
	const dispatch = useDispatch();

	const { mailinglists } = useSelector(state => state.mailinglist);
	const { mailtemplates } = useSelector(state => state.mailtemplate);
	const { files } = useSelector(state => state.file);

	const [fileOptions, setFileOptions] = useState([]);

	useEffect(() => {
		setFileOptions(files.map(entry => ({ value: entry.id, label: entry.name })));
	}, [files]);

	useEffect(() => {
		dispatch(mailinglistGetAll());
		dispatch(mailtemplateGetAll());
		dispatch(fileGetAll());
	}, [dispatch]);

	const {
		register,
		handleSubmit,
		reset,
		setValue,
		setError,
		control,
		formState: { isSubmitSuccessful, errors },
	} = useForm();

	const submitHandler = data => {
		if (data.id === '1') {
			setError('id');
			return;
		}
		if (data.template === '1') {
			setError('template');
			return;
		}
		dispatch(
			sendmailSendByOption({
				...data,
				attachments: data.attachments.map(entry => entry.value),
			})
		);
		props.toggleHandler();
	};

	const resetForm = () => {
		reset();
		setValue('attachments', []);
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
			setValue('attachments', []);
		}
	}, [isSubmitSuccessful, reset, setValue]);

	return (
		<Form onSubmit={handleSubmit(data => submitHandler(data))}>
			<Row>
				<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
					<Form.Label>Empfänger wählen</Form.Label>
					<Form.Select
						aria-label='Default select example'
						defaultValue='1'
						{...register('id', { required: true })}
						isInvalid={errors.id}
					>
						<option value='1' disabled>
							Mailingliste wählen
						</option>
						<option value='all'>Alle Unternehmen</option>
						<option value='active'>Aktive Unternehmen</option>
						<option value='inactive'>Inaktive Unternehmen</option>
						{mailinglists.map(entry => (
							<option key={entry.id} value={entry.id}>
								{entry.name}
							</option>
						))}
					</Form.Select>
				</Form.Group>
			</Row>
			<Row>
				<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
					<Form.Label>E-Mail-Vorlage wählen</Form.Label>
					<Form.Select
						aria-label='Default select example'
						defaultValue='1'
						{...register('template', { required: true })}
						isInvalid={errors.template}
					>
						<option value='1' disabled>
							Vorlage wählen
						</option>
						<option value='all'>Alle Unternehmen</option>
						<option value='active'>Aktive Unternehmen</option>
						<option value='inactive'>Inaktive Unternehmen</option>
						{mailtemplates.map(entry => (
							<option key={entry.id} value={entry.id}>
								{entry.name}
							</option>
						))}
					</Form.Select>
				</Form.Group>
			</Row>
			<Row>
				<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
					<Form.Label>Betreff hinzufügen</Form.Label>
					<Form.Control
						type='text'
						placeholder='Ihr Betreff'
						{...register('subject', { required: true })}
						isInvalid={errors.subject}
					/>
				</Form.Group>
			</Row>
			<Row>
				<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
					<Form.Label>Datei anhängen</Form.Label>
					<Controller
						control={control}
						name='attachments'
						render={({ field: { onChange, value, ref } }) => (
							<Select
								options={fileOptions}
								placeholder='Dateien auswählen'
								isMulti
								value={value}
								ref={ref}
								onChange={onChange}
							/>
						)}
					/>
				</Form.Group>
			</Row>
			{/* <Row>
				<Form.Label>Datum</Form.Label>
				<Col>
					<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
						<Form.Control type='date' />
					</Form.Group>
				</Col>
				<Col>
					<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
						<Form.Check type='checkbox' label='Automatisch senden' />
					</Form.Group>
				</Col>
			</Row> */}
			<Row>
				<Col lg>
					<div className='d-grid'>
						<Button variant='light' onClick={resetForm}>
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

export default CreateMail;
