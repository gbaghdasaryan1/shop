import React from 'react';
import Slider from "react-slick";
import ProductCard from '../../ProductCard';
import Card from '../Card';
import { SliderProps } from './Slider.props';
import classes from './Slider.module.scss';

const SectionSlider2 = ({ data, type }: SliderProps) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 300,
		touchThreshold: 100,
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0,
		adaptiveHeight: false,
		// variableWidth: true,
		arrows: false,
		// useCSS: true,
		className: "Slider",
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
					infinite: true,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					variableWidth: true,
					slidesToScroll: 2,
					initialSlide: 0,
					centerMode: false
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: false
				}
			}
		]
	};
	return (
		<div>
			<Slider {...settings}>
				{
					type === "Product" && data?.map((item, index) => {
						return <ProductCard key={index} data={item} />
					})
				}
			</Slider>
		</div>
	);
};

export default SectionSlider2;
