import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		showNavbar: false,
	},
	reducers: {
		toggleShowNavbar: state => {
			state.showNavbar = !state.showNavbar;
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
