import classes from './SeeAll.module.scss';
import ProductList from '../../components/ProductList';
import { useAppSelector } from '../../hooks/redux';
import { useRouter } from 'next/router';


const SeeAllComponent = () => {
	const { items } = useAppSelector(state => state.basket);
	const router = useRouter();

	return (
		<div className={classes.BasketPageComponent}>
			<h1>{router?.query.query}</h1>
			<ProductList data={items} />
		</div>
	);
};

export default SeeAllComponent;
