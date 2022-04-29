import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const studentNew = createAsyncThunk('student/new', async arg => {
	// can't use arg, just spread it into a new object
	const studentData = {
		...arg,
	};
	const response = await axiosPrivate.post('/student', studentData);
	return response.data;
});

export const studentGetAll = createAsyncThunk('student/getAll', async () => {
	const response = await axiosPrivate.get('/student');
	return response.data;
});

export const studentImport = createAsyncThunk('student/import', async arg => {
	const data = new FormData();
	data.append('file', arg.file[0]);
	const response = await axiosPrivate.post('/student/csv', data);
	return response.data;
});
