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
		<>
			<h4 className='timeline-year'>Zukünftige Benachrichtigungen</h4>
			<Container className='overflow-auto'>
				{futureNotifications.map(entry => (
					<Note
						key={entry.id}
						id={entry.id}
						timestamp={entry.timestamp}
						message={entry.message}
						title='Notiz'
						variant='light'
					/>
				))}
			</Container>
			<h4 className='timeline-year'>Benachrichtigungen</h4>
			<Container className='notification-container overflow-auto'>
				{pastNotifications.map(entry => (
					<Note
						key={entry.id}
						id={entry.id}
						timestamp={entry.timestamp}
						message={entry.message}
						title='Notiz'
						variant='light'
					/>
				))}
			</Container>
		</>
	);
};

export default Notifications;
