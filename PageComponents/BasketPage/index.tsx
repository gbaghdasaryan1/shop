import React from 'react';
import { products } from '../../common/data';
import ProductList from '../../components/ProductList';
import { useAppSelector } from '../../hooks/redux';
import classes from './BasketPageComponent.module.scss';


const BasketPageComponent = () => {
	const { items } = useAppSelector(state => state.basket);
	return (
		<div className={classes.BasketPageComponent}>
			<h1>Basket</h1>
			<ProductList data={items} />
		</div>
	);
};

export default BasketPageComponent;
