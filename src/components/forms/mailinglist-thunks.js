import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const fileDownloader = require('js-file-download');

export const mailinglistNew = createAsyncThunk('mailinglist/new', async arg => {
	const response = await axiosPrivate.post('/mailinglist', { ...arg, entries: [] });
	return response.data;
});

export const mailingListNewRecipient = createAsyncThunk(
	'mailinglist/newRecipient',
	async (arg, { getState }) => {
		const { mailinglist } = getState();
		const list = mailinglist.mailinglists.find(entry => entry.id === arg.id);
		const updatedList = { ...list, entries: [...list.entries] };
		updatedList.entries.push(arg.entry);
		const response = await axiosPrivate.put(`/mailinglist/${arg.id}`, updatedList);
		return response.data;
	}
);

export const mailinglistGetAll = createAsyncThunk('mailinglist/getAll', async () => {
	const response = await axiosPrivate.get('/mailinglist');
	return response.data;
});

export const mailinglistDelete = createAsyncThunk('mailinglist/delete', async arg => {
	const response = await axiosPrivate.delete(`/mailinglist/${arg.id}`);
	return response.data;
});

export const mailingListDeleteRecipient = createAsyncThunk(
	'mailinglist/deleteRecipient',
	async (arg, { getState }) => {
		const { mailinglist } = getState();
		const list = mailinglist.mailinglists.find(entry => entry.id === arg.mailinglistId);
		const updatedList = { ...list, entries: [...list.entries] };
		updatedList.entries = updatedList.entries.filter(entry => entry.id !== arg.id);
		const response = await axiosPrivate.put(
			`/mailinglist/${arg.mailinglistId}`,
			updatedList
		);
		return response.data;
	}
);

export const mailinglistImportById = createAsyncThunk('mailinglist/import', async arg => {
	const data = new FormData();
	data.append('file', arg.file[0]);
	const response = await axiosPrivate.post(`/mailinglist/csv/${arg.id}`, data);
	return response.data;
});

export const mailinglistExportById = createAsyncThunk('mailinglist/export', async arg => {
	const response = await axiosPrivate.get(`/mailinglist/csv/${arg.id}`, {
		responseType: 'blob',
	});
	fileDownloader(response.data, 'mailinglist-export.csv');
});
