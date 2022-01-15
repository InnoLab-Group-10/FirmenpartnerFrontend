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
			state.companies = action.payload;
		},
		[companyNew.fulfilled]: state => {
			state.shouldReload = true;
		},
	},
});

export const companyActions = companySlice.actions;
export default companySlice.reducer;
