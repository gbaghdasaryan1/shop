import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from '../../common/env'

export const userAPI = createApi({
	reducerPath: "userAPI",
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (build) => ({
		fetchAllUsers: build.query({
			query: () => ({
				url: ""
			})
		})
	})
})
