import { createSlice } from '@reduxjs/toolkit';
import { companyGetAll, newCompany } from './company-thunks';

const companySlice = createSlice({
    name: 'company',
    initialState: {
        companies: [],
    },
    extraReducers: {
        [companyGetAll.fulfilled]: (state, action) => {
			state.companies = action.payload.companies;
		},
    },
});

export const companyActions = companySlice.actions;
export default companySlice.reducer;