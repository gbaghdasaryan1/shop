import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from '../../common/env'
import { CategoryFirstLevelType } from '../../common/interfaces'
import { API } from '../../Helpers/api'



export const categoryAPI = createApi({
	reducerPath: "categoryAPI",
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (build) => ({
		fetchAllUsers: build.query<CategoryFirstLevelType[], string>({
			query: () => ({
				url: API.configuration.getCategories
			})
		})
	})
})
