import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const userGetCurrent = createAsyncThunk('user/current', async () => {
	const response = await axiosPrivate('/user/current');
	return response.data;
});

export const userNew = createAsyncThunk('user/new', async arg => {
	// TODO change to username as soon as api gets updated
	const userData = {
		name: arg.name,
		email: arg.email,
		password: arg.password,
	};
	const responseUser = await axiosPrivate.post('/user', userData);
	// add role
	// TODO be able to add more roles
	if (arg.role !== 'User') {
		// User role gets added automatically
		const roleData = {
			userId: responseUser.data.userId,
			role: arg.role,
		};
		const response = await axiosPrivate.post('/role', roleData);
		return response.data;
	}
});

export const userGetAll = createAsyncThunk('user/getAll', async () => {
	const response = await axiosPrivate.get('/user');
	return response.data;
});
