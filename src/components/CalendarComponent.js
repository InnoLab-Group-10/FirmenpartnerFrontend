import React from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
//import timeGridPlugin from "@fullcalendar/timegrid";

import events from './Events';

const CalendarComponent = () => {
	return (
		<>
			<FullCalendar
				defaultView='dayGridMonth'
				header={{
					left: 'prev,next',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay',
				}}
				themeSystem='Simplex'
				plugins={[dayGridPlugin]}
				events={events}
			/>
		</>
	);
};

export default CalendarComponent;
