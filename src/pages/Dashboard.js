import React from 'react';
import SiteTitle from '../components/SiteTitle';
import CalendarComponent from '../components/CalendarComponent';

const Dashboard = () => {
	return (
		<div>
			<SiteTitle
				title='Dashboard'
				subtitle='Unterüberschrift zum Dashboard'
				text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'
			/>
			<CalendarComponent/>
		</div>
	);
};

export default Dashboard;
