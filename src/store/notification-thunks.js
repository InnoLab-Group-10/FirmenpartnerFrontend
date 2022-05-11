import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const notificationNew = createAsyncThunk('notification/new', async arg => {
	// can't use arg, just spread it into a new object
	const notificationData = {
		...arg,
	};
	const response = await axiosPrivate.post('/notification', notificationData);
	return response.data;
});

export const notificationGetUser = createAsyncThunk('notification/getUser', async arg => {
	const response = await axiosPrivate.get(`/notification/user/${arg.id}`);
	return response.data;
});

export const notificationDelete = createAsyncThunk('notification/delete', async arg => {
	const response = await axiosPrivate.delete(`/notification/${arg.id}`);
	return response.data;
});
