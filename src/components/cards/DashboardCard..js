import React from 'react';
import { Card } from 'react-bootstrap';

const DashboardCard = () => {
	return (
		<div>
			<Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Subtitle>Subheader</Card.Subtitle>
                    <Card.Title style={{ fontWeight: '700', fontSize: '2rem'}}>100</Card.Title>
                    <Card.Text>
                        Example Text
                    </Card.Text>
                </Card.Body>
            </Card>
		</div>
	);
};

export default DashboardCard;
