import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { timelineGetAll } from '../../store/timeline-thunks';

import Appointment from './Appointment';

// TODO automatically insert year and month, depending on if an entry actually exists
const Timeline = props => {
	const dispatch = useDispatch();
	const { appointments, shouldReload } = useSelector(state => state.timeline);

	useEffect(() => {
		if (shouldReload) {
			dispatch(timelineGetAll());
		}
	}, [dispatch, shouldReload]);

	return (
		<Container>
			{/* <h4 className='timeline-year'>2021</h4>
			<h5 className='timeline-month'>Dezember</h5> */}
			{appointments.map(entry => (
				<Appointment key={entry.id} entry={entry} />
			))}
		</Container>
	);
};

export default Timeline;
