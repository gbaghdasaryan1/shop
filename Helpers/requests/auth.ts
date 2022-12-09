import { API } from './../api';
import axios from 'axios';

type AuthRequestDto = {
	email: string;
	password: string;
	isSeller: boolean;
}

export const signInRequest = async (data: AuthRequestDto) => {
	await axios.post(API.auth.signIn, {data})
};
export const signUpRequest = async (data: AuthRequestDto) => {
	await axios.post(API.auth.signUp, { data });
};
