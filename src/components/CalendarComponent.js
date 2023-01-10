import React from 'react';
import { Card } from 'react-bootstrap';


import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import events from './Events';

const CalendarComponent = () => {
	return (
		<Card>
			<Card.Body className="calendar-styling-override">
				<FullCalendar
					defaultView='dayGridMonth'
					header={{
						left: 'prev,next',
						center: 'title',
						right: 'dayGridMonth,timeGridWeek,timeGridDay',
					}}
					weekNumbers='true'
					contentHeight={650}
					plugins={[dayGridPlugin]}
					events={events}
					eventClick = {function(info) {
						var eventObj = info.event;
				  
						if (eventObj.url) {
						  alert(
							eventObj.title + '\n' +
							'Öffnet den Link: ' + eventObj.url + ' in einem neuen Browsertab.'
						  );
				  
						  window.open(eventObj.url);
				  
						  info.jsEvent.preventDefault(); // prevents browser from following link in current tab.
						} else {
						  alert(eventObj.title);
						}
					  }
					}
				/>
			</Card.Body>
		</Card>
	);
};

export default CalendarComponent;
