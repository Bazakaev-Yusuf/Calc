import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { equel } from '../../utils/calculated';
import { T_Calc_State } from './types';

const initialState: T_Calc_State = {
	story: '',
	simbolCheck: false,
	dotCheck: false,
	cart: [],
	numbers: [],
	simbols: [],
	equel: 0,
};

const calcSlice = createSlice({
	name: 'calc',
	initialState,
	reducers: {
		addNumber: (state, { payload }: PayloadAction<number | string>) => {
			if (payload === '.' && !state.dotCheck) {
				state.cart.push(payload);
				state.simbolCheck = false;
				state.dotCheck = true;
				state.story += payload;
			} else if (payload !== '.') {
				state.simbolCheck = false;
				state.cart.push(payload);
				state.story += payload;
			}
		},
		addSimbol: (state, { payload }: PayloadAction<string>) => {
			if (payload === 'C') {
				state.story = '';
				state.cart = [];
				state.equel = 0;
				state.dotCheck = false;
				state.simbolCheck = false;
				state.simbols = [];
				state.numbers = [];
			} else if (payload === '<=' && state.story) {
				state.story = state.story.slice(0, state.story.length - 1);
				state.cart.pop();
			} else if (state.numbers && payload === '%') {
				state.numbers.push(
					(state.numbers[state.numbers.length - 1] / 100) *
						Number(state.cart.join('')),
				);
				state.cart = [];
				state.simbols.push(payload);
				state.story += payload;
				state.dotCheck = true;
			} else if (
				!state.simbolCheck &&
				payload !== '%' &&
				payload !== 'C' &&
				payload !== '<='
			) {
				state.numbers.push(Number(state.cart.join('')));
				state.cart = [];
				state.simbols.push(payload);
				state.simbolCheck = true;
				state.story += payload;
				state.dotCheck = false;
			}
		},
		equelClick: (state) => {
			state.numbers.push(Number(state.cart.join('')));
			state.equel = equel(state.numbers, state.simbols);
			state.cart = [];
			state.simbolCheck = false;
			state.dotCheck = false;
			state.numbers = [];
			state.simbols = [];
		},
	},
});

export const { addNumber, addSimbol, equelClick } = calcSlice.actions;

export default calcSlice.reducer;
