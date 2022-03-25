import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Button, Offcanvas } from 'react-bootstrap';
import {
	BiMenu,
	BiX,
	BiNotification,
	BiCalendarWeek,
	BiUserCircle,
} from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import Notifications from '../cards/Notifications';
import Timeline from '../cards/Timeline';

import { sessionInvalidate } from '../../store/session-thunks';
import { uiActions } from '../../store/ui-slice';

const Header = () => {
	const showNavbar = useSelector(state => state.ui.showNavbar);
	const refreshToken = useSelector(state => state.session.refreshToken);
	const { username, roles } = useSelector(state => state.user);
	const dispatch = useDispatch();

	const toggleShowNavbarHandler = () => {
		dispatch(uiActions.toggleShowNavbar());
	};

	const [showCanvas, setShow] = useState(false);
	const [showNotes, setShowNotes] = useState(false);

	return (
		<>
			{/* Timeline-Canvas */}
			<Offcanvas
				show={showCanvas}
				onHide={() => setShow(false)}
				placement='end'
				scroll='true'
			>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Timeline</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Timeline />
				</Offcanvas.Body>
			</Offcanvas>

			{/* Notification-Canvas */}
			<Offcanvas
				show={showNotes}
				onHide={() => setShowNotes(false)}
				placement='end'
				scroll='true'
			>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Benachrichtigungen</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Notifications />
				</Offcanvas.Body>
			</Offcanvas>

			{/* Header */}
			<Container>
				<Row>
					<Col>
						<header className={`header ${showNavbar ? 'body-pd' : ''}`} id='header'>
							<div className='header_toggle'>
								{showNavbar ? (
									<BiX onClick={toggleShowNavbarHandler} className='header-close-show' />
								) : (
									<BiMenu onClick={toggleShowNavbarHandler} />
								)}
							</div>
							<div className='user-notification'>
								<Button
									className='timeline-button'
									variant='light'
									onClick={() => setShowNotes(true)}
								>
									<BiNotification />
								</Button>
							</div>
							<div className='user-notification'>
								<Button
									className='timeline-button'
									variant='light'
									onClick={() => setShow(true)}
								>
									<BiCalendarWeek />
								</Button>
							</div>
							<Dropdown className='user-badge-menu'>
								<Dropdown.Toggle variant='light' id='dropdown-basic'>
									<div>
										<BiUserCircle />
									</div>
									<div className='user-badge'>
										<h6>{username}</h6>
										<span>{roles[0]}</span>
									</div>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item href='#/action-1'>Link 1</Dropdown.Item>
									<Dropdown.Item href='#/action-2'>Link 2</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item
										onClick={() => {
											dispatch(sessionInvalidate({ refreshToken }));
										}}
									>
										Abmelden
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</header>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Header;
