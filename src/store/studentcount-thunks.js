import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const studentcountNew = createAsyncThunk('studencount/new', async arg => {
	const response = await axiosPrivate.post('/studentcount', arg);
	return response.data;
});

export const studentcountUpdate = createAsyncThunk('studencount/update', async arg => {
	const response = await axiosPrivate.put(`/studentcount/${arg.id}`, arg);
	return response.data;
});

export const studentcountDelete = createAsyncThunk('studentcount/delete', async arg => {
	const response = await axiosPrivate.delete(`/studentcount/${arg.id}`);
	return response.data;
});
