import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
};

const horsesSlice = createSlice({
	name: 'horses',
	initialState,
	reducers: {
		addData: (state, action) => {
			state.data = action.payload;
		},
		deleteData: (state, action) => {
			state.data = action.payload;
		},
	},
});

const { actions, reducer } = horsesSlice;

export default reducer;
export const { addData, deleteData } = actions;
