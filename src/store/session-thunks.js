import { axiosPublic, axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sessionLogin = createAsyncThunk('session/login', async args => {
	const response = await axiosPublic.post('/session/login', args);
	return response.data;
});

export const sessionRefresh = createAsyncThunk('session/refresh', async args => {
	const response = await axiosPublic.post('/session/refresh', args);
	return response.data;
});

export const sessionInvalidate = createAsyncThunk('session/invalidate', async args => {
	const response = await axiosPrivate.post('/session/invalidate', args);
	return response.data;
});
