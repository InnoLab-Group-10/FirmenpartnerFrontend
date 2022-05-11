import { createSlice } from '@reduxjs/toolkit';
import {
	notificationDelete,
	notificationGetUser,
	notificationNew,
} from './notification-thunks';

const notificationSlice = createSlice({
	name: 'notification',
	initialState: {
		shouldReload: true, // starts of with true for initial load
		notifications: [], // includes all notifications of current user
		futureNotifications: [], // includes notifications that are set in future
		pastNotifications: [], // includes notifications that are set in past
	},
	reducers: {
		setShouldReload: (state, action) => {
			state.shouldReload = action.payload.shouldReload;
		},
	},
	extraReducers: {
		[notificationGetUser.fulfilled]: (state, action) => {
			state.notifications = action.payload.results;
			// sort
			state.futureNotifications = action.payload.results.filter(
				entry => new Date(entry.timestamp).getTime() > new Date().getTime()
			);
			state.pastNotifications = action.payload.results.filter(
				entry => new Date(entry.timestamp).getTime() <= new Date().getTime()
			);
			state.shouldReload = false;
		},
		[notificationNew.fulfilled]: state => {
			state.shouldReload = true;
		},
		[notificationDelete.fulfilled]: state => {
			state.shouldReload = true;
		},
	},
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;
