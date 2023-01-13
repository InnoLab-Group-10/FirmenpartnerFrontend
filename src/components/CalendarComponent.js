import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timegridPlugin from '@fullcalendar/timegrid';

const CalendarComponent = () => {
	const { appointments } = useSelector(state => state.timeline);
	const { notifications } = useSelector(state => state.notification);

	const handleClick = e => {
		const event = e.event;
		if (event.url) {
			alert(
				event.title +
					'\n' +
					'Öffnet den Link: ' +
					event.url +
					' in einem neuen Browsertab.'
			);

			window.open(event.url);

			e.jsEvent.preventDefault(); // prevents browser from following link in current tab.
		} else {
			alert(event.title);
		}
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
					eventMouseEnter={handleClick}
				/>
			</Card.Body>
		</Card>
	);
};

/*
<Overlay
	show={show}
	target={target}
	placement="left"
	container={ref}
	containerPadding={20}
>
	<Popover>
		<Popover.Header as="h3">
			Benutzerübersicht	
		</Popover.Header>
		<Popover.Body>
			Klicken Sie auf die Spaltenüberschriften um die Tabelle zu sortieren.
		</Popover.Body>
	</Popover>
</Overlay>
*/

export default CalendarComponent;
