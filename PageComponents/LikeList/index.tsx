import React from 'react';
import { products } from '../../common/data';
import ProductList from '../../components/ProductList';
import { useAppSelector } from '../../hooks/redux';
import classes from './LikeListComponent.module.scss';


const LikeListComponent = () => {
	const { items } = useAppSelector(state => state.likeList);

	return (
		<div className={classes.LikeListComponent}>
			<h1>LikeList</h1>
			<ProductList data={items} />
		</div>
	);
};

export default LikeListComponent;
