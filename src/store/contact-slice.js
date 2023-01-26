import { createSlice } from '@reduxjs/toolkit';
import { contactGetAll } from './contact-thunks';

const contactSlice = createSlice({
	name: 'contact',
	initialState: {
		shouldReload: true, // starts of with true for initial load
		contacts: [],
	},
	reducers: {
		setShouldReload: (state, action) => {
			state.shouldReload = action.payload.shouldReload;
		},
	},
	extraReducers: {
		[contactGetAll.fulfilled]: (state, action) => {
			state.contacts = action.payload.results;
			state.shouldReload = false;
		},
	},
});

export const contactActions = contactSlice.actions;
export default contactSlice.reducer;
