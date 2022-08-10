import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [
		{
			name: 'Princess Diana',
			distance: 0,
		},
		{
			name: 'Cricket',
			distance: 0,
		},
		{
			name: 'Rebel',
			distance: 0,
		},
		{
			name: 'Lucy',
			distance: 0,
		},
		{
			name: 'Lacey',
			distance: 0,
		},
		{
			name: 'Ginger',
			distance: 0,
		},
	],
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
