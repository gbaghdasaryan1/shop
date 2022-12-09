import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_BASKET_KEY } from '../../../common/constants';
import { IProductMock } from '../../../common/data';
import { BasketSliceState } from './types';


const initialState: BasketSliceState = {
	items: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_BASKET_KEY) ?? "[]") : "[]",
};



export const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		addBasketItem: (state, action: PayloadAction<IProductMock>) => {
			if (state.items.find(el => el.id === action.payload.id)) return;

			state.items.push(action.payload);
			localStorage.setItem(LOCAL_STORAGE_BASKET_KEY, JSON.stringify(state.items));
		},
		removeBasketItem: (state, action: PayloadAction<IProductMock>) => {
			state.items = state.items.filter(
				(f) => f.id !== action.payload.id
			);

			localStorage.setItem(LOCAL_STORAGE_BASKET_KEY, JSON.stringify(state.items));
		},
	},
});

export const basketAction = basketSlice.actions;
export const basketReduser = basketSlice.reducer;
