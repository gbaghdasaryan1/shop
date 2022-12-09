import React from 'react';
import classes from './Poster.module.scss';
import Poster1 from '../../public/posters/poster1.webp'
import Image from 'next/image';


const PosterItem = () => {
	return (
		<div
			className={classes.PosterItem}
		// style={{ backgroundImage: `url(/posters/poster1.webp)` }}
		>
			<Image src={Poster1} alt="Poster" layout='responsive' className={classes.PosterImg} height="500px" objectFit="fill" />
		</div>
	);
};

export default PosterItem;
