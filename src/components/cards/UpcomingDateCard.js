import React from 'react';
import { Card, ListGroup, Tabs, Tab } from 'react-bootstrap';
import UpcomingDateListItem from './UpcomingDateListItem';

const UpcomingDateCard = () => {
	return (
		<div>
			<Card>
				<Tabs
					defaultActiveKey="notifications"
					id="uncontrolled-tab-example"
					className="dashboard-tabs"
					>
					<Tab eventKey="notifications" title="Notifications">
						<ListGroup variant="flush">
							<UpcomingDateListItem title="Note 1" date="10.06." time="14:00"/>
							<UpcomingDateListItem title="Note 2" date="10.06." time="14:00"/>
							<UpcomingDateListItem title="Note 3" date="10.06." time="14:00"/>
							<UpcomingDateListItem title="Note 4" date="10.06." time="14:00"/>
							<UpcomingDateListItem title="Note 5" date="10.06." time="14:00"/>
						</ListGroup>
					</Tab>
					<Tab eventKey="timeline" title="Timeline">
						<ListGroup variant="flush">
							<UpcomingDateListItem title="Date 1" date="10.06." time="14:00"/>
							<UpcomingDateListItem title="Date 2" date="10.06." time="14:00"/>
							<UpcomingDateListItem title="Date 3" date="10.06." time="14:00"/>
							<UpcomingDateListItem title="Date 4" date="10.06." time="14:00"/>
							<UpcomingDateListItem title="Date 5" date="10.06." time="14:00"/>
						</ListGroup>
					</Tab>
				</Tabs>
			</Card>			
		</div>
	);
};

export default UpcomingDateCard;
