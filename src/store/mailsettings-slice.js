import { createSlice } from '@reduxjs/toolkit';
import { fileGetAll } from './file-thunks';
import {
	mailsettingsGetAll,
	mailsettingsUpdateBackground,
	mailsettingsUpdateBody,
	mailsettingsUpdateFooter,
	mailsettingsUpdateHeader,
} from './mailsettings-thunks';

const mailsettingsSlice = createSlice({
	name: 'mailsettings',
	initialState: {
		shouldReload: true, // starts of with true for initial load of mailsettings table
		header_logoFile: null,
		header_bg_imageFile: null,
		settings: {},
	},
	reducers: {
		setShouldReload: (state, action) => {
			state.shouldReload = action.payload.shouldReload;
		},
	},
	extraReducers: {
		[mailsettingsGetAll.fulfilled]: (state, action) => {
			state.settings = {
				header_bg_color: action.payload[0].value,
				header_logo: action.payload[1].value,
				header_bg_image: action.payload[2].value,
				body_bg_color: action.payload[3].value,
				body_color: action.payload[4].value,
				footer_bg_color: action.payload[5].value,
				footer_color: action.payload[6].value,
				footer_text: action.payload[7].value,
				mail_bg_color: action.payload[8].value,
			};
			state.header_logoFile = action.payload[9].results.find(
				entry => entry.id === state.settings.header_logo
			);
			state.header_bg_imageFile = action.payload[9].results.find(
				entry => entry.id === state.settings.header_bg_imageFile
			);
			state.shouldReload = false;
		},
		[mailsettingsUpdateHeader.fulfilled]: state => {
			state.shouldReload = true;
		},
		[mailsettingsUpdateBody.fulfilled]: state => {
			state.shouldReload = true;
		},
		[mailsettingsUpdateFooter.fulfilled]: state => {
			state.shouldReload = true;
		},
		[mailsettingsUpdateBackground.fulfilled]: state => {
			state.shouldReload = true;
		},
	},
});

export const mailsettingsActions = mailsettingsSlice.actions;
export default mailsettingsSlice.reducer;
