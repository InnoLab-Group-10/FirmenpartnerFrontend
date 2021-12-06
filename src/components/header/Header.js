import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BiMenu, BiX} from 'react-icons/bi';

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
				
					</header>
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
