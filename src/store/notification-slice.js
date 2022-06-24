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
			if (action.payload.results) {
				state.notifications = action.payload.results;
			} else {
				state.notifications = [];
			}
			// sort by timestamp
			state.notifications.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
			const index = state.notifications.findIndex(
				entry => new Date(entry.timestamp).getTime() > new Date().getTime()
			);

			if (index !== -1) {
				state.pastNotifications = state.notifications.slice(0, index);
				state.futureNotifications = state.notifications.slice(index);
			} else {
				state.pastNotifications = state.notifications;
			}

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
