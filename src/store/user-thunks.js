import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const userGetCurrent = createAsyncThunk('user/current', async () => {
	const response = await axiosPrivate('/user/current');
	return response.data;
});

export const userNew = createAsyncThunk('user/new', async arg => {
	const userData = {
		username: arg.username,
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

// TODO remove temp fix, see obsidian
// really bad, sorry stephan
export const userUpdate = createAsyncThunk('user/update', async arg => {
	const userData = {
		username: arg.username,
		email: arg.email,
	};
	// can't be done in parallel, since database fetches roles, which are modified right after
	await axiosPrivate.put(`/user/${arg.id}`, userData);
	// remove or insert role
	if (arg.role === 'Administrator' && !arg.currentRoles.includes(arg.role)) {
		const roleData = {
			userId: arg.id,
			role: arg.role,
		};
		await axiosPrivate.post('/role', roleData);
	} else if (arg.role === 'User' && arg.currentRoles.includes('Administrator')) {
		const roleData = {
			userId: arg.id,
			role: 'Administrator',
		};
		await axiosPrivate.delete('/role', { data: roleData });
	}
});

export const userDelete = createAsyncThunk('user/delete', async arg => {
	const response = await axiosPrivate.delete(`/user/${arg.id}`);
	return response.data;
});
