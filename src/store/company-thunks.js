import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const fileDownloader = require('js-file-download');

export const companyNew = createAsyncThunk('company/new', async arg => {
	// combine in order to call in parallel
	const companyData = {
		name: arg.name,
		contractSigned: false,
		maxStudents: arg.maxStudents,
		notes: arg.notes,
	};
	const responseCompany = await axiosPrivate.post('/company', companyData);
	const contactData = {
		firstName: arg.firstName,
		lastName: arg.lastName,
		email: arg.email,
		phone: arg.phone,
	};
	const responsePerson = await axiosPrivate.post('/contact', contactData);
	const assignmentData = {
		companyId: responseCompany.data.id,
		personId: responsePerson.data.id,
		from: '2022-01-13',
		to: '2022-01-13',
	};
	await axiosPrivate.post('/companyassignment', assignmentData);
	const locationData = {
		address: arg.address,
		city: arg.city,
		zipcode: arg.zipcode,
		companyId: responseCompany.data.id,
	};
	const response = await axiosPrivate.post('/companylocation', locationData);
	return response.data;
});

export const companyGetAll = createAsyncThunk('company/getAll', async () => {
	const response = await axiosPrivate.get('/company');
	return response.data;
});

export const companyImport = createAsyncThunk('company/import', async arg => {
	const data = new FormData();
	data.append('file', arg.file[0]);
	const response = await axiosPrivate.post('/company/csv', data);
	return response.data;
});

export const companyExport = createAsyncThunk('company/export', async () => {
	const response = await axiosPrivate.get(`/company/csv`, { responseType: 'blob' });
	fileDownloader(response.data, 'company-export.csv');
});
