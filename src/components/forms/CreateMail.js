import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { sendmailSend } from '../../store/sendmail-thunks';
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
		// check if any recipient is set
		if (data.additionalRecipients === '' && data.mailingList === '1') {
			setError('additionalRecipients');
			setError('mailingList');
			return;
		}
		// check if any text is set
		if (data.additionalText === '' && data.template === '1') {
			setError('additionalText');
			setError('template');
			return;
		}
		dispatch(
			sendmailSend({
				...data,
				additionalRecipients: data.additionalRecipients.length
					? data.additionalRecipients.split(',')
					: [],
				attachments: data.attachments ? data.attachments.map(entry => entry.value) : [],
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
					<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
						<Form.Control
							placeholder='E-Mail-Adressen'
							{...register('additionalRecipients')}
							isInvalid={errors.additionalRecipients}
						/>
						<Form.Text muted>
							Adressen durch "," getrennt eingeben und/oder Mailinglisten verwenden.
						</Form.Text>
					</Form.Group>
					<Form.Select
						aria-label='Default select example'
						defaultValue='1'
						{...register('mailingList')}
						isInvalid={errors.mailingList}
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
				<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
					<Form.Label>Nachricht</Form.Label>
					<Form.Control
						as='textarea'
						rows={3}
						{...register('additionalText')}
						isInvalid={errors.additionalText}
					/>
					<Form.Text muted>
						Nachricht eingeben und/oder E-Mail-Vorlage verwenden.
						<br />
						Die Nachricht wird unter dem Text der E-Mail-Vorlage eingefügt.
					</Form.Text>
				</Form.Group>
			</Row>
			<Row>
				<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
					<Form.Select
						aria-label='Default select example'
						defaultValue='1'
						{...register('template')}
						isInvalid={errors.template}
					>
						<option value='1' disabled>
							E-Mail-Vorlage wählen
						</option>
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
					<Form.Text muted>Das Limit für Anhänge liegt bei 20MB.</Form.Text>
				</Form.Group>
			</Row>

			<Row>
				<Col lg>
					<div className='d-grid'>
						<Button className='toast-button-2' variant='light' onClick={resetForm}>
							Zurücksetzen
						</Button>
					</div>
				</Col>
				<Col lg>
					<div className='d-grid'>
						<Button className='toast-button-2' variant='primary' type='submit'>
							Absenden
						</Button>
					</div>
				</Col>
			</Row>
		</Form>
	);
};

export default CreateMail;
