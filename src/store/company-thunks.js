import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const fileDownloader = require('js-file-download');

export const companyNew = createAsyncThunk('company/new', async arg => {
	const companyData = {
		name: arg.name,
		contractSigned: arg.contractSigned,
		maxStudents: arg.maxStudents,
		notes: arg.notes,
	};
	const responseCompany = await axiosPrivate.post('/company', companyData);
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

export const companyUpdate = createAsyncThunk('company/update', async arg => {
	const companyData = {
		name: arg.name,
		contractSigned: arg.contractSigned,
		maxStudents: arg.maxStudents,
		notes: arg.notes,
	};
	const locationData = {
		address: arg.address,
		city: arg.city,
		zipcode: arg.zipcode,
		companyId: arg.companyId,
	};
	const requests = [axiosPrivate.put(`/company/${arg.companyId}`, companyData)];

	if (arg.locationId === '0') {
		// create location
		requests.push(axiosPrivate.post('/companylocation', locationData));
	} else {
		requests.push(axiosPrivate.put(`/companylocation/${arg.locationId}`, locationData));
	}

	const response = await Promise.all(requests);
	return response.data;
});

export const companyDelete = createAsyncThunk('company/delete', async arg => {
	const response = await axiosPrivate.delete(`/company/${arg.id}`);
	return response.data;
});
