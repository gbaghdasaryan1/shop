import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_LIKE_LIST_KEY } from '../../../common/constants';
import { IProductMock } from '../../../common/data';
import { LikeListSliceState } from './types';



const initialState: LikeListSliceState = {
	items: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIKE_LIST_KEY) ?? "[]") : "[]",
};



export const likeListSlice = createSlice({
	name: "like-list",
	initialState,
	reducers: {
		addLikeListItem: (state, action: PayloadAction<IProductMock>) => {
			if (state.items.find(el => el.id === action.payload.id)) return;
				state.items.push(action.payload);
			localStorage.setItem(LOCAL_STORAGE_LIKE_LIST_KEY, JSON.stringify(state.items));

		},
		removeLikeListItem: (state, action: PayloadAction<IProductMock>) => {
			state.items = state.items.filter(
				(f) => f.id !== action.payload.id
			);

			localStorage.setItem(LOCAL_STORAGE_LIKE_LIST_KEY, JSON.stringify(state.items));
		},
	},
});

export const likeListAction = likeListSlice.actions;
export const likeListReduser = likeListSlice.reducer;
