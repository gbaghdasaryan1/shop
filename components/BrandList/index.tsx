import React from 'react';
import classes from './BrandList.module.scss';

const BrandList = () => {
	const arr = Array(10).fill("LOGO")

	return (
		<div>
			<h2>Brands list</h2>
			<div className={classes.BrandList}>
				{
					arr.map((item, idx) => {
						return (<div key={idx}>{item}</div>)
					})
				}
			</div>
		</div>
	);
};

export default BrandList;
