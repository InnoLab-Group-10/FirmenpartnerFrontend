import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timegridPlugin from '@fullcalendar/timegrid';

const CalendarComponent = () => {
	const { appointments } = useSelector(state => state.timeline);
	const { notifications } = useSelector(state => state.notification);

	return (
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
							url: entry.link ? entry.link : '',
							backgroundColor: 'blue',
						})),
						...notifications.map(entry => ({
							id: entry.id,
							title: entry.message,
							start: entry.timestamp,
							backgroundColor: 'red',
						})),
					]}
				/>
			</Card.Body>
		</Card>
	);
};

export default CalendarComponent;
