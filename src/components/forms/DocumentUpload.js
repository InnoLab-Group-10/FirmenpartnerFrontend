import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Form, Container, Card, Row, Col, Button } from 'react-bootstrap';
import { BiInfoCircle } from 'react-icons/bi';

import { fileNew } from '../../store/file-thunks';

const DocumentUpload = () => {
	const dispatch = useDispatch();

	// upload
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

	return (
		<Container>
			<Card>
				<Card.Header>
					<Row>
						<Col>Datei hochladen</Col>
						<Col>
							<BiInfoCircle className='info-button' />
						</Col>
					</Row>
				</Card.Header>
				<Card.Body>
					<Form onSubmit={handleSubmit(data => dispatch(fileNew(data)))}>
						<Row>
							<Col lg>
								<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
									<Form.Label>
										Um ein Dokument hochzuladen, drücken Sie auf das „Choose Files“-Feld und wählen Sie die passende Datei aus dem Ordner.
									</Form.Label>
									<Form.Control
										type='file'
										size='lg'
										{...register('file', { required: true })}
										multiple
										isInvalid={errors.file}
									/>
								</Form.Group>
								<Form.Group controlId='formFileMultiple' className='mb-3 small-upload'>
									<Form.Label>
										Hier stehen Informationen über die hochladbaren Dateien.
									</Form.Label>
									<Form.Control type='file' size='sm' multiple />
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col lg>
								<div className='d-grid'>
									<Button variant='primary' type='submit' size='lg'>
										Hochladen
									</Button>
								</div>
							</Col>
						</Row>
					</Form>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default DocumentUpload;
