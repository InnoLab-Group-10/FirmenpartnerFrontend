import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Alerts = () => {
	return ['success', 'danger', 'warning'].map((variant, idx) => (
		<Alert key={idx} variant={variant}>
			Dies ist eine "{variant}"-Nachricht!
		</Alert>
	));
};

export default Alerts;
