import React from 'react';
import { Card, ListGroup, Tabs, Tab } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import UpcomingDateListItem from './UpcomingDateListItem';

const UpcomingDateCard = () => {
	const { futureNotifications } = useSelector(state => state.notification);
	const { appointments } = useSelector(state => state.timeline);

	const getLimitedArray = sourceArray => {
		const limitedArray = [];
		for (let i = 0; i < 5; ++i) {
			if (i < sourceArray.length) {
				limitedArray.push(
					<UpcomingDateListItem
						key={i}
						title={sourceArray[i].message}
						timestamp={sourceArray[i].timestamp}
					/>
				);
			} else {
				limitedArray.push(<UpcomingDateListItem key={i} title='-' timestamp='-' />);
			}
		}
		return limitedArray;
	};

	return (
		<div>
			<Card>
				<Tabs
					defaultActiveKey='notifications'
					id='uncontrolled-tab-example'
					className='dashboard-tabs'
				>
					<Tab eventKey='notifications' title='Benachrichtigungen'>
						<ListGroup variant='flush'>{getLimitedArray(futureNotifications)}</ListGroup>
					</Tab>
					<Tab eventKey='timeline' title='Termine'>
						<ListGroup variant='flush'>{getLimitedArray(appointments)}</ListGroup>
					</Tab>
				</Tabs>
			</Card>
		</div>
	);
};

export default UpcomingDateCard;
