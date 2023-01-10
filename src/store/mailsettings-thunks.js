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
		const { mailsettings, file } = getState();
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
			const imageRequests = [];
			imageRequests.push(axiosPrivate.post('/file', data));
			// add delete if file exists
			if (file.files.find(entry => entry.id === mailsettings.settings.header_logo)) {
				imageRequests.push(
					axiosPrivate.delete(`/file/${mailsettings.settings.header_logo}`)
				);
			}
			const response = await Promise.all(imageRequests);
			requests.push(
				axiosPrivate.post(`/mailsettings/header_logo`, { value: response[0].data.id })
			);
		}
		if (arg.header_bg_image && arg.header_bg_image.length) {
			// upload new file, delete old file and wait for new id
			const data = new FormData();
			data.append('file', arg.header_bg_image[0]);
			const imageRequests = [];
			imageRequests.push(axiosPrivate.post('/file', data));
			// add delete if file exists
			if (file.files.find(entry => entry.id === mailsettings.settings.header_bg_image)) {
				imageRequests.push(
					axiosPrivate.delete(`/file/${mailsettings.settings.header_bg_image}`)
				);
			}
			const response = await Promise.all(imageRequests);
			requests.push(
				axiosPrivate.post(`/mailsettings/header_bg_image`, { value: response[0].data.id })
			);
		}

		const response = await Promise.all(requests);
		return response.data;
	}
);

export const mailsettingsUpdateBody = createAsyncThunk(
	'mailsettings/updateBody',
	async (arg, { getState }) => {
		const { mailsettings } = getState();
		const requests = [];
		if (arg.body_bg_color !== mailsettings.settings.body_bg_color) {
			requests.push(
				axiosPrivate.post(`/mailsettings/body_bg_color`, { value: arg.body_bg_color })
			);
		}
		if (arg.body_color !== mailsettings.settings.body_color) {
			requests.push(
				axiosPrivate.post(`/mailsettings/body_color`, { value: arg.body_color })
			);
		}

		const response = await Promise.all(requests);
		return response.data;
	}
);

export const mailsettingsUpdateFooter = createAsyncThunk(
	'mailsettings/updateFooter',
	async (arg, { getState }) => {
		const { mailsettings } = getState();
		const requests = [];
		if (arg.footer_bg_color !== mailsettings.settings.footer_bg_color) {
			requests.push(
				axiosPrivate.post(`/mailsettings/footer_bg_color`, { value: arg.footer_bg_color })
			);
		}
		if (arg.footer_color !== mailsettings.settings.footer_color) {
			requests.push(
				axiosPrivate.post(`/mailsettings/footer_color`, { value: arg.footer_color })
			);
		}
		if (arg.footer_text !== mailsettings.settings.footer_text) {
			requests.push(
				axiosPrivate.post(`/mailsettings/footer_text`, { value: arg.footer_text })
			);
		}

		const response = await Promise.all(requests);
		return response.data;
	}
);

export const mailsettingsUpdateBackground = createAsyncThunk(
	'mailsettings/updateBackground',
	async (arg, { getState }) => {
		const { mailsettings } = getState();
		// not necessary, but nice to have if it has to be extended
		const requests = [];
		if (arg.mail_bg_color !== mailsettings.settings.mail_bg_color) {
			requests.push(
				axiosPrivate.post(`/mailsettings/mail_bg_color`, { value: arg.mail_bg_color })
			);
		}

		const response = await Promise.all(requests);
		return response.data;
	}
);
