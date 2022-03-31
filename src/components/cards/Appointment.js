import React, {useState} from 'react';
import { Toast, Button, Container, Row, Modal } from 'react-bootstrap';
import CreateMail from '../forms/CreateMail';

const Appointment = props => {
	const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
	
	return (<>
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
							className='toast-button'
							variant={props.variant}
							size='sm'
							onClick={() => handleShow("sm-down")}
						>
							{props.button}
						</Button>
					</Row>
				</Container>
			</Toast.Body>
		</Toast>
		<Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
			<Modal.Header closeButton>
				<Modal.Title>{props.button}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<CreateMail/>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="light">Zurücksetzen</Button>
				<Button variant="primary" disabled>Absenden</Button>
			</Modal.Footer>
		</Modal>
	</>
	);
};

export default Appointment;
