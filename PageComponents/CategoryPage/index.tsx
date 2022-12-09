import { useRouter } from 'next/router';
import React from 'react';
import ProductList from '../../components/ProductList';
import { useAppSelector } from '../../hooks/redux';
import classes from './CategoryPageComponent.module.scss';


const CategoryPageComponent = () => {
	const { items } = useAppSelector(state => state.basket);
	const router = useRouter();
	return (
		<div className={classes.CategoryPageComponent}>
			<h1>{router?.query?.title}</h1>
			<ProductList data={items} />
		</div>
	);
};

export default CategoryPageComponent;
