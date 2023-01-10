import { createSlice } from '@reduxjs/toolkit';
import { sendmailGetPreviewByTemplateId } from './sendmail-thunks';

const sendmailSlice = createSlice({
	name: 'sendmail',
	initialState: {
		currentPreview: '',
	},
	reducers: {
		setShouldReload: (state, action) => {
			state.shouldReload = action.payload.shouldReload;
		},
	},
	extraReducers: {
		[sendmailGetPreviewByTemplateId.fulfilled]: (state, action) => {
			state.currentPreview = action.payload;
		},
	},
});

export const sendmailActions = sendmailSlice.actions;
export default sendmailSlice.reducer;
