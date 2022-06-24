import React, { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
	const [values, setValues] = useState([new Date()]);
	// const { notifications } = useSelector(state => state.notification);
	// const { appointments } = useSelector(state => state.timeline);

	// useEffect(() => {
	// 	console.log(notifications.concat(appointments));
	// 	console.log(
	// 		notifications.concat(appointments).map(entry => new Date(entry.timestamp))
	// 	);
	// 	setValues(notifications.concat(appointments).map(entry => new Date(entry.timestamp)));
	// }, [notifications, appointments]);

	return <Calendar onChange={setValues} defaultValue={values} />;
};

export default CalendarComponent;
