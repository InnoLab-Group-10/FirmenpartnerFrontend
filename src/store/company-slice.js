import { createSlice } from '@reduxjs/toolkit';
import {
	companyGetAll,
	companyNew,
	companyImport,
	companyDelete,
	companyUpdate,
} from './company-thunks';
import { contactDelete, contactNewWithAssignment, contactUpdate } from './contact-thunks';
import { studentcountDelete, studentcountNew, studentcountUpdate } from './studentcount-thunks';

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
		// contact operations
		[contactNewWithAssignment.fulfilled]: state => {
			state.shouldReload = true;
		},
		[contactUpdate.fulfilled]: state => {
			state.shouldReload = true;
		},
		[contactDelete.fulfilled]: state => {
			state.shouldReload = true;
		},
		// studentcount operations
		[studentcountNew.fulfilled]: state => {
			state.shouldReload = true;
		},
		[studentcountUpdate.fulfilled]: state => {
			state.shouldReload = true;
		},
		[studentcountDelete.fulfilled]: state => {
			state.shouldReload = true;
		},
	},
});

export const companyActions = companySlice.actions;
export default companySlice.reducer;
