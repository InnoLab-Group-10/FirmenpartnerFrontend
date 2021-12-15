import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Alerts = (props) => {
	return <Alert variant={props.variant}>
			{props.text}
		</Alert>;
};

export default Alerts;
