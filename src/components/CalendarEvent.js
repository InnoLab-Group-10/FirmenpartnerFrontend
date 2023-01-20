import React, { useRef, useState } from 'react';
import { Button, Modal, Overlay, Popover, Row } from 'react-bootstrap';
import { BsCircleFill } from 'react-icons/bs';

import CreateMail from './forms/CreateMail';

const CalendarEvent = props => {
	const { event } = props;
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef();

	const handleClick = e => {
		setShow(prevState => !prevState);
		setTarget(e.target);
	};

	const [fullscreen, setFullscreen] = useState(true);
	const [showModal, setShowModal] = useState(false);

	const handleShow = () => {
		setFullscreen('sm-down');
		setShowModal(true);
	};

	const getTitle = () => {
		if (event.type === 'appointment') {
			switch (event.data.type) {
				case 0:
					return 'Nachricht';
				case 1:
					return 'Link';
				case 2:
					return 'Email';
				default:
					return '';
			}
		} else {
			return 'Erinnerung';
		}
	};

	return (
		<div ref={ref}>
			<div onClick={handleClick}>
				<BsCircleFill color={event.type === 'appointment' ? 'red' : 'blue'} />
				{new Date(event.data.timestamp).toLocaleString([], {
					hour: '2-digit',
					minute: '2-digit',
				}) +
					' ' +
					event.data.message}
			</div>
			<Overlay
				show={show}
				target={target}
				placement='top'
				container={ref}
				containerPadding={20}
			>
				<Popover>
					<Popover.Header as='h3'>{getTitle()}</Popover.Header>
					<Popover.Body>
						<Row>{event.data.message}</Row>
						{event.data.type === 1 && (
							<Row>
								<Button
									variant='primary'
									className='toast-button'
									size='sm'
									onClick={() => (window.location = event.data.link)}
								>
									{event.data.linkText}
								</Button>
							</Row>
						)}
						{event.data.type === 2 && (
							<>
								<Row>
									<Button
										variant='primary'
										className='toast-button'
										size='sm'
										onClick={() => handleShow()}
									>
										Email versenden
									</Button>
								</Row>
								<Modal
									show={showModal}
									fullscreen={fullscreen}
									onHide={() => setShowModal(false)}
								>
									<Modal.Header closeButton>
										<Modal.Title>Email versenden</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<CreateMail
											toggleHandler={() => setShowModal(prevState => !prevState)}
										/>
									</Modal.Body>
								</Modal>
							</>
						)}
					</Popover.Body>
				</Popover>
			</Overlay>
		</div>
	);
};

export default CalendarEvent;
