import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDownIcon from '../../public/icons/arrow-down.svg';
import classNames from 'classnames';
import classes from './Currency.module.scss';
import { currencyAction } from '../../redux/reducers/currency/currencySlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { LOCAL_STORAGE_KEY_CURRENCY_KEY } from '../../common/constants';
import { rateAPI } from '../../redux/services/RateService';



export default function Dropdown() {
	const options = [
		'USD',
		'AMD',
		'RUB',
		'IRR'
	];
	const { selected, rate } = useAppSelector(state => state.currency);
	const [index, setIndex] = useState<string>('USD');
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const dispatch = useAppDispatch();
	const { checkCurrency, toggleRate } = currencyAction;
	const { data } = rateAPI.useFetchAllUsersQuery(selected);


	const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	}, []);
	const handleClose = useCallback((currency: string, idx: number) => {
		setIndex(currency)
		setAnchorEl(null);
		dispatch(checkCurrency(currency));
		data && dispatch(toggleRate(data));
	}, [checkCurrency, data, dispatch, toggleRate]);


	useEffect(() => {
		data && dispatch(toggleRate(data));
	}, [data, dispatch, rate, toggleRate])

	return (
		<>
			<div className={classes.Currency}>
				<Button
					id="basic-button"
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					sx={{ color: "black", display: "flex", gap: '10px', padding: "0", margin: "0" }}
					onClick={handleClick}>
					{selected}
					<ArrowDownIcon />
				</Button>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={() => setAnchorEl(null)}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}>
					{
						options?.map((i, idx) => {
							return <MenuItem key={i} onClick={() => handleClose(i, idx)}>{i}</MenuItem>;
						})
					}
				</Menu>
			</div>
		</>
	);
}
