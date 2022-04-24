import React, { useRef } from 'react';
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

import { studentNew } from '../../store/student-thunks';

const CreateStudentForm = () => {
	const dispatch = useDispatch();

	const studentIdRef = useRef();
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();

	const programRef = useRef();
	const semesterRef = useRef();

	const notesRef = useRef();

	const submitHandler = e => {
		e.preventDefault();
		dispatch(
			studentNew({
				studentId: studentIdRef.current.value,
				firstName: firstNameRef.current.value,
				lastName: lastNameRef.current.value,
				email: emailRef.current.value,
				programId: programRef.current.value,
				semester: semesterRef.current.value,
				notes: notesRef.current.value,
			})
		);
		// reset fields
		studentIdRef.current.value = '';
		firstNameRef.current.value = '';
		lastNameRef.current.value = '';
		emailRef.current.value = '';
		programRef.current.value = '';
		semesterRef.current.value = '';
		notesRef.current.value = '';
	};

	return (
		<Container>
			<Card>
				<Card.Header>
					<Row>
						<Col>Studierende anlegen</Col>
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
										<FloatingLabel label='Studenten-ID' className='mb-3'>
											<Form.Control
												type='text'
												placeholder='iXXbXXX'
												ref={studentIdRef}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Firstname' className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Vorname'
												ref={firstNameRef}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Lastname' className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Nachname'
												ref={lastNameRef}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel controlId='floatingSelect' label='Studiengang'>
											<Form.Select
												aria-label='Floating label select example'
												ref={programRef}
											>
												<option>Wählen</option>
												<option value='5018209c-0398-4cac-bbbc-95941a41911b'>BIF</option>
											</Form.Select>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel controlId='floatingSelect' label='Semester'>
											<Form.Select
												aria-label='Floating label select example'
												ref={semesterRef}
											>
												<option>Wählen</option>
												<option value='1'>1</option>
												<option value='2'>2</option>
												<option value='3'>3</option>
												<option value='4'>4</option>
												<option value='5'>5</option>
												<option value='6'>6</option>
											</Form.Select>
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
								<Button variant='primary' size='lg'>
									Als CSV exportieren
								</Button>
							</div>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='2'>
						<Accordion.Header>Importieren</Accordion.Header>
						<Accordion.Body>
							<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
								<Form.Label>
									Hier stehen Informationen über die hochladbaren Dateien.
								</Form.Label>
								<Form.Control type='file' size='lg' multiple />
							</Form.Group>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Card>
		</Container>
	);
};

export default CreateStudentForm;
