import React from 'react';
import {
	Container,
	Card,
	Accordion,
	Form,
	FloatingLabel,
	Row,
	Col,
	Button,
} from 'react-bootstrap';

const CollapsableForm = () => {
	return (
		<Container>
			<Card>
				<Accordion flush>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>Anlegen</Accordion.Header>
						<Accordion.Body>
							<Form>
								<Row>
									<Col lg>
										<FloatingLabel label='Studenten-ID' className='mb-3'>
											<Form.Control type='text' placeholder='iXXbXXX' />
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='Name' className='mb-3'>
											<Form.Control type='text' placeholder='Vorname Nachname' />
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel controlId='floatingSelect' label='Studiengang'>
											<Form.Select aria-label='Floating label select example'>
												<option>Wählen</option>
												<option value='1'>One</option>
												<option value='2'>Two</option>
												<option value='3'>Three</option>
											</Form.Select>
										</FloatingLabel>
									</Col>
									<Col lg>
										<FloatingLabel label='E-Mail-Adresse' className='mb-3'>
											<Form.Control type='email' placeholder='name@example.com' />
										</FloatingLabel>
									</Col>
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

export default CollapsableForm;
