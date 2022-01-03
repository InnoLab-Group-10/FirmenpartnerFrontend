import { createAsyncThunk } from '@reduxjs/toolkit';

export const newCompany = createAsyncThunk('company', async arg => {
	const { 
        companyName, 
        contactPerson, 
        email, 
        phone, 
        street, 
        houseNumber, 
        postcode, 
        city,
        studentsPerYear, 
        notes } = arg;
	const response = await fetch('http://toadsworth.ddns.net:5000/api/company', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
            companyName, 
            contactPerson, 
            email, 
            phone, 
            street, 
            houseNumber, 
            postcode, 
            city, 
            studentsPerYear, 
            notes,
		}),
	});
	const data = await response.json();
	return data;
});

export const companyGetAll = createAsyncThunk('company', async arg => {
	const { token } = arg;
    //fetcht das alle companies oder nur eine? Brauchen wir eine Funktion die nur eine einzige Company fetcht?
	const response = await fetch('http://toadsworth.ddns.net:5000/api/company', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
	});
	const data = await response.json();
	return data;
});