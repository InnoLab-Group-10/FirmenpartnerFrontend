import React from 'react';
import { Toast, Button, Container, Row } from 'react-bootstrap';

const Appointment = props => {
	return (
		<Toast className='appointment-card' bg={props.variant}>
			<Toast.Header>
				<strong className='me-auto'>{props.title}</strong>
				<small>{props.info}</small>
			</Toast.Header>
			<Toast.Body>
				<Container>
					<Row className='toast-message'>{props.text}</Row>
					<Row>
						<Button
							href={props.link}
							className='toast-button'
							variant={props.variant}
							size='sm'
						>
							{props.button}
						</Button>
					</Row>
				</Container>
			</Toast.Body>
		</Toast>
	);
};

export default Appointment;
