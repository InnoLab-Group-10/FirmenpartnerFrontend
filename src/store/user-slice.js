import { createSlice } from '@reduxjs/toolkit';
import { userGetAll, userGetCurrent, userNew } from './user-thunks';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		id: null,
		username: null,
		email: null,
		roles: [],
		// TODO separate current from user table
		shouldReload: true, // starts of with true for initial load of user table
		users: [], // used for user table
	},
	reducers: {
		setShouldReload: (state, action) => {
			state.shouldReload = action.payload.shouldReload;
		},
	},
	extraReducers: {
		[userGetCurrent.fulfilled]: (state, action) => {
			state.id = action.payload.id;
			state.username = action.payload.username;
			state.email = action.payload.email;
			state.roles = action.payload.roles;
		},
		[userGetAll.fulfilled]: (state, action) => {
			state.users = action.payload.results;
			state.shouldReload = false;
		},
		[userNew.fulfilled]: state => {
			state.shouldReload = true;
		},
	},
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
