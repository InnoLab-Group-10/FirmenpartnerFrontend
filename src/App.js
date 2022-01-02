import React, { useEffect } from 'react';
import 'holderjs';
import { Routes, Route } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { sessionRefresh } from './store/session-thunks.js';
import { sessionActions } from './store/session-slice.js';
import { userGetCurrent } from './store/user-thunks';
import './functions.js';
import Dashboard from './pages/Dashboard';
import Benutzer from './pages/Benutzer';
import Partnerfirmen from './pages/Partnerfirmen';
import Studierende from './pages/Studierende';
import Dokumente from './pages/Dokumente';
import Statistiken from './pages/Statistiken';
import Header from './components/header/Header';
import Navbar from './components/navigation/Navbar';
import Login from './pages/Login';

const App = () => {
	const { token, refreshToken, isLoggedIn } = useSelector(state => state.session);
	const dispatch = useDispatch();

	// TODO make less janky, precall refresh if token is expired?
	useEffect(() => {
		if (isLoggedIn) {
			// set token refresh
			const interval = setInterval(() => {
				dispatch(sessionRefresh({ token, refreshToken }));
			}, 60001);
			dispatch(sessionActions.setRefreshInterval({ interval }));
			// get user data
			dispatch(userGetCurrent({ token }));
		} else {
			// clear token refresh
			dispatch(sessionActions.clearRefreshInterval());
		}
	}, [isLoggedIn, dispatch]);

	return (
		<div id='bootstrap-override'>
			<div id='body-pd'>
				{isLoggedIn ? (
					<>
						<Header />
						<Navbar />
						<div className='content'>
							<Routes>
								<Route path='dashboard' element={<Dashboard />} />
								<Route path='benutzer' element={<Benutzer />} />
								<Route path='partnerfirmen' element={<Partnerfirmen />} />
								<Route path='studierende' element={<Studierende />} />
								<Route path='dokumente' element={<Dokumente />} />
								<Route path='statistiken' element={<Statistiken />} />
							</Routes>
						</div>
					</>
				) : (
					<Login />
				)}
			</div>
		</div>
	);
};

export default App;
