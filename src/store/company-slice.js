import { createSlice } from '@reduxjs/toolkit';
import {
	companyGetAll,
	companyNew,
	companyImport,
	companyDelete,
	companyUpdate,
} from './company-thunks';

const companySlice = createSlice({
	name: 'company',
	initialState: {
		shouldReload: true, // starts of with true for initial load
		companies: [],
		activeCompanies: [],
		inactiveCompanies: [],
		maxStudentsCounter: 0,
	},
	reducers: {
		setShouldReload: (state, action) => {
			state.shouldReload = action.payload.shouldReload;
		},
	},
	extraReducers: {
		[companyGetAll.fulfilled]: (state, action) => {
			state.companies = action.payload.results;
			state.shouldReload = false;
			let activeCompanies = [];
			let inactiveCompanies = [];
			let maxStudentsCounter = 0;
			action.payload.results.forEach(entry => {
				if (entry.company.contractSigned) {
					activeCompanies.push(entry);
				} else {
					inactiveCompanies.push(entry);
				}
				maxStudentsCounter += entry.company.maxStudents;
			});
			state.activeCompanies = activeCompanies;
			state.inactiveCompanies = inactiveCompanies;
			state.maxStudentsCounter = maxStudentsCounter;
		},
		[companyNew.fulfilled]: state => {
			state.shouldReload = true;
		},
		[companyUpdate.fulfilled]: state => {
			state.shouldReload = true;
		},
		[companyDelete.fulfilled]: state => {
			state.shouldReload = true;
		},
		[companyImport.fulfilled]: state => {
			state.shouldReload = true;
		},
	},
});

export const companyActions = companySlice.actions;
export default companySlice.reducer;
