import React from 'react';
import 'holderjs';
import { Routes, Route } from 'react-router';

//import Login from './pages/Login.js';
import './functions.js';
import Dashboard from './pages/Dashboard';
import Benutzer from './pages/Benutzer';
import Partnerfirmen from './pages/Partnerfirmen';
import Studierende from './pages/Studierende';
import Dokumente from './pages/Dokumente';
import Statistiken from './pages/Statistiken';
import Header from './components/header/Header';
import Navbar from './components/navigation/Navbar';

const App = () => {
	return (
		<div id='bootstrap-override'>
			<div id='body-pd'>
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
			</div>
			{/*<Login/>*/}
		</div>
	);
};

export default App;
