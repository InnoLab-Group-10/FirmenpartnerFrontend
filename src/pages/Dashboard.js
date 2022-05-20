import React from 'react';
import Calendar from 'react-calendar';
import SiteTitle from '../components/SiteTitle';

import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
	return (
		<div>
			<SiteTitle
				title='Dashboard'
				subtitle='Unterüberschrift zum Dashboard'
				text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'
			/>
			<Calendar/>
		</div>
	);
};

export default Dashboard;
