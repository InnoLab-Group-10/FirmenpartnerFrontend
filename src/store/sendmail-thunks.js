import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendmailSendByOption = createAsyncThunk(
	'sendmail/sendByOption',
	async arg => {
		const response = await axiosPrivate.post(`/sendmail/${arg.id}`, arg);
		return response.data;
	}
);
