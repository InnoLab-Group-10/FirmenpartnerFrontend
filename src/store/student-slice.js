import { createSlice } from '@reduxjs/toolkit';
import { studentGetAll, studentNew } from './student-thunks';

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
			state.companies = action.payload;
      state.shouldReload = false;
		},
		[studentNew.fulfilled]: state => {
			state.shouldReload = true;
		},
	},
});

export const companyActions = studentSlice.actions;
export default studentSlice.reducer;
