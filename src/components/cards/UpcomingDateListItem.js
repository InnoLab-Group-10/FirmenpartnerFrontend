import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';

const UpcomingDateListItem = props => {
	return (
		<>
			<ListGroup.Item>
				<Row>
					<Col>
					    {props.title}
					</Col>
					<Col>
						{props.date} - {props.time} Uhr
					</Col>
				</Row>
			</ListGroup.Item>
		</>
	);
};

export default UpcomingDateListItem;
