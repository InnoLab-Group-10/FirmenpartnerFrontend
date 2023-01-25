import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendmailSend = createAsyncThunk('sendmail/sendmailSend', async arg => {
	const response = await axiosPrivate.post('/sendmail', arg);
	return response.data;
});
