import { createSlice } from '@reduxjs/toolkit';
import { companyGetAll, companyNew } from './company-thunks';

const companySlice = createSlice({
	name: 'company',
	initialState: {
		shouldReload: true, // starts of with true for initial load
		companies: [],
	},
	reducers: {
		setShouldReload: (state, action) => {
			state.shouldReload = action.payload.shouldReload;
		},
	},
	extraReducers: {
		[companyGetAll.fulfilled]: (state, action) => {
			// TODO add .results as soon as api changes
			state.companies = action.payload;
			state.shouldReload = false;
		},
		[companyNew.fulfilled]: state => {
			state.shouldReload = true;
		},
	},
});

export const companyActions = companySlice.actions;
export default companySlice.reducer;
