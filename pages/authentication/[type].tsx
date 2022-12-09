import React from 'react';
import Container from '../../layouts/Container';
import MainLayout from '../../layouts/Main';
import SignInComponent from '../../PageComponents/SignIn/SignInComponent';

const Login = () => {
	return (
		<div>
			<MainLayout>
				<Container>
					<SignInComponent />
				</Container>
			</MainLayout>
		</div>
	);
};

export default Login;
