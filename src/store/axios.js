import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Mutex } from 'async-mutex';
import { env } from '../env';

import { sessionRefresh } from './session-thunks';

let store;
export const injectStore = _store => {
	store = _store;
};

const mutex = new Mutex();

// used for requests that don't need authentication
export const axiosPublic = axios.create({
	baseURL: env.REACT_APP_API_URL,
});
// used for requests that need authentication
export const axiosPrivate = axios.create({
	baseURL: env.REACT_APP_API_URL,
});

// TODO maybe axios-auth-refresh
axiosPrivate.interceptors.request.use(
	async config => {
		const session = store.getState().session;
		const currentDate = new Date();
		const { exp } = jwt_decode(session.token);
		// check if token is expired
		if (exp * 1000 < currentDate.getTime()) {
			// get token again after lock, since it will have been updated
			const release = await mutex.acquire();
			try {
				const sessionNew = store.getState().session;
				const { exp: expNew } = jwt_decode(sessionNew.token);
				if (expNew * 1000 < currentDate.getTime()) {
					// request new token
					await store.dispatch(
						sessionRefresh({
							token: sessionNew.token,
							refreshToken: sessionNew.refreshToken,
						})
					);
				}
			} finally {
				release();
			}
		}
		// add authorization header
		config.headers['Authorization'] = `Bearer ${store.getState().session.token}`;
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);
