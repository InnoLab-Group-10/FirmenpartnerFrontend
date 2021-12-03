import React from 'react';
import { Image } from 'react-bootstrap';
import { BiMenu } from 'react-icons/bi';

const Header = () => {
	return (
		<header className='header' id='header'>
			<div className='header_toggle'>
				<BiMenu id='header-toggle'></BiMenu>
			</div>
			<div className='header_img'>
				<Image src='https://i.imgur.com/hczKIze.jpg' alt='' />
			</div>
		</header>
	);
};

export default Header;
