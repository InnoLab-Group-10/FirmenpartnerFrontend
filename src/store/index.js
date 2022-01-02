import { configureStore } from '@reduxjs/toolkit';

import sessionReducer from './session-slice';
import userReducer from './user-slice';

const store = configureStore({
	reducer: { session: sessionReducer, user: userReducer },
});

export default store;
