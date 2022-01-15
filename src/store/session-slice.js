import { createSlice } from '@reduxjs/toolkit';
import { sessionLogin, sessionRefresh, sessionInvalidate } from './session-thunks';

let initialState = {
	token: null,
	refreshToken: null,
	isLoggedIn: false,
};
const tokenString = localStorage.getItem('token');
const refreshTokenString = localStorage.getItem('refreshToken');
// check if token and refreshToken are set in localstorage, refreshToken not expired and user not logged in
if (tokenString && refreshTokenString) {
	const tokenObject = JSON.parse(tokenString);
	const refreshTokenObject = JSON.parse(refreshTokenString);
	if (refreshTokenObject.expiry > Date.now()) {
		// not expired, request new token and set logged in to true
		initialState = {
			token: tokenObject.value,
			refreshToken: refreshTokenObject.value,
			isLoggedIn: true,
		};
	}
}

const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		setIsLoggedIn: (state, action) => {
			state.isLoggedIn = action.payload.isLoggedIn;
		},
	},
	extraReducers: {
		[sessionLogin.fulfilled]: (state, action) => {
			state.token = action.payload.token;
			state.refreshToken = action.payload.refreshToken;
			state.isLoggedIn = true;
			// set localstorage
			localStorage.setItem(
				'token',
				JSON.stringify({ value: action.payload.token, expiry: Date.now() + 60000 }) // one minute
			);
			localStorage.setItem(
				'refreshToken',
				JSON.stringify({
					value: action.payload.refreshToken,
					expiry: Date.now() + 2590000000,
				}) // little less than one month
			);
		},
		[sessionInvalidate.fulfilled]: state => {
			state.token = null;
			state.refreshToken = null;
			state.isLoggedIn = false;
			// delete localstorage
			localStorage.removeItem('token');
			localStorage.removeItem('refreshToken');
		},
		[sessionRefresh.fulfilled]: (state, action) => {
			state.token = action.payload.token;
			state.refreshToken = action.payload.refreshToken;
			// set localstorage
			localStorage.setItem(
				'token',
				JSON.stringify({ value: action.payload.token, expiry: Date.now() + 60000 }) // one minute
			);
			localStorage.setItem(
				'refreshToken',
				JSON.stringify({
					value: action.payload.refreshToken,
					expiry: Date.now() + 2590000000,
				}) // one month
			);
		},
	},
});

export const sessionActions = sessionSlice.actions;
export default sessionSlice.reducer;
