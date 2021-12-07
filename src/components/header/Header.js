import React, {useState} from 'react';
import { Container, Row, Col, Dropdown, Button, Offcanvas} from 'react-bootstrap';
import { BiMenu, BiX, BiNotification, BiCalendarWeek, BiUserCircle} from 'react-icons/bi';
import Timeline from '../cards/Timeline';

const Header = () => {
	const [showCanvas, setShow] = useState(false);

  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

	return (<>
		{/* Timeline-Canvas */}
		<Offcanvas 
			show={showCanvas}
			onHide={handleClose}
			placement="end"
			scroll="true"
			>
		  <Offcanvas.Header closeButton>
			<Offcanvas.Title>Timeline</Offcanvas.Title>
		  </Offcanvas.Header>
		  <Offcanvas.Body>
			<Timeline></Timeline>
		  </Offcanvas.Body>
		</Offcanvas>

		{/* Header */}
		<Container>
			<Row>
				<Col>
					<header className='header' id='header'>
						<div className='header_toggle'>
							<BiMenu id='header-toggle' className="header-toggle-show"></BiMenu>
							<BiX id='header-close' className="header-close-hide"></BiX>
						</div>
						<div className="user-notification">
							<BiNotification/>
						</div>
						<div className="user-notification">
							<Button className="timeline-button" variant="light" onClick={handleShow}>
								<BiCalendarWeek/>
							</Button>
						</div>
						<Dropdown className="user-badge-menu">
							<Dropdown.Toggle variant="light" id="dropdown-basic">
								<div>
									<BiUserCircle/>
								</div>
								<div className="user-badge">
									<h6>Benutzername</h6>
									<span>Rolle</span>
								</div>
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">Link 1</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Link 2</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item href="#/action-3">Abmelden</Dropdown.Item>
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
