import classes from './MobileNavigation.module.scss';
import HeartIcon from '../../public/icons/heart.svg';
import BasketIcon from '../../public/icons/basket.svg';
import UserIcon from '../../public/icons/user.svg';
import { useAppSelector } from '../../hooks/redux';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowsSize';


const MobileNavigation = () => {
	const { items } = useAppSelector(state => state.basket)
	const { items: likeItems } = useAppSelector(state => state.likeList)
	const router = useRouter();
	const [isReady, setIsReady] = useState(false);
	const winSize = useWindowSize()

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setIsReady(true)
		} else {
			setIsReady(false)
		}
	}, []);

	return (
		<>
			{
				winSize.width >= 600 &&
				<div className={classes.MobileNavigation}>
					<div onClick={() => router.push("/favorites")}>
						{
							isReady && likeItems.length > 0 &&
							<span>{likeItems.length}</span>
						}
						<HeartIcon className={classes.HeartIcon} />
					</div>
					<div onClick={() => router.push("/basket")}>
						{
							isReady && items.length > 0 &&
							<span>{items.length}</span>
						}
						<BasketIcon className={classes.BasketIcon} />
					</div>
					<div>
						<UserIcon className={classes.UserIcon} />
					</div>
				</div>
			}
		</>
	);
};

export default MobileNavigation;
