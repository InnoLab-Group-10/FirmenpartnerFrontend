import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const fileDownloader = require('js-file-download');

export const fileGetAll = createAsyncThunk('file/getAll', async () => {
	const response = await axiosPrivate.get('/file');
	return response.data;
});

export const fileDownload = createAsyncThunk('file/download', async arg => {
	const response = await axiosPrivate.get(`/file/${arg.id}`, { responseType: 'blob' });
	fileDownloader(response.data, arg.name);
});

export const fileNew = createAsyncThunk('file/new', async arg => {
	const data = new FormData();
	data.append('file', arg.file[0]);
	const response = await axiosPrivate.post('/file', data);
	return response.data;
});

export const fileDelete = createAsyncThunk('file/delete', async arg => {
	const response = await axiosPrivate.delete(`/file/${arg.id}`);
	return response.data;
});
