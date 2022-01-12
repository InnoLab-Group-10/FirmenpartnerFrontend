import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const userGetCurrent = createAsyncThunk('user/current', async () => {
	const response = await axiosPrivate('/user/current');
	return response.data;
});
