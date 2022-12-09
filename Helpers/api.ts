import { API_URL } from '../common/env';

export const API = {
	configuration: {
		//?language=EN,RU,AM
		getCategories: API_URL + '/Configuration/v1/GetCategories',
		//?categoryId={string}
		getSubCategories: API_URL + '/Configuration/v1/GetSubCategories',
		//?id={string}
		getSubCategoriesById: API_URL + '/Configuration/v1/GetSubCategoriesById?id=',
		//?currency={USD,AMD,RUB,IRR}: string
		getRate: API_URL + '/Configuration/v1/GetRate?currency=',
		//?
		getCountries: API_URL + '/Configuration/v1/v1/GetCountries',
		//?countryId={string}
		getCities: API_URL + '/Configuration/v1/GetCities?countryId=USA',
	},
	search: {
		//?  term={string}&skip={number}&limit={number}
		global: API_URL + '/Search/v1/Global',
		//?
		lastSearchedAndSimilarProducts: API_URL + '/Search/v1/LastSearchedAndSimilarProducts',
	},
	beautyAndHealth: {
		//?id={string}
		getNonLive: API_URL + 'BeautyAndHealth/v1/GetNonLive?id=',
		//?skip={number}&limit={number}
		getNonLives: API_URL + 'BeautyAndHealth/v1/GetNonLives',
		search: API_URL + 'BeautyAndHealth/v1/GetNonLive?id=',
	},
	electronics: API_URL + '/Electronics/v1/NewestProducts',

	auth: {
		signIn: API_URL + '/SignIn',
		signUp: API_URL + '/SignUp',
	}
};
