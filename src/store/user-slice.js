import { createSlice } from '@reduxjs/toolkit';
import { userGetCurrent } from './user-thunks';

const userSlice = createSlice({
	name: 'user',
	initialState: { id: null, username: null, email: null, roles: [] },
	extraReducers: {
		[userGetCurrent.fulfilled]: (state, action) => {
			state.id = action.payload.id;
			state.username = action.payload.username;
			state.email = action.payload.email;
			state.roles = action.payload.roles;
		},
	},
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
