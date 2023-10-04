import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import calcSlice from './calc/slice';

export const store = configureStore({
	reducer: {
		calc: calcSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
