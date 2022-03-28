import { configureStore } from '@reduxjs/toolkit';

import sessionReducer from './session-slice';
import userReducer from './user-slice';
import companyReducer from './company-slice';
import uiReducer from './ui-slice';

// TODO table site (company, user, etc.) only get reloaded when client inserts new user
// maybe periodically call api for new data, or make refresh button
const store = configureStore({
	reducer: {
		session: sessionReducer,
		user: userReducer,
		company: companyReducer,
		ui: uiReducer,
	},
});

export default store;
