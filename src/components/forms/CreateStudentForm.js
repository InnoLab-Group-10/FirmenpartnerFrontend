import React, { useEffect } from 'react';
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

import { studentNew, studentImport, studentExport } from '../../store/student-thunks';

const CreateStudentForm = () => {
	const dispatch = useDispatch();

	// new student
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful },
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
						<Col>Studierende anlegen</Col>
						<Col>
							<BiInfoCircle className='info-button' />
						</Col>
					</Row>
				</Card.Header>
				<Accordion flush>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>Anlegen</Accordion.Header>
						<Accordion.Body>
							<Form onSubmit={handleSubmit(data => dispatch(studentNew(data)))}>
								<Row>
									<Col lg>
										<FloatingLabel label='Studenten-ID' className='mb-3'>
											<Form.Control
												type='text'
												placeholder='iXXbXXX'
												{...register('studentId')}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Firstname' className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Vorname'
												{...register('firstName')}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Lastname' className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Nachname'
												{...register('lastName')}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel controlId='floatingSelect' label='Studiengang'>
											<Form.Select
												aria-label='Floating label select example'
												{...register('programId')}
											>
												<option>Wählen</option>
												{/* TODO fetch from API */}
												<option value='5018209c-0398-4cac-bbbc-95941a41911b'>BIF</option>
											</Form.Select>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel controlId='floatingSelect' label='Semester'>
											<Form.Select
												aria-label='Floating label select example'
												{...register('semester')}
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
												{...register('email')}
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
												{...register('notes')}
											/>
										</FloatingLabel>
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
									onClick={() => dispatch(studentExport())}
								>
									Als CSV exportieren
								</Button>
							</div>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='2'>
						<Accordion.Header>Importieren</Accordion.Header>
						<Accordion.Body>
							<Form onSubmit={handleSubmitImport(data => dispatch(studentImport(data)))}>
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

export default CreateStudentForm;
