import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const CreateMail = () => {
	return (
		<Form>
			<Row>
				<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
					<Form.Label>Empfänger wählen</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
				</Form.Group>
				<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
					<Form.Label>Empfänger wählen</Form.Label>
					<Form.Select aria-label='Default select example'>
						<option>Mailingliste wählen</option>
						<option value='1'>Alle Unternehmen</option>
						<option value='2'>Aktive Unternehmen</option>
						<option value='3'>Inaktive Unternehmen</option>
					</Form.Select>
				</Form.Group>
			</Row>
			<Row>
				<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
					<Form.Label>E-Mail-Vorlage wählen</Form.Label>
					<Form.Select aria-label='Default select example'>
						<option>Vorlage wählen</option>
						<option value='1'>Alle Unternehmen</option>
						<option value='2'>Aktive Unternehmen</option>
						<option value='3'>Inaktive Unternehmen</option>
					</Form.Select>
				</Form.Group>
			</Row>
			<Row>
				<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
					<Form.Label>Nachricht hinzufügen</Form.Label>
					<Form.Control
						as='textarea'
						placeholder='Ihre Nachricht'
						style={{ height: '100px' }}
					/>
				</Form.Group>
			</Row>
			<Row>
				<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
					<Form.Label>Datei anhängen</Form.Label>
					<Form.Select aria-label='Default select example'>
						<option>Datei wählen</option>
						<option value='1'>220331_Dokumentname.pdf</option>
						<option value='2'>220331_Dokumentname.xlsx</option>
					</Form.Select>
				</Form.Group>
			</Row>
			<Row>
				<Form.Label>Datum</Form.Label>
				<Col>
					<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
						<Form.Control type='date' />
					</Form.Group>
				</Col>
				<Col>
					<Form.Group controlId='formFileMultiple' className='mb-3 big-upload'>
						<Form.Check type='checkbox' label='Automatisch senden' />
					</Form.Group>
				</Col>
			</Row>
		</Form>
	);
};

export default CreateMail;
