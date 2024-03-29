import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './default.css';

// inject store for refresh token calls
// fixes circular dependencies
import { injectStore } from './store/axios';
injectStore(store);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
