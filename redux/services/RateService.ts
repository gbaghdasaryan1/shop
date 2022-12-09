import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API_URL } from '../../common/env';
import { API } from '../../Helpers/api';



export const rateAPI = createApi({
	reducerPath: "rateAPI",
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (build) => ({
		fetchAllUsers: build.query<number, string>({
			query: (currency: string) => ({
				url: API.configuration.getRate + currency
			})
		})
	})
});
