import React from 'react';
import { Form, Container, Card, Row, Col } from 'react-bootstrap';
import { BiInfoCircle } from 'react-icons/bi';

const DocumentUpload = () => {
	return (
		<Container>
			<Card>
				<Card.Header>
					<Row>
						<Col>Datei hochladen</Col>
						<Col>
							<BiInfoCircle className='info-button'></BiInfoCircle>
						</Col>
					</Row>
				</Card.Header>
				<Card.Body>
					<Form>
						<Row>
							<Col>
								<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
									<Form.Label>
										Hier stehen Informationen über die hochladbaren Dateien.
									</Form.Label>
									<Form.Control type='file' size='lg' multiple />
								</Form.Group>
								<Form.Group controlId='formFileMultiple' className='mb-3 small-upload'>
									<Form.Label>
										Hier stehen Informationen über die hochladbaren Dateien.
									</Form.Label>
									<Form.Control type='file' size='sm' multiple />
								</Form.Group>
							</Col>
						</Row>
					</Form>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default DocumentUpload;
