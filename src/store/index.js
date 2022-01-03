import { configureStore } from '@reduxjs/toolkit';

import sessionReducer from './session-slice';
import userReducer from './user-slice';
import companyReducer from './company-slice';

const store = configureStore({
	reducer: { session: sessionReducer, user: userReducer, company: companyReducer },
});

export default store;
