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

import { companyNew, companyImport, companyExport } from '../../store/company-thunks';

const MailTemplateDesignForm = () => {
	const dispatch = useDispatch();

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
							<Form onSubmit={handleSubmit(data => dispatch(companyNew(data)))}>
								<Row>
									<Col lg={2}>
										<Form.Group className="mb-3" controlId="formHeaderBackgroundColor">
											<Form.Label>Hintergrundfarbe</Form.Label>
											<Form.Control size="lg" type="color" value="#e5e5e5"/>
										</Form.Group>
									</Col>
									<Col lg>
										<Form.Group controlId="formFileLogo" className="mb-3">
											<Form.Label>Logo hochladen</Form.Label>
											<Form.Control type="file" size="lg" />
										</Form.Group>		
									</Col>
									<Col lg>
										<Form.Group controlId="formFileHeader" className="mb-3">
											<Form.Label>Hintergrundbild hochladen (optional)</Form.Label>
											<Form.Control type="file" size="lg" />
										</Form.Group>
									</Col>
								</Row>
								<br/>
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
							<Row>
								<Col lg={2} sm>
									<Form.Group className="mb-3" controlId="formBodyBackgroundColor">
										<Form.Label>Hintergrundfarbe</Form.Label>
										<Form.Control size="lg" type="color" value="#ffffff"/>
									</Form.Group>
								</Col>
								<Col lg={2} sm>
									<Form.Group className="mb-3" controlId="formBodyFontColor">
										<Form.Label>Schriftfarbe</Form.Label>
										<Form.Control size="lg" type="color" value="#343a40"/>
									</Form.Group>
								</Col>
							</Row>
                            <br/>
							<div className='d-grid gap-2'>
								<Button
									variant='primary'
									size='lg'
								>
									Speichern
								</Button>
							</div>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='2'>
						<Accordion.Header>Footer</Accordion.Header>
						<Accordion.Body>
							<Form onSubmit={handleSubmitImport(data => dispatch(companyImport(data)))}>
								<Row>
									<Col lg={2} sm>
										<Form.Group className="mb-3" controlId="formFooterBackgroundColor">
											<Form.Label>Hintergrundfarbe</Form.Label>
											<Form.Control size="lg" type="color" value="#5c636a"/>
										</Form.Group>
									</Col>
									<Col lg={2} sm>
										<Form.Group className="mb-3" controlId="formFooterFontColor">
											<Form.Label>Schirftfarbe</Form.Label>
											<Form.Control size="lg" type="color" value="#ffffff"/>
										</Form.Group>
									</Col>
									<Col lg>
										<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
											<Form.Label>Footertext (HTML möglich)</Form.Label>
											<Form.Control as="textarea" rows={3} />
										</Form.Group>
									</Col>
								</Row>
								<br/>
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
                            <Form>
								<Form.Group className="mb-3" controlId="formBodyBackgroundColor">
									<Form.Label>Hintergrundfarbe</Form.Label>
									<Form.Control size="lg" type="color" value="#e5e5e5"/>
								</Form.Group>
							</Form>
                            <br/>
							<div className='d-grid gap-2'>
								<Button
									variant='primary'
									size='lg'
								>
									Speichern
								</Button>
							</div>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Card>
		</Container>
	);
};

export default MailTemplateDesignForm;
