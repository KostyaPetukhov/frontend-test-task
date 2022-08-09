import { configureStore } from '@reduxjs/toolkit';

import horses from './reducers/horsesSlice';

const store = configureStore({
	reducer: { horses },
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
