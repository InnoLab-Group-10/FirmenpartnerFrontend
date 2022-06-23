import { createSlice } from '@reduxjs/toolkit';
import { fileDelete, fileGetAll, fileNew } from './file-thunks';

const fileSlice = createSlice({
	name: 'file',
	initialState: {
		shouldReload: true, // starts of with true for initial load
		files: [],
	},
	reducers: {
		setShouldReload: (state, action) => {
			state.shouldReload = action.payload.shouldReload;
		},
	},
	extraReducers: {
		[fileGetAll.fulfilled]: (state, action) => {
			state.files = action.payload.results;
			state.shouldReload = false;
		},
		[fileNew.fulfilled]: state => {
			state.shouldReload = true;
		},
		[fileDelete.fulfilled]: state => {
			state.shouldReload = true;
		},
	},
});

export const fileActions = fileSlice.actions;
export default fileSlice.reducer;
