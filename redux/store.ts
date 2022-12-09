import { rateAPI } from './services/RateService';
import { userAPI } from './services/UserService';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { currencyReduser } from './reducers/currency/currencySlice';
import { basketReduser } from './reducers/basket/basketSlice';
import { likeListReduser } from './reducers/like-list/likeList';
import { categoryAPI } from './services/CategoryService';

const rootReducer = combineReducers({
  currency: currencyReduser,
  basket: basketReduser,
  likeList: likeListReduser,
  [userAPI.reducerPath]: userAPI.reducer,
  [categoryAPI.reducerPath]: categoryAPI.reducer,
  [rateAPI.reducerPath]: rateAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware, rateAPI.middleware, categoryAPI.middleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
