import React, { useEffect } from 'react';
import SiteTitle from '../components/SiteTitle';
import CalendarComponent from '../components/CalendarComponent';
import DashboardCards from '../components/cards/DashboardCards';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import UpcomingDateCard from '../components/cards/UpcomingDateCard';
import { timelineGetAll } from '../store/timeline-thunks';
import { notificationGetUser } from '../store/notification-thunks';

const Dashboard = () => {
	const dispatch = useDispatch();
	const { shouldReload: shouldReloadNotifications } = useSelector(
		state => state.notification
	);
	const { shouldReload: shouldReloadAppointments } = useSelector(state => state.timeline);
	const { id } = useSelector(state => state.user);

	useEffect(() => {
		if (shouldReloadAppointments) {
			dispatch(timelineGetAll());
		}
	}, [dispatch, shouldReloadAppointments]);

	// separated, since it might trigger twice if id is loaded to quick
	useEffect(() => {
		if (shouldReloadNotifications && id) {
			dispatch(notificationGetUser({ id }));
		}
	}, [dispatch, shouldReloadNotifications, id]);

	return (
		<>
			<SiteTitle
				title='Dashboard'
				subtitle='Quick-Facts, Benachrichtigungen und Kalender'
				text=''
			/>
			<DashboardCards />
			<Container>
				<Row>
					<Col>
						<UpcomingDateCard />
					</Col>
				</Row>
				<Row>
					<Col>
						<CalendarComponent />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Dashboard;
