import React from 'react';
import { Nav } from 'react-bootstrap';
import {
	BiLayer,
	BiGridAlt,
	BiUser,
	BiMessageSquareDetail,
	BiBookmark,
	BiFolder,
	BiBarChartAlt2,
	BiLogOut,
} from 'react-icons/bi';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { sessionInvalidate } from '../../store/session-thunks';

const Navbar = () => {
	const refreshToken = useSelector(state => state.session.refreshToken);
	const showNavbar = useSelector(state => state.ui.showNavbar);
	const dispatch = useDispatch();

	return (
		<div className={`l-navbar ${showNavbar ? 'showing' : ''}`} id='nav-bar'>
			<nav className='nav'>
				<div>
					<LinkContainer to='/'>
						<Nav.Link className='nav_logo'>
							<BiLayer className='nav_logo-icon'></BiLayer>
							<span className='nav_logo-name'>Seitentitel</span>
						</Nav.Link>
					</LinkContainer>
					<div className='nav_list'>
						<LinkContainer to='/dashboard' activeClassName='active'>
							<Nav.Link className='nav_link'>
								<BiGridAlt className='nav_icon'></BiGridAlt>
								<span className='nav_name'>Dashboard</span>
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/benutzer' activeClassName='active'>
							<Nav.Link className='nav_link'>
								<BiUser className='nav_icon'></BiUser>
								<span className='nav_name'>Benutzer</span>
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/partnerfirmen' activeClassName='active'>
							<Nav.Link className='nav_link'>
								<BiMessageSquareDetail className='nav_icon'></BiMessageSquareDetail>
								<span className='nav_name'>Partnerfirmen</span>
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/studierende' activeClassName='active'>
							<Nav.Link className='nav_link'>
								<BiBookmark className='nav_icon'></BiBookmark>
								<span className='nav_name'>Studierende</span>
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/dokumente' activeClassName='active'>
							<Nav.Link className='nav_link'>
								<BiFolder className='nav_icon'></BiFolder>
								<span className='nav_name'>Dokumente</span>
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/statistiken' activeClassName='active'>
							<Nav.Link className='nav_link'>
								<BiBarChartAlt2 className='nav_icon'></BiBarChartAlt2>
								<span className='nav_name'>Statistiken</span>
							</Nav.Link>
						</LinkContainer>
					</div>
				</div>
				<Nav.Link
					className='nav_link'
					onClick={() => {
						dispatch(sessionInvalidate({ refreshToken }));
					}}
				>
					<BiLogOut className='bx bx-log-out nav_icon'></BiLogOut>
					<span className='nav_name'>Abmelden</span>
				</Nav.Link>
			</nav>
		</div>
	);
};

export default Navbar;
