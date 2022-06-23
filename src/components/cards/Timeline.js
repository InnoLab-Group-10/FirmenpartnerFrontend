import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { timelineGetAll } from '../../store/timeline-thunks';

import Appointment from './Appointment';

const months = [
	'Jänner',
	'Februar',
	'März',
	'April',
	'Mai',
	'Juni',
	'Juli',
	'August',
	'September',
	'Oktober',
	'November',
	'Dezember',
];

const Timeline = props => {
	const dispatch = useDispatch();
	const { appointments, shouldReload } = useSelector(state => state.timeline);

	useEffect(() => {
		if (shouldReload) {
			dispatch(timelineGetAll());
		}
	}, [dispatch, shouldReload]);

	// generate timeline list with headers
	let previousDate = null;
	const mapAppointment = entry => {
		const returnArray = [];
		const currentDate = new Date(entry.timestamp);

		if (!previousDate || previousDate.getYear() < currentDate.getYear()) {
			// add year and month
			returnArray.push(
				<h4 className='timeline-year' key='0'>
					{currentDate.getFullYear()}
				</h4>
			);
			returnArray.push(
				<h5 className='timeline-month' key='1'>
					{months[currentDate.getMonth()]}
				</h5>
			);
		} else if (previousDate.getMonth() < currentDate.getMonth()) {
			// add only month
			returnArray.push(
				<h5 className='timeline-month' key='1'>
					{months[currentDate.getMonth()]}
				</h5>
			);
		}

		previousDate = currentDate;
		returnArray.push(<Appointment key={entry.id} entry={entry} />);
		return returnArray;
	};

	return <Container>{appointments.map(entry => mapAppointment(entry))}</Container>;
};

export default Timeline;
