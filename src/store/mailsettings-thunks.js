import { axiosPrivate } from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const mailsettingsGetAll = createAsyncThunk('mailsettings/getAll', async () => {
	const response = await Promise.all([
		axiosPrivate.get('/mailsettings/header_bg_color'),
		axiosPrivate.get('/mailsettings/header_logo'),
		axiosPrivate.get('/mailsettings/header_bg_image'),
		axiosPrivate.get('/mailsettings/body_bg_color'),
		axiosPrivate.get('/mailsettings/body_color'),
		axiosPrivate.get('/mailsettings/footer_bg_color'),
		axiosPrivate.get('/mailsettings/footer_color'),
		axiosPrivate.get('/mailsettings/footer_text'),
		axiosPrivate.get('/mailsettings/mail_bg_color'),
	]);
	return response.map(entry => entry.data);
});

export const mailsettingsUpdateHeader = createAsyncThunk(
	'mailsettings/updateHeader',
	async (arg, { getState }) => {
		const { mailsettings } = getState();
		const requests = [];
		if (arg.header_bg_color !== mailsettings.settings.header_bg_color) {
			requests.push(
				axiosPrivate.post(`/mailsettings/header_bg_color`, { value: arg.header_bg_color })
			);
		}
		if (arg.header_logo && arg.header_logo.length) {
			// upload new file, delete old file and wait for new id
			const data = new FormData();
			data.append('file', arg.header_logo[0]);
			const response = await Promise.all([
				axiosPrivate.post('/file', data),
				axiosPrivate.delete(`/file/${mailsettings.settings.header_logo}`),
			]);
			requests.push(
				axiosPrivate.post(`/mailsettings/header_logo`, { value: response[0].data.id })
			);
		}
		if (arg.header_bg_image && arg.header_bg_image.length) {
			// upload new file, delete old file and wait for new id
			const data = new FormData();
			data.append('file', arg.header_bg_image[0]);
			const response = await Promise.all([
				axiosPrivate.post('/file', data),
				axiosPrivate.delete(`/file/${mailsettings.settings.header_bg_image}`),
			]);
			requests.push(
				axiosPrivate.post(`/mailsettings/header_bg_image`, { value: response[0].data.id })
			);
		}

		const response = await Promise.all(requests);
		return response.data;
	}
);
