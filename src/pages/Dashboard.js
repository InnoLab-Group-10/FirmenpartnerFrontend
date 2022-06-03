import React from 'react';
import SiteTitle from '../components/SiteTitle';
import CalendarComponent from '../components/CalendarComponent';
import DashboardCards from '../components/cards/DashboardCards';
import { Container, Row, Col} from 'react-bootstrap';
import UpcomingDateCard from '../components/cards/UpcomingDateCard';

const Dashboard = () => {
	return (
		<>
			<SiteTitle
				title='Dashboard'
				subtitle='Unterüberschrift zum Dashboard'
				text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'
			/>
			<DashboardCards></DashboardCards>
			<Container>
				<Row>
					<Col>
						<UpcomingDateCard/>
					</Col>
					<Col>
						<CalendarComponent/>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Dashboard;
