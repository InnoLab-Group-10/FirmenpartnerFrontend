import { createSlice } from '@reduxjs/toolkit';
import {
	mailtemplateGetAll,
	mailtemplateNew,
	mailtemplateDelete,
} from './mailtemplate-thunks';

const mailtemplateSlice = createSlice({
	name: 'mailtemplate',
	initialState: {
		shouldReload: true, // starts of with true for initial load of mailtemplate table
		mailtemplates: [], // includes partnercompanies added to them
	},
	reducers: {
		setShouldReload: (state, action) => {
			state.shouldReload = action.payload.shouldReload;
		},
	},
	extraReducers: {
		[mailtemplateGetAll.fulfilled]: (state, action) => {
			state.mailtemplates = action.payload.results;
			state.shouldReload = false;
		},
		[mailtemplateNew.fulfilled]: state => {
			state.shouldReload = true;
		},
		[mailtemplateDelete.fulfilled]: state => {
			state.shouldReload = true;
		},
	},
});

export const mailtemplateActions = mailtemplateSlice.actions;
export default mailtemplateSlice.reducer;
