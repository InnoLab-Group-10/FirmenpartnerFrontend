import { axiosPublic, axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sessionLogin = createAsyncThunk('session/login', async args => {
	const response = await axiosPublic.post('/session/login', args);
	return response.data;
});

// TODO fix refresh if multiple api calls are done at the same time
// https://lifesaver.codes/answer/run-interceptor-response-only-once-for-multiple-api-calls-at-the-same-time
export const sessionRefresh = createAsyncThunk('session/refresh', async args => {
	const response = await axiosPublic.post('/session/refresh', args);
	return response.data;
});

// TODO maybe check expiry of refresh token before trying to invalidate
// since refresh token invalidates after 30 days
export const sessionInvalidate = createAsyncThunk('session/invalidate', async args => {
	const response = await axiosPrivate.post('/session/invalidate', args);
	return response.data;
});
