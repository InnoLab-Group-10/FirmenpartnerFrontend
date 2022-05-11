import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const timelineNew = createAsyncThunk('timeline/new', async arg => {
	// can't use arg, just spread it into a new object
	const notificationData = {
		...arg,
	};
	const response = await axiosPrivate.post('/timeline', notificationData);
	return response.data;
});

export const timelineGetAll = createAsyncThunk('timeline/getAll', async arg => {
	const response = await axiosPrivate.get('/timeline');
	return response.data;
});

export const timelineDelete = createAsyncThunk('timeline/delete', async arg => {
	const response = await axiosPrivate.delete(`/timeline/${arg.id}`);
	return response.data;
});
