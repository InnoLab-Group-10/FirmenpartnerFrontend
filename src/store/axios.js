import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { sessionRefresh } from './session-thunks';

let store;
export const injectStore = _store => {
	store = _store;
};

// used for requests that don't need authentication
export const axiosPublic = axios.create({
	baseURL: 'http://toadsworth.ddns.net:5000/api',
});
// used for requests that need authentication
export const axiosPrivate = axios.create({
	baseURL: 'http://toadsworth.ddns.net:5000/api',
});

axiosPrivate.interceptors.request.use(
	async config => {
		const session = store.getState().session;
		const currentDate = new Date();
		// check if token is set, not really necessary
		if (session.token) {
			const { exp } = jwt_decode(session.token);
			// check if token is expired
			if (exp * 1000 < currentDate.getTime()) {
				// request new token
				await store.dispatch(
					sessionRefresh({ token: session.token, refreshToken: session.refreshToken })
				);
				// add authorization header
				if (config.headers) {
					config.headers['Authorization'] = `Bearer ${store.getState().session.token}`;
				}
			} else {
				// add authorization header without refresh, since token is still valid
				config.headers['Authorization'] = `Bearer ${store.getState().session.token}`;
			}
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);
