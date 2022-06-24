import React from 'react';
import { Card } from 'react-bootstrap';

const DashboardCard = (props) => {
	return (
		<div>
			<Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Subtitle>{props.header}</Card.Subtitle>
                    <Card.Title style={{ fontWeight: '700', fontSize: '2rem'}}>{props.counter}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
		</div>
	);
};

export default DashboardCard;
