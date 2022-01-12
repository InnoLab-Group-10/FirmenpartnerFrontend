import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const newCompany = createAsyncThunk('company', async arg => {
	// companyName
	// contactPerson
	// email
	// phone
	// street
	// houseNumber
	// postcode
	// city
	// studentsPerYear
	// notes
	const response = await axiosPrivate.post('/company', arg);
	return response.data;
});

export const companyGetAll = createAsyncThunk('company', async arg => {
	const response = await axiosPrivate.get('/company', arg);
	return response.data;
});
