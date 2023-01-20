import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timegridPlugin from '@fullcalendar/timegrid';
import CreateMail from './forms/CreateMail';

const CalendarComponent = () => {
	const { appointments } = useSelector(state => state.timeline);
	const { notifications } = useSelector(state => state.notification);

	const [fullscreen, setFullscreen] = useState(true);
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setFullscreen('sm-down');
		setShow(true);
	};

	const handleClick = e => {
		const event = e.event.extendedProps.data;

		if (event.link) {
			window.open(event.link);
			e.jsEvent.preventDefault(); // prevents browser from following link in current tab.
		}
		if (event.type === 2) {
			handleShow();
		}
	};

	return (
		<>
			<Card>
				<Card.Body className='calendar-styling-override'>
					<FullCalendar
						initialView='dayGridMonth'
						headerToolbar={{
							left: 'prev,next',
							center: 'title',
							right: 'dayGridMonth, timeGridWeek, timeGridDay',
						}}
						weekNumbers='true'
						contentHeight={650}
						plugins={[dayGridPlugin, timegridPlugin]}
						events={[
							...appointments.map(entry => ({
								id: entry.id,
								title: entry.message,
								start: entry.timestamp,
								backgroundColor: 'blue',
								data: {
									...entry,
								},
							})),
							...notifications.map(entry => ({
								id: entry.id,
								title: entry.message,
								start: entry.timestamp,
								backgroundColor: 'red',
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
					<Modal.Title>Email versenden</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<CreateMail toggleHandler={() => setShow(prevState => !prevState)} />
				</Modal.Body>
			</Modal>
		</>
	);
};

export default CalendarComponent;
