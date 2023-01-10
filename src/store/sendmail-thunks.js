import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendmailGetPreviewByTemplateId = createAsyncThunk(
	'sendmail/getPreviewByTemplateId',
	async arg => {
		const response = await axiosPrivate.get(`/sendmail/preview/${arg.id}`);
		return response.data;
	}
);

export const sendmailSendByOption = createAsyncThunk(
	'sendmail/sendByOption',
	async arg => {
		console.log(arg);
		const response = await axiosPrivate.post(`/sendmail/${arg.id}`, arg);
		return response.data;
	}
);
