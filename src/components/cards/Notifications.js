import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { notificationGetUser } from '../../store/notification-thunks';
import Note from './Note';

// NOTE: notifications actually only show up as new if the site is reloaded or a new one is added
// it could be changed to work basically live, but it's not really that necessary

// split notifications into two arrays, map over them
const Notifications = () => {
	const dispatch = useDispatch();
	const { pastNotifications, futureNotifications, shouldReload } = useSelector(
		state => state.notification
	);
	const { id } = useSelector(state => state.user);

	useEffect(() => {
		if (shouldReload) {
			dispatch(notificationGetUser({ id }));
		}
	}, [dispatch, shouldReload, id]);

	return (
		<Container>
			<h4 className='timeline-year'>Benachrichtigungen</h4>
			{pastNotifications.map(entry => (
				<Note
					key={entry.id}
					id={entry.id}
					timestamp={entry.timestamp}
					message={entry.message}
					title='dummy'
					variant='light'
				/>
			))}
			<h4 className='timeline-year'>Zukünftige Benachrichtigungen</h4>
			{futureNotifications.map(entry => (
				<Note
					key={entry.id}
					id={entry.id}
					timestamp={entry.timestamp}
					message={entry.message}
					title='dummy'
					variant='light'
				/>
			))}
		</Container>
	);
};

export default Notifications;
