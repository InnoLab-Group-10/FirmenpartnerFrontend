import React, { useEffect, useState } from 'react';
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

const showNavbar = (toggleId, closeId, navId, bodyId, headerId) => {
	const toggle = document.getElementById(toggleId),
		close = document.getElementById(closeId),
		nav = document.getElementById(navId),
		bodypd = document.getElementById(bodyId),
		headerpd = document.getElementById(headerId);

	// Validate that all variables exist
	if (toggle && close && nav && bodypd && headerpd) {
		toggle.addEventListener('click', () => {
			// show navbar
			nav.classList.toggle('showing');
			// change icon
			toggle.setAttribute('class', 'header-toggle-hide');
			close.setAttribute('class', 'header-close-show');
			// add padding to body
			bodypd.classList.toggle('body-pd');
			// add padding to header
			headerpd.classList.toggle('body-pd');
		});

		close.addEventListener('click', () => {
			// show navbar
			nav.classList.toggle('showing');
			// change icon
			toggle.setAttribute('class', 'header-toggle-show');
			close.setAttribute('class', 'header-close-hide');
			// add padding to body
			bodypd.classList.toggle('body-pd');
			// add padding to header
			headerpd.classList.toggle('body-pd');
		});
	}
};

const Header = () => {
	useEffect(() => {
		showNavbar('header-toggle', 'header-close', 'nav-bar', 'body-pd', 'header');
	}, []);

	const [showCanvas, setShow] = useState(false);
	const [showNotes, setShowNotes] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleCloseNotes = () => setShowNotes(false);
	const handleShowNotes = () => setShowNotes(true);

	const refreshToken = useSelector(state => state.session.refreshToken);
	const dispatch = useDispatch();

	const { username, roles } = useSelector(state => state.user);

	return (
		<>
			{/* Timeline-Canvas */}
			<Offcanvas show={showCanvas} onHide={handleClose} placement='end' scroll='true'>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Timeline</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Timeline></Timeline>
				</Offcanvas.Body>
			</Offcanvas>

			{/* Notification-Canvas */}
			<Offcanvas show={showNotes} onHide={handleCloseNotes} placement='end' scroll='true'>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Benachrichtigungen</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Notifications></Notifications>
				</Offcanvas.Body>
			</Offcanvas>

			{/* Header */}
			<Container>
				<Row>
					<Col>
						<header className='header' id='header'>
							<div className='header_toggle'>
								<BiMenu id='header-toggle' className='header-toggle-show'></BiMenu>
								<BiX id='header-close' className='header-close-hide'></BiX>
							</div>
							<div className='user-notification'>
								<Button
									className='timeline-button'
									variant='light'
									onClick={handleShowNotes}
								>
									<BiNotification />
								</Button>
							</div>
							<div className='user-notification'>
								<Button className='timeline-button' variant='light' onClick={handleShow}>
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
