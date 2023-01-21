import React, { useState } from 'react';
import { Button, Card, Modal, Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timegridPlugin from '@fullcalendar/timegrid';

import CreateMail from './forms/CreateMail';

const CalendarComponent = () => {
	const { appointments } = useSelector(state => state.timeline);
	const { notifications } = useSelector(state => state.notification);

	const [currentEvent, setCurrentEvent] = useState({});

	// for main modal
	const [fullscreen, setFullscreen] = useState(true);
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setFullscreen('sm-down');
		setShow(true);
	};

	const [fullscreenEmail, setFullscreenEmail] = useState(true);
	const [showEmail, setShowEmail] = useState(false);

	// for email modal
	const handleShowEmail = () => {
		setFullscreenEmail('sm-down');
		setShowEmail(true);
	};

	const handleClick = e => {
		setCurrentEvent(e.event.extendedProps.data);
		handleShow();
	};

	return (
		<>
			<Card>
				<Card.Body className='calendar-styling-override'>
					<FullCalendar
						initialView='dayGridMonth'
						locales='deLocale'
						firstDay={1}
						weekNumbers='true'
						contentHeight={650}
						plugins={[dayGridPlugin, timegridPlugin]}
						events={[
							...appointments.map(entry => ({
								id: entry.id,
								title: entry.message,
								start: entry.timestamp,
								backgroundColor: 'blue',
								className: "calendar-event-button",
								data: {
									...entry,
								},
							})),
							...notifications.map(entry => ({
								id: entry.id,
								title: entry.message,
								start: entry.timestamp,
								backgroundColor: 'red',
								className: "calendar-event-button",
								data: {
									...entry,
								},
							})),
						]}
						eventClick={handleClick}
					/>
				</Card.Body>
			</Card>
			<Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
					<Row>{currentEvent.message}</Row>
					<Row>
						{currentEvent.type === 1 && (
							<Button
								className='toast-button'
								variant='primary'
								size='sm'
								onClick={() => (window.location = currentEvent.link)}
							>
								{currentEvent.linkText}
							</Button>
						)}
						{currentEvent.type === 2 && (
							<Button
								className='toast-button'
								variant='primary'
								size='sm'
								onClick={handleShowEmail}
							>
								E-Mail versenden
							</Button>
						)}
					</Row>
					</Container>
				</Modal.Body>
			</Modal>
			<Modal
				show={showEmail}
				fullscreen={fullscreenEmail}
				onHide={() => setShowEmail(false)}
			>
				<Modal.Header closeButton>
					<Modal.Title>E-Mail versenden</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<CreateMail toggleHandler={() => setShowEmail(prevState => !prevState)} />
				</Modal.Body>
			</Modal>
		</>
	);
};

export default CalendarComponent;
