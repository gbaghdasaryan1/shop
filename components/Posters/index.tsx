import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import PosterItem from './PosterItem';
import classes from './Poster.module.scss';

import PrevIcon from '../../public/icons/prev-arrow.png';
import NextIcon from '../../public/icons/next-arrow.png';
import Image from 'next/image';


const Poster = () => {
	const swiperRef = useRef<any>();
	return (
		<div className={classes.Poster}>

			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Pagination, Navigation]}
				className="mySwiper"
				navigation={false}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
				onAfterInit={(swiper) => {
					swiperRef.current = swiper;
				}}

			>
				<SwiperSlide>
					<PosterItem />
				</SwiperSlide>
				<SwiperSlide>
					<PosterItem />
				</SwiperSlide>
				<SwiperSlide><PosterItem /></SwiperSlide>
				<SwiperSlide><PosterItem /></SwiperSlide>
				<SwiperSlide><PosterItem /></SwiperSlide>
				<SwiperSlide><PosterItem /></SwiperSlide>
				<SwiperSlide><PosterItem /></SwiperSlide>
				<SwiperSlide><PosterItem /></SwiperSlide>
				<SwiperSlide><PosterItem /></SwiperSlide>
			</Swiper>
			<div className={classes.SliderButtons}>
				<button onClick={() => swiperRef.current?.slidePrev()} >
					<Image src={PrevIcon} alt="Prev" />
				</button>
				<button onClick={() => swiperRef.current?.slideNext()} ><Image src={NextIcon} alt="Next" /></button>
			</div>
		</div>
	);
};

export default Poster;
