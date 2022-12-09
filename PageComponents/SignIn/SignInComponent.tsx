import { useEffect, useState } from 'react';
import Link from 'next/link';
import React from 'react';
import classes from './SignIn.module.scss';
import { useRouter } from 'next/router';
import { signInRequest, signUpRequest } from '../../Helpers/requests/auth';

interface ISignUpState {
	email: string;
	password: string;
	isSeller: boolean;
}

const SignInComponent = () => {
	const errors = {
		invalidFields: 'Invalid Username or Password',
		network_error: 'Something went wrong'
	};
	const router = useRouter();
	const [type, setType] = useState<boolean>(false);
	const [signupState, setSignUpState] = useState<ISignUpState>({
		email: '',
		password: '',
		isSeller: false
	});
	const [hasError,setHasError] = useState<boolean>(false);
	const [errorMsg, setErrorMsg] = useState<string>(errors.invalidFields)
	const emailValidationRgx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	


	useEffect(() => {
		if (router.query?.type === 'signin') setType(true);
			
	}, [router]);

	const handleSign = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault()
		if (!emailValidationRgx.test(signupState.email)) {
			setHasError(true);
			setErrorMsg(errors.invalidFields)
			return;
		};
		if(signupState.email.trim() === '' || signupState.password.trim() === '') {
			setHasError(true);
			setErrorMsg(errors.invalidFields)
			return;
		};
		
		try {
			if (type) await signInRequest(signupState);
			else await signUpRequest(signupState);
			setHasError(false)
		} catch (error) {
			setHasError(true)
			setErrorMsg(errors.network_error)
		}

	};

	const handleInputsChane = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inpName = event.target.name;
		const inpValue = event.target.value;
		if (event.target.type === 'checkbox') {
			setSignUpState((prev) => {
				return {
					...prev,
					isSeller: event.target.checked
				};
			});
		} else {
			setSignUpState((prev) => {
				return {
					...prev,
					[inpName]: inpValue
				};
			});
		}
	};
	return (
		<div className={classes.Wrap}>

			<form className={classes.SignIn}>
				<h2>
					{type ? 'Sign in' : 'Sign up'}
				</h2>
				<input
					type="email"
					name='email'
					placeholder='Email'
					onChange={handleInputsChane} />
				<input
					type="password"
					name='password'
					placeholder='Password'
					onChange={handleInputsChane} />
					<p className={classes.ErrorMessage}>
					{hasError && errorMsg}
					</p>

				<button onClick={handleSign}>Sign in</button>
				<label>
					{`I'm a seller`}
					<input type="checkbox" name='seller' onChange={handleInputsChane} />
				</label>

				<Link href={'/signup'}>
					{type ? 'Create account' : 'Already have an account'}
					{/* Create account */}
				</Link>
			</form>
		</div>
	);
};

export default SignInComponent;
