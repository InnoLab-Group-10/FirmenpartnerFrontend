import { createSlice } from '@reduxjs/toolkit';
import { sessionLogin, sessionRefresh, sessionInvalidate } from './session-thunks';

const sessionSlice = createSlice({
	name: 'session',
	initialState: {
		token: null,
		refreshToken: null,
		isLoggedIn: false,
		refreshInterval: null,
	},
	reducers: {
		setRefreshInterval: (state, action) => {
			state.refreshInterval = action.payload.interval;
		},
		clearRefreshInterval: state => {
			clearInterval(state.refreshInterval);
		},
	},
	extraReducers: {
		[sessionLogin.fulfilled]: (state, action) => {
			state.token = action.payload.token;
			state.refreshToken = action.payload.refreshToken;
			state.isLoggedIn = true;
		},
		[sessionInvalidate.fulfilled]: state => {
			state.token = null;
			state.refreshToken = null;
			state.isLoggedIn = false;
		},
		[sessionRefresh.fulfilled]: (state, action) => {
			state.token = action.payload.token;
			state.refreshToken = action.payload.refreshToken;
		},
	},
});

export const sessionActions = sessionSlice.actions;
export default sessionSlice.reducer;
