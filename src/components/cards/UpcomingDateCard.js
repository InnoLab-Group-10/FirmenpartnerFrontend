import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import UpcomingDateListItem from './UpcomingDateListItem';

const UpcomingDateCard = () => {
	return (
		<div>
			<Card>
			    <Card.Header>
					<Card.Title>Header</Card.Title>
					<Card.Subtitle>Subheader</Card.Subtitle>
				</Card.Header>
				<ListGroup variant="flush">
					<UpcomingDateListItem title="Date 1" date="10.06." time="14:00"/>
                    <UpcomingDateListItem title="Date 2" date="10.06." time="14:00"/>
                    <UpcomingDateListItem title="Date 3" date="10.06." time="14:00"/>
                    <UpcomingDateListItem title="Date 4" date="10.06." time="14:00"/>
                    <UpcomingDateListItem title="Date 5" date="10.06." time="14:00"/>
				</ListGroup>
			</Card>
		</div>
	);
};

export default UpcomingDateCard;
