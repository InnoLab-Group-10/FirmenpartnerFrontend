import { createSlice } from '@reduxjs/toolkit';
import { timelineDelete, timelineGetAll, timelineNew } from './timeline-thunks';

const timelineSlice = createSlice({
	name: 'timeline',
	initialState: {
		shouldReload: true, // starts of with true for initial load
		appointments: [],
	},
	reducers: {
		setShouldReload: (state, action) => {
			state.shouldReload = action.payload.shouldReload;
		},
	},
	extraReducers: {
		[timelineGetAll.fulfilled]: (state, action) => {
			state.appointments = action.payload.results;
			state.shouldReload = false;
		},
		[timelineNew.fulfilled]: state => {
			state.shouldReload = true;
		},
		[timelineDelete.fulfilled]: state => {
			state.shouldReload = true;
		},
	},
});

export const timelineActions = timelineSlice.actions;
export default timelineSlice.reducer;
