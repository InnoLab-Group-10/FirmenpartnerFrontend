import React, { useRef } from 'react';
import {
	Form,
	Container,
	Card,
	Row,
	Col,
	Button,
	FloatingLabel,
	Accordion,
} from 'react-bootstrap';
import { BiInfoCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

import { userNew } from '../../store/user-thunks';

const CreatUserForm = () => {
	const dispatch = useDispatch();

	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	// TODO allow more than one role (maybe tag field)
	const roleRef = useRef();

	const submitHandler = e => {
		e.preventDefault();
		dispatch(
			userNew({
				name: nameRef.current.value,
				email: emailRef.current.value,
				password: passwordRef.current.value,
				role: roleRef.current.value,
			})
		);
		// reset fields
		nameRef.current.value = '';
		emailRef.current.value = '';
		passwordRef.current.value = '';
		roleRef.current.value = '';
	};

	return (
		<Container>
			<Card>
				<Card.Header>
					<Row>
						<Col>Benutzer anlegen</Col>
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
										<FloatingLabel label='Name' className='mb-3'>
											<Form.Control type='text' placeholder='Name' ref={nameRef} />
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
								<Row>
									<Col lg>
										<FloatingLabel label='Password' className='mb-3'>
											<Form.Control
												type='password'
												placeholder='Password'
												ref={passwordRef}
											/>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel controlId='floatingSelect' label='Rolle'>
											<Form.Select
												aria-label='Floating label select example'
												ref={roleRef}
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

export default CreatUserForm;
