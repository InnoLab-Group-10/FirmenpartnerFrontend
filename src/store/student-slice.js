import { createSlice } from '@reduxjs/toolkit';
import {
	studentDelete,
	studentGetAll,
	studentImport,
	studentNew,
	studentUpdate,
} from './student-thunks';

const studentSlice = createSlice({
	name: 'student',
	initialState: {
		shouldReload: true, // starts of with true for initial load
		students: [],
	},
	reducers: {
		setShouldReload: (state, action) => {
			state.shouldReload = action.payload.shouldReload;
		},
	},
	extraReducers: {
		[studentGetAll.fulfilled]: (state, action) => {
			state.students = action.payload.results;
			state.shouldReload = false;
		},
		[studentNew.fulfilled]: state => {
			state.shouldReload = true;
		},
		[studentImport.fulfilled]: state => {
			state.shouldReload = true;
		},
		[studentUpdate.fulfilled]: state => {
			state.shouldReload = true;
		},
		[studentDelete.fulfilled]: state => {
			state.shouldReload = true;
		},
	},
});

export const companyActions = studentSlice.actions;
export default studentSlice.reducer;
