import React from 'react';
import { Toast, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { notificationDelete } from '../../store/notification-thunks';

const Note = props => {
	const dispatch = useDispatch();

	return (
		<Toast
			className='appointment-card'
			bg={props.variant}
			onClose={() => dispatch(notificationDelete({ id: props.id }))}
		>
			<Toast.Header>
				<strong className='me-auto'>{props.title}</strong>
				<small>{new Date(props.timestamp).toLocaleString().slice(0, -3)}</small>
			</Toast.Header>
			<Toast.Body>
				<Container>
					<Row className='toast-message'>{props.message}</Row>
				</Container>
			</Toast.Body>
		</Toast>
	);
};

export default Note;
