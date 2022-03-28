import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const studentNew = createAsyncThunk('student/new', async arg => {
  const response = await axiosPrivate.post('/student');
	return response.data;
});

export const studentGetAll = createAsyncThunk('student/getAll', async () => {
	const response = await axiosPrivate.get('/student/full');
	return response.data;
});