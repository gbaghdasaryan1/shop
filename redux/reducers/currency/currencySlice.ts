import { CurrencyState } from './model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_KEY_CURRENCY_KEY } from '../../../common/constants';



const initialState: CurrencyState = {
	selected: typeof window !== 'undefined' && localStorage.getItem(LOCAL_STORAGE_KEY_CURRENCY_KEY) || '',
	open: true,
	rate: 0
}

export const currencySlice = createSlice({
	name: "currency",
	initialState,
	reducers: {
		checkCurrency: (state, action: PayloadAction<string>) => {
			state.selected = action.payload;
			localStorage.setItem(LOCAL_STORAGE_KEY_CURRENCY_KEY, action.payload);

		},

		toggleRate: (state, action: PayloadAction<number>) => {
			state.rate = action.payload;
		},
	}
})

export const currencyAction = currencySlice.actions;
export const currencyReduser = currencySlice.reducer;
