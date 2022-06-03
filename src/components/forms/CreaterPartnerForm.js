import React, { useEffect, useRef } from 'react';
import {
	Form,
	Container,
	Card,
	Row,
	Col,
	FloatingLabel,
	Button,
	Accordion,
} from 'react-bootstrap';
import { BiInfoCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { companyNew, companyImport, companyExport } from '../../store/company-thunks';

const CreatePartnerForm = () => {
	const dispatch = useDispatch();

	const nameRef = useRef();
	const maxStudentsRef = useRef();
	const notesRef = useRef();

	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();

	const streetRef = useRef();
	const houseNumberRef = useRef();
	const postcodeRef = useRef();
	const cityRef = useRef();

	const submitHandler = e => {
		e.preventDefault();
		dispatch(
			companyNew({
				name: nameRef.current.value,
				maxStudents: maxStudentsRef.current.value,
				notes: notesRef.current.value,
				firstName: firstNameRef.current.value,
				lastName: lastNameRef.current.value,
				email: emailRef.current.value,
				phone: phoneRef.current.value,
				address: `${streetRef.current.value} ${houseNumberRef.current.value}`,
				city: cityRef.current.value,
				zipcode: postcodeRef.current.value,
			})
		);
		// reset fields
		nameRef.current.value = '';
		maxStudentsRef.current.value = '';
		notesRef.current.value = '';
		firstNameRef.current.value = '';
		lastNameRef.current.value = '';
		emailRef.current.value = '';
		phoneRef.current.value = '';
		streetRef.current.value = '';
		houseNumberRef.current.value = '';
		cityRef.current.value = '';
		postcodeRef.current.value = '';
	};

	// import
	const {
		register: registerImport,
		handleSubmit: handleSubmitImport,
		reset: resetImport,
		formState: { isSubmitSuccessful: isSubmitSuccessfulImport },
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
							<BiInfoCircle className='info-button' />
						</Col>
					</Row>
				</Card.Header>
				<Accordion defaultActiveKey='0' flush>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>Anlegen</Accordion.Header>
						<Accordion.Body>
							<Form>
								<Row>
									<Col lg>
										<FloatingLabel label='Firmenname' className='mb-3'>
											<Form.Control type='text' placeholder='Firmenname' ref={nameRef} />
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Vorname' className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Vorname'
												ref={firstNameRef}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Nachname' className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Nachname'
												ref={lastNameRef}
											/>
										</FloatingLabel>
									</Col>
								</Row>
								<Row>
									<Col lg>
										<FloatingLabel label='E-Mail-Adresse' className='mb-3'>
											<Form.Control
												type='email'
												placeholder='name@example.com'
												ref={emailRef}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Telefonnummer' className='mb-3'>
											<Form.Control
												type='tel'
												placeholder='+43 (0) 000 000 00 00'
												ref={phoneRef}
											/>
										</FloatingLabel>
									</Col>
								</Row>
								<Row>
									<Col lg>
										<FloatingLabel label='Straße' className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Vorname Nachname'
												ref={streetRef}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Hausnummer' className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Vorname Nachname'
												ref={houseNumberRef}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Postleitzahl' className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Vorname Nachname'
												ref={postcodeRef}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Ort' className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Vorname Nachname'
												ref={cityRef}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Studenten pro Jahr' className='mb-3'>
											<Form.Control
												type='number'
												placeholder='Vorname Nachname'
												ref={maxStudentsRef}
											/>
										</FloatingLabel>
									</Col>
								</Row>
								<Row className='textarea'>
									<Col lg>
										<FloatingLabel controlId='floatingTextarea2' label='Notizen'>
											<Form.Control
												as='textarea'
												placeholder='Notizen anlegen'
												style={{ height: '100px' }}
												ref={notesRef}
											/>
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
											<Form.Control type='file' size='lg' {...registerImport('file')} />
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
