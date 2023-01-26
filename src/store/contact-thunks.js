import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const contactGetAll = createAsyncThunk('contact/getAll', async () => {
	const response = await axiosPrivate.get('/contact');
	return response.data;
});

export const contactNewWithAssignment = createAsyncThunk(
	'contact/newWithAssignment',
	async arg => {
		const responsePerson = await axiosPrivate.post('/contact', arg.entry);
		const assignmentData = {
			companyId: arg.id,
			personId: responsePerson.data.id,
			from: '2022-01-13',
			to: '2022-01-13',
		};
		const response = await axiosPrivate.post('/companyassignment', assignmentData);
		return response.data;
	}
);

export const contactUpdate = createAsyncThunk('contact/update', async arg => {
	const response = await axiosPrivate.put(`/contact/${arg.id}`, arg);
	return response.data;
});

export const contactDelete = createAsyncThunk('contact/delete', async arg => {
	const response = await axiosPrivate.delete(`/contact/${arg.id}`);
	return response.data;
});
