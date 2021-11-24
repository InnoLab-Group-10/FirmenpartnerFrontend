import React from 'react';
import {Image, Nav} from 'react-bootstrap';
import {BiMenu, BiLayer, BiGridAlt, BiUser, BiMessageSquareDetail, BiBookmark, BiFolder, BiBarChartAlt2, BiLogOut} from 'react-icons/bi';

import './ControlPanelFunctions.js';
import './ControlPanel.css';

function ControlPanel() {
	return <div id="body-pd">
		<header className="header" id="header">
			<div className="header_toggle"> 
				<BiMenu id="header-toggle"></BiMenu>
			</div>
			<div className="header_img">
				<Image src="https://i.imgur.com/hczKIze.jpg" alt="" />
			</div>
		</header>
		<div className="l-navbar" id="nav-bar">
			<nav className="nav">
				<div>
					<Nav.Link href="#" className="nav_logo">
						<BiLayer className='nav_logo-icon'></BiLayer>
						<span className="nav_logo-name">Control Panel</span>
					</Nav.Link>
					<div className="nav_list">
						<Nav.Link href="#" className="nav_link active">
							<BiGridAlt className='nav_icon'></BiGridAlt>
							<span className="nav_name">Dashboard</span>
						</Nav.Link>
						<Nav.Link href="#" className="nav_link">
							<BiUser className='nav_icon'></BiUser>
							<span className="nav_name">Benutzer</span>
						</Nav.Link>
						<Nav.Link href="#" className="nav_link">
							<BiMessageSquareDetail className='nav_icon'></BiMessageSquareDetail>
							<span className="nav_name">Partnerfirmen</span>
						</Nav.Link>
						<Nav.Link href="#" className="nav_link">
							<BiBookmark className='nav_icon'></BiBookmark>
							<span className="nav_name">Studierende</span>
						</Nav.Link>
						<Nav.Link href="#" className="nav_link">
							<BiFolder className='nav_icon'></BiFolder>
							<span className="nav_name">Dokumente</span>
						</Nav.Link>
						<Nav.Link href="#" className="nav_link">
							<BiBarChartAlt2 className='nav_icon'></BiBarChartAlt2>
							<span className="nav_name">Statistiken</span>
						</Nav.Link>
					</div>
				</div>
					<Nav.Link href="#" className="nav_link">
						<BiLogOut className='bx bx-log-out nav_icon'></BiLogOut>
						<span className="nav_name">Abmelden</span>
					</Nav.Link>
			</nav>
		</div>
		{/*<!--Container Main start-->*/}
		<div className="height-100 bg-light">
			<h4>Main Components</h4>
		</div>
		{/*<!--Container Main end-->*/}
	</div>;
}

export default ControlPanel;
