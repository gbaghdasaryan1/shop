import React from 'react';
import Logo from '../../public/logo.svg';
import classes from './Bottombar.module.scss';

const Bottombar = () => {
	return (
		<div className={classes.Bottombar}>
			<div>
				<Logo className={classes.Logo} />
				<span>© Copyright Am-zone. All Rights Reserved</span>
				<span><a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
			</div>
		</div>
	);
};

export default Bottombar;
