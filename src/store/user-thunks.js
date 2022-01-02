import { createAsyncThunk } from '@reduxjs/toolkit';

export const userGetCurrent = createAsyncThunk('user/current', async arg => {
	const { token } = arg;
	const response = await fetch('http://toadsworth.ddns.net:5000/api/user/current', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
	});
	const data = await response.json();
	return data;
});
