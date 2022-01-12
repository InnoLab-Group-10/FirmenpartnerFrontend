import { axiosPublic, axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sessionLogin = createAsyncThunk('session/login', async arg => {
	const { email, password } = arg;
	const response = await axiosPublic.post('/session/login', { email, password });
	return response.data;
});

export const sessionRefresh = createAsyncThunk('session/refresh', async arg => {
	const { token, refreshToken } = arg;
	const response = await fetch('http://toadsworth.ddns.net:5000/api/session/refresh', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			token,
			refreshToken,
		}),
	});
	const data = await response.json();
	return data;
});

export const sessionInvalidate = createAsyncThunk('session/invalidate', async arg => {
	const { refreshToken } = arg;
	const response = await fetch('http://toadsworth.ddns.net:5000/api/session/invalidate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			refreshToken,
		}),
	});
	const data = await response.json();
	return data; // might be useless
});
