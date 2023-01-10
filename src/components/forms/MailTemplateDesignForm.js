import React, { useEffect } from 'react';
import { Form, Container, Card, Row, Col, Button, Accordion } from 'react-bootstrap';
import { BiInfoCircle, BiArrowToBottom } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import {
	mailsettingsGetAll,
	mailsettingsUpdateBackground,
	mailsettingsUpdateBody,
	mailsettingsUpdateFooter,
	mailsettingsUpdateHeader,
} from '../../store/mailsettings-thunks';
import { fileDownload, fileGetAll } from '../../store/file-thunks';

const MailTemplateDesignForm = () => {
	const dispatch = useDispatch();

	const { settings, shouldReload: shouldReloadSettings } = useSelector(
		state => state.mailsettings
	);
	const { files } = useSelector(state => state.file);

	// FORMS
	// set header form
	const {
		register: registerHeader,
		handleSubmit: handleSubmitHeader,
		setValue: setValueHeader,
		formState: { isSubmitSuccessful: isSubmitSuccessfulHeader },
	} = useForm();
	// reset header form on setting change for color and on successful submit for images, atleast for the form
	useEffect(() => {
		setValueHeader('header_bg_color', settings.header_bg_color);
		if (isSubmitSuccessfulHeader) {
			setValueHeader('header_logo', null);
			setValueHeader('header_bg_image', null);
		}
	}, [isSubmitSuccessfulHeader, settings, setValueHeader]);

	// set body form
	const {
		register: registerBody,
		handleSubmit: handleSubmitBody,
		setValue: setValueBody,
	} = useForm();
	// reset body form on setting change
	useEffect(() => {
		setValueBody('body_bg_color', settings.body_bg_color);
		setValueBody('body_color', settings.body_color);
	}, [settings, setValueBody]);

	// set footer form
	const {
		register: registerFooter,
		handleSubmit: handleSubmitFooter,
		setValue: setValueFooter,
	} = useForm();
	// reset footer form on setting change
	useEffect(() => {
		setValueFooter('footer_bg_color', settings.footer_bg_color);
		setValueFooter('footer_color', settings.footer_color);
		setValueFooter('footer_text', settings.footer_text);
	}, [settings, setValueFooter]);

	// set background form
	const {
		register: registerBackground,
		handleSubmit: handleSubmitBackground,
		setValue: setValueBackground,
	} = useForm();
	// reset background form on setting change
	useEffect(() => {
		setValueBackground('mail_bg_color', settings.mail_bg_color);
	}, [settings, setValueBackground]);

	useEffect(() => {
		if (shouldReloadSettings) {
			dispatch(mailsettingsGetAll());
			dispatch(fileGetAll());
		}
	}, [dispatch, shouldReloadSettings]);

	const handleDownload = id => {
		const file = files.find(entry => entry.id === id);
		if (file) {
			dispatch(fileDownload({ id, name: file.name }));
		}
	};

	const getFileName = id => {
		const file = files.find(entry => entry.id === id);
		if (file) {
			return (
				<>
					Derzeit ausgewählt: {file.name}
					<BiArrowToBottom />
				</>
			);
		}
		return 'Noch nichts ausgewählt';
	};

	return (
		<Container>
			<Card>
				<Card.Header>
					<Row>
						<Col>Design bearbeiten</Col>
						<Col>
							<BiInfoCircle className='info-button' />
						</Col>
					</Row>
				</Card.Header>
				<Accordion flush>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>Header</Accordion.Header>
						<Accordion.Body>
							<Form
								onSubmit={handleSubmitHeader(data =>
									dispatch(mailsettingsUpdateHeader(data))
								)}
							>
								<Row>
									<Col lg={2}>
										<Form.Group className='mb-3' controlId='formHeaderBackgroundColor'>
											<Form.Label>Hintergrundfarbe</Form.Label>
											<Form.Control
												size='lg'
												type='color'
												{...registerHeader('header_bg_color')}
											/>
										</Form.Group>
									</Col>
									<Col lg>
										<Form.Group controlId='formFileLogo' className='mb-3'>
											<Form.Label>Logo hochladen</Form.Label>
											<Form.Control
												type='file'
												size='lg'
												{...registerHeader('header_logo')}
											/>
											<Button
												variant='light'
												className='mailtemplate-download-button'
												onClick={() => handleDownload(settings.header_logo)}
											>
												{getFileName(settings.header_logo)}
											</Button>
										</Form.Group>
									</Col>
									<Col lg>
										<Form.Group controlId='formFileHeader' className='mb-3'>
											<Form.Label>Hintergrundbild hochladen</Form.Label>
											<Form.Control
												type='file'
												size='lg'
												{...registerHeader('header_bg_image')}
											/>
											<Button
												variant='light'
												className='mailtemplate-download-button'
												onClick={() => handleDownload(settings.header_bg_image)}
											>
												{getFileName(settings.header_bg_image)}
											</Button>
										</Form.Group>
									</Col>
								</Row>
								<br />
								<Row>
									<Col lg>
										<div className='d-grid'>
											<Button variant='primary' type='submit' size='lg'>
												Speichern
											</Button>
										</div>
									</Col>
								</Row>
							</Form>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='1'>
						<Accordion.Header>Body</Accordion.Header>
						<Accordion.Body>
							<Form
								onSubmit={handleSubmitBody(data =>
									dispatch(mailsettingsUpdateBody(data))
								)}
							>
								<Row>
									<Col lg={2} sm>
										<Form.Group className='mb-3' controlId='formBodyBackgroundColor'>
											<Form.Label>Hintergrundfarbe</Form.Label>
											<Form.Control
												size='lg'
												type='color'
												{...registerBody('body_bg_color')}
											/>
										</Form.Group>
									</Col>
									<Col lg={2} sm>
										<Form.Group className='mb-3' controlId='formBodyFontColor'>
											<Form.Label>Schriftfarbe</Form.Label>
											<Form.Control
												size='lg'
												type='color'
												{...registerBody('body_color')}
											/>
										</Form.Group>
									</Col>
								</Row>
								<br />
								<div className='d-grid gap-2'>
									<Button variant='primary' size='lg' type='submit'>
										Speichern
									</Button>
								</div>
							</Form>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='2'>
						<Accordion.Header>Footer</Accordion.Header>
						<Accordion.Body>
							<Form
								onSubmit={handleSubmitFooter(data =>
									dispatch(mailsettingsUpdateFooter(data))
								)}
							>
								<Row>
									<Col lg={2} sm>
										<Form.Group className='mb-3' controlId='formFooterBackgroundColor'>
											<Form.Label>Hintergrundfarbe</Form.Label>
											<Form.Control
												size='lg'
												type='color'
												{...registerFooter('footer_bg_color')}
											/>
										</Form.Group>
									</Col>
									<Col lg={2} sm>
										<Form.Group className='mb-3' controlId='formFooterFontColor'>
											<Form.Label>Schriftfarbe</Form.Label>
											<Form.Control
												size='lg'
												type='color'
												{...registerFooter('footer_color')}
											/>
										</Form.Group>
									</Col>
									<Col lg>
										<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
											<Form.Label>Footertext (HTML möglich)</Form.Label>
											<Form.Control
												as='textarea'
												rows={3}
												{...registerFooter('footer_text')}
											/>
										</Form.Group>
									</Col>
								</Row>
								<br />
								<Row>
									<Col lg>
										<div className='d-grid'>
											<Button variant='primary' type='submit' size='lg'>
												Speichern
											</Button>
										</div>
									</Col>
								</Row>
							</Form>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='3'>
						<Accordion.Header>Hintergrund</Accordion.Header>
						<Accordion.Body>
							<Form
								onSubmit={handleSubmitBackground(data =>
									dispatch(mailsettingsUpdateBackground(data))
								)}
							>
								<Form.Group className='mb-3' controlId='formBodyBackgroundColor'>
									<Form.Label>Hintergrundfarbe</Form.Label>
									<Form.Control
										size='lg'
										type='color'
										{...registerBackground('mail_bg_color')}
									/>
								</Form.Group>
								<br />
								<div className='d-grid gap-2'>
									<Button variant='primary' size='lg' type='submit'>
										Speichern
									</Button>
								</div>
							</Form>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Card>
		</Container>
	);
};

export default MailTemplateDesignForm;
