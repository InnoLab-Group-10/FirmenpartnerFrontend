import React, { useEffect, useState, useRef } from 'react';
import { Form, Container, Card, Row, Col, Button, Accordion, Popover, Overlay } from 'react-bootstrap';
import { BiInfoCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { mailtemplateNew } from '../../store/mailtemplate-thunks';

const NewMailingTemplate = () => {
	const dispatch = useDispatch();

	// new mailtemplate
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

	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick = (event) => {
		setShow(!show);
		setTarget(event.target);
	};

	return (
		<Container>
			<Card>
				<Card.Header>
					<Row>
						<Col>Neues Template erstellen</Col>
						<Col>
						<div ref={ref}>
									<div onClick={handleClick} >
										<BiInfoCircle className='info-button'/>
									</div>
									<Overlay
										show={show}
										target={target}
										placement="left"
										container={ref}
										containerPadding={20}
									>
										<Popover>
											<Popover.Header as="h3">
												Template erstellen
											</Popover.Header>
											<Popover.Body>
												Hier lassen sich Vorlagen für Betreff und Texte anlegen und speichern. Für eine eigene Formatierung des Inhalts ist auch HTML erlaubt.
											</Popover.Body>
										</Popover>
									</Overlay>
								</div>
						</Col>
					</Row>
				</Card.Header>
				<Accordion flush>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>Template anlegen</Accordion.Header>
						<Accordion.Body>
							<Row>
								<Form onSubmit={handleSubmit(data => dispatch(mailtemplateNew(data)))}>
									<Col lg>
										<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
											<Form.Label>Template Name</Form.Label>
											<Form.Control
												type='text'
												{...register('name', { required: true })}
												isInvalid={errors.name}
											/>
										</Form.Group>
									</Col>
									<Col lg>
										<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
											<Form.Label>Body Text (HTML möglich)</Form.Label>
											<Form.Control
												as='textarea'
												rows={10}
												{...register('content', { required: true })}
												isInvalid={errors.content}
											/>
										</Form.Group>
									</Col>
									<br />
									<Col lg>
										<div className='d-grid'>
											<Button variant='primary' type='submit' size='lg'>
												Speichern
											</Button>
										</div>
									</Col>
								</Form>
							</Row>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Card>
		</Container>
	);
};

export default NewMailingTemplate;
