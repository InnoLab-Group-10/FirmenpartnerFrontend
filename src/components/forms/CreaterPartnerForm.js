import React, { useEffect, useState, useRef } from 'react';
import {
	Form,
	Container,
	Card,
	Row,
	Col,
	FloatingLabel,
	Button,
	Accordion,
	Popover,
	Overlay,
} from 'react-bootstrap';
import { BiInfoCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { companyNew, companyImport, companyExport } from '../../store/company-thunks';

const CreatePartnerForm = () => {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick = event => {
		setShow(!show);
		setTarget(event.target);
	};

	// new company
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

	// import
	const {
		register: registerImport,
		handleSubmit: handleSubmitImport,
		reset: resetImport,
		formState: { isSubmitSuccessful: isSubmitSuccessfulImport, errors: errorsImport },
	} = useForm();

	useEffect(() => {
		if (isSubmitSuccessfulImport) {
			resetImport();
		}
	}, [isSubmitSuccessfulImport, resetImport]);

	return (
		<Container>
			<Card>
				<Card.Header>
					<Row>
						<Col>Partnerunternehmen anlegen</Col>
						<Col>
							<div ref={ref}>
								<div onClick={handleClick}>
									<BiInfoCircle className='info-button' />
								</div>
								<Overlay
									show={show}
									target={target}
									placement='left'
									container={ref}
									containerPadding={20}
								>
									<Popover>
										<Popover.Header as='h3'>Partnerunternehmen anlegen</Popover.Header>
										<Popover.Body>
											Fügen Sie Zusatzinformationen zum Unternehmen hinzu wenn es kein
											geeignetes Eingabefeld dafür gibt. Import und Export arbeiten mit
											.csv-Dateien. Es empfiehlt sich vor dem Import einen Export zu
											machen um sicherzustellen dass die Spaltenbezeichnungen korrekt
											sind.
										</Popover.Body>
									</Popover>
								</Overlay>
							</div>
						</Col>
					</Row>
				</Card.Header>
				<Accordion flush>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>Anlegen</Accordion.Header>
						<Accordion.Body>
							<Form onSubmit={handleSubmit(data => dispatch(companyNew(data)))}>
								<Row>
									<Col lg>
										<FloatingLabel label='Firmenname' className='mb-3'>
											<Form.Control
												type='text'
												{...register('name', { required: true })}
												isInvalid={errors.name}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Vorname' className='mb-3'>
											<Form.Control
												type='text'
												{...register('firstName', { required: true })}
												isInvalid={errors.firstName}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Nachname' className='mb-3'>
											<Form.Control
												type='text'
												{...register('lastName', { required: true })}
												isInvalid={errors.lastName}
											/>
										</FloatingLabel>
									</Col>
								</Row>
								<Row>
									<Col lg>
										<FloatingLabel label='E-Mail-Adresse' className='mb-3'>
											<Form.Control
												type='text'
												{...register('email', {
													required: true,
													pattern: /^(([a-z]|[0-9]|-|_)+\.?)+@(([a-z]|[0-9]|-|_)+\.?)+$/i,
												})}
												isInvalid={errors.email}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Telefonnummer' className='mb-3'>
											<Form.Control
												type='text'
												{...register('phone', { required: true, pattern: /^\+?[0-9]+$/ })}
												isInvalid={errors.phone}
											/>
										</FloatingLabel>
									</Col>
								</Row>
								<Row>
									<Col lg>
										<FloatingLabel label='Adresse' className='mb-3'>
											<Form.Control
												type='text'
												{...register('address', { required: true })}
												isInvalid={errors.address}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Postleitzahl' className='mb-3'>
											<Form.Control
												type='text'
												{...register('zipcode', { required: true, pattern: /^[0-9]+$/ })}
												isInvalid={errors.zipcode}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Ort' className='mb-3'>
											<Form.Control
												type='text'
												{...register('city', { required: true })}
												isInvalid={errors.city}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Studenten pro Jahr' className='mb-3'>
											<Form.Control
												type='text'
												{...register('maxStudents', {
													required: true,
													pattern: /^[1-9][0-9]*$/,
												})}
												isInvalid={errors.maxStudents}
											/>
										</FloatingLabel>
									</Col>
								</Row>
								<Row className='textarea'>
									<Col lg>
										<FloatingLabel controlId='floatingTextarea2' label='Notizen'>
											<Form.Control
												as='textarea'
												style={{ height: '100px' }}
												{...register('notes', { required: true })}
												isInvalid={errors.notes}
											/>
										</FloatingLabel>
									</Col>
								</Row>
								<Row>
									<Col lg>
										<Form.Check
											type='checkbox'
											{...register('contractSigned')}
											label='Nimmt das Unternehmen derzeit Studenten?'
											className='mb-3'
										/>
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
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='1'>
						<Accordion.Header>Exportieren</Accordion.Header>
						<Accordion.Body>
							<div className='d-grid gap-2'>
								<Button
									variant='primary'
									size='lg'
									onClick={() => dispatch(companyExport())}
								>
									Als CSV exportieren
								</Button>
							</div>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='2'>
						<Accordion.Header>Importieren</Accordion.Header>
						<Accordion.Body>
							<Form onSubmit={handleSubmitImport(data => dispatch(companyImport(data)))}>
								<Row>
									<Col lg>
										<Form.Group className='mb-3 big-upload'>
											<Form.Label>
												Hier stehen Informationen über die hochladbaren Dateien.
											</Form.Label>
											<Form.Control
												type='file'
												size='lg'
												{...registerImport('file', { required: true })}
												isInvalid={errorsImport.file}
											/>
										</Form.Group>
									</Col>
								</Row>
								<Row>
									<Col lg>
										<div className='d-grid'>
											<Button variant='primary' type='submit' size='lg'>
												Import
											</Button>
										</div>
									</Col>
								</Row>
							</Form>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Card>
		</Container>
	);
};

export default CreatePartnerForm;
