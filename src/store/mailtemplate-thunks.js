import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const mailtemplateNew = createAsyncThunk('mailtemplate/new', async arg => {
	const response = await axiosPrivate.post('/mailtemplate', { ...arg, entries: [] });
	return response.data;
});

export const mailtemplateGetAll = createAsyncThunk('mailtemplate/getAll', async () => {
	const response = await axiosPrivate.get('/mailtemplate');
	return response.data;
});

export const mailtemplateDelete = createAsyncThunk('mailtemplate/delete', async arg => {
	const response = await axiosPrivate.delete(`/mailtemplate/${arg.id}`);
	return response.data;
});
