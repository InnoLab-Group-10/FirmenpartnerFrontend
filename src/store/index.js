import { configureStore } from '@reduxjs/toolkit';

import sessionReducer from './session-slice';
import userReducer from './user-slice';
import companyReducer from './company-slice';
import studentReducer from './student-slice';
import uiReducer from './ui-slice';

const store = configureStore({
	reducer: {
		session: sessionReducer,
		user: userReducer,
		company: companyReducer,
		student: studentReducer,
		ui: uiReducer,
	},
});

export default store;
