import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timegridPlugin from '@fullcalendar/timegrid';
import CalendarEvent from './CalendarEvent';

const CalendarComponent = () => {
	const { appointments } = useSelector(state => state.timeline);
	const { notifications } = useSelector(state => state.notification);

	const renderEvent = e => {
		return <CalendarEvent event={e.event.extendedProps} />;
	};

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
							start: entry.timestamp,
							type: 'appointment',
							data: entry,
						})),
						...notifications.map(entry => ({
							id: entry.id,
							start: entry.timestamp,
							type: 'notification',
							data: entry,
						})),
					]}
					eventContent={renderEvent}
				/>
			</Card.Body>
		</Card>
	);
};

export default CalendarComponent;
