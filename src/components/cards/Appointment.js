import React, { useState } from 'react';
import { Toast, Button, Container, Row, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { timelineDelete } from '../../store/timeline-thunks';
import CreateMail from '../forms/CreateMail';

const Appointment = props => {
	const { entry } = props;
	const dispatch = useDispatch();

	let content;
	let variant = 'primary';
	switch (entry.type) {
		case 1:
			variant = 'warning';
			content = (
				<Row>
					<Button
						className='toast-button'
						variant={variant}
						size='sm'
						onClick={() => (window.location = entry.link)}
					>
						{entry.linkText}
					</Button>
				</Row>
			);
			break;
		case 2:
			variant = 'info';
			content = (
				<Row>
					<Button
						className='toast-button'
						variant={variant}
						size='sm'
						onClick={() => handleShow('sm-down')}
					>
						Email versenden
					</Button>
				</Row>
			);
			break;
		default:
	}

	const [fullscreen, setFullscreen] = useState(true);
	const [show, setShow] = useState(false);

	const handleShow = breakpoint => {
		setFullscreen(breakpoint);
		setShow(true);
	};

	return (
		<>
			<Toast
				className='appointment-card'
				bg={variant}
				onClose={() => dispatch(timelineDelete({ id: entry.id }))}
			>
				<Toast.Header>
					<strong className='me-auto'>
						{['Nachricht', 'Link', 'Email'][entry.type]}
					</strong>
					<small>{new Date(entry.timestamp).toLocaleString().slice(0, -3)}</small>
				</Toast.Header>
				<Toast.Body>
					<Container>
						<Row className='toast-message'>{entry.message}</Row>
						{content}
					</Container>
				</Toast.Body>
			</Toast>
			<Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Email versenden</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<CreateMail toggleHandler={() => setShow(prevState => !prevState)} />
				</Modal.Body>
			</Modal>
		</>
	);
};

export default Appointment;
