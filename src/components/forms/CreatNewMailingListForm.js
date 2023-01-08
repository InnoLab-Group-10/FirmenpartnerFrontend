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
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import {
	mailinglistExportById,
	mailinglistImportById,
	mailinglistNew,
} from '../../store/mailinglist-thunks';

const CreatNewMailingListForm = () => {
	const dispatch = useDispatch();
	const { mailinglists } = useSelector(state => state.mailinglist);

	// new mailinglist
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

	// export
	const {
		register: registerExport,
		handleSubmit: handleSubmitExport,
		reset: resetExport,
		formState: { isSubmitSuccessful: isSubmitSuccessfulExport, errors: errorsExport },
	} = useForm();

	useEffect(() => {
		if (isSubmitSuccessfulExport) {
			resetExport();
		}
	}, [isSubmitSuccessfulExport, resetExport]);

	return (
		<Container>
			<Card>
				<Card.Header>
					<Row>
						<Col>Mailingliste anlegen</Col>
						<Col>
							<BiInfoCircle className='info-button' />
						</Col>
					</Row>
				</Card.Header>
				<Accordion flush>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>Anlegen</Accordion.Header>
						<Accordion.Body>
							<Form onSubmit={handleSubmit(data => dispatch(mailinglistNew(data)))}>
								<Row>
									<Col lg>
										<FloatingLabel label='Name der Liste' className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Name der Liste'
												{...register('name', { required: true })}
												isInvalid={errors.name}
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
							<Form
								onSubmit={handleSubmitExport(data =>
									dispatch(mailinglistExportById(data))
								)}
							>
								<Row>
									<Col lg>
										<Form.Select
											aria-label='Default select example'
											size='lg'
											{...registerExport('id', { required: true })}
											isInvalid={errorsExport.id}
										>
											{mailinglists.map(entry => (
												<option key={entry.id} value={entry.id}>
													{entry.name}
												</option>
											))}
										</Form.Select>
									</Col>
								</Row>
								<br />
								<Row>
									<Col lg>
										<div className='d-grid'>
											<Button variant='primary' type='submit' size='lg'>
												Als CSV exportieren
											</Button>
										</div>
									</Col>
								</Row>
							</Form>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='2'>
						<Accordion.Header>Importieren</Accordion.Header>
						<Accordion.Body>
							<Form
								onSubmit={handleSubmitImport(data =>
									dispatch(mailinglistImportById(data))
								)}
							>
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
									<Col lg>
										<Form.Label>
											Wählen Sie hier die Liste in der die Datei eingefügt werden soll.
										</Form.Label>
										<Form.Select
											aria-label='Default select example'
											size='lg'
											{...registerImport('id', { required: true })}
											isInvalid={errorsImport.id}
										>
											{mailinglists.map(entry => (
												<option key={entry.id} value={entry.id}>
													{entry.name}
												</option>
											))}
										</Form.Select>
									</Col>
								</Row>
								<br />
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

export default CreatNewMailingListForm;
