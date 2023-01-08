import { createSlice } from '@reduxjs/toolkit';
import {
	mailinglistGetAll,
	mailinglistNew,
	mailingListNewRecipient,
	mailinglistDelete,
	mailingListDeleteRecipient,
	mailinglistImportById,
} from './mailinglist-thunks';

const mailinglistSlice = createSlice({
	name: 'mailinglist',
	initialState: {
		shouldReload: true, // starts of with true for initial load of mailinglist table
		mailinglists: [], // includes partnercompanies added to them
	},
	reducers: {
		setShouldReload: (state, action) => {
			state.shouldReload = action.payload.shouldReload;
		},
	},
	extraReducers: {
		[mailinglistGetAll.fulfilled]: (state, action) => {
			state.mailinglists = action.payload.results;
			state.shouldReload = false;
		},
		[mailinglistNew.fulfilled]: state => {
			state.shouldReload = true;
		},
		[mailingListNewRecipient.fulfilled]: state => {
			state.shouldReload = true;
		},
		[mailinglistDelete.fulfilled]: state => {
			state.shouldReload = true;
		},
		[mailingListDeleteRecipient.fulfilled]: state => {
			state.shouldReload = true;
		},
		[mailinglistImportById.fulfilled]: state => {
			state.shouldReload = true;
		},
	},
});

export const mailinglistActions = mailinglistSlice.actions;
export default mailinglistSlice.reducer;
