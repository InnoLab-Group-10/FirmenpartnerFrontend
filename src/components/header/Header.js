import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { BiMenu, BiX, BiNotification, BiCalendarWeek, BiUserCircle} from 'react-icons/bi';

const Header = () => {
	return (
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
							<BiCalendarWeek/>
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
	);
};

export default Header;
