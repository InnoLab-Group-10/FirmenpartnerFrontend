import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const userGetCurrent = createAsyncThunk('user/current', async () => {
	const response = await axiosPrivate('/user/current');
	return response.data;
});

export const userNew = createAsyncThunk('user/new', async arg => {
	// TODO ask Manuel if the current role api should stay like that, because
	// it doesn't make a lot of sense
	const userData = {
		name: arg.name,
		email: arg.email,
		password: arg.password,
	};
	const responseUser = await axiosPrivate.post('/user', userData);
	// add role
	// TODO be able to add more roles
	const roleData = {
		userId: responseUser.data.id, // TODO new user only returns tokens, not the id
		role: arg.role,
	};
	const response = await axiosPrivate.post('/role', roleData);
	return response.data;
});

export const userGetAll = createAsyncThunk('user/getAll', async () => {
	const response = await axiosPrivate.get('/user/full');
	return response.data;
});
