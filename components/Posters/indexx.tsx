/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import classes from "./Poster.module.scss";
import Slider from "react-slick";
import PosterItem from './PosterItem';
import { SampleArrowProps } from './Poster.props';
import cn from 'classnames'
function SampleNextArrow({ className, style, onClick }: SampleArrowProps) {
  return (
    <div
      className={cn(className, classes.Next)}
      onClick={onClick}
    >
      <img src="/icons/next-arrow.png" alt="asdfasd" className={classes.NextArrow} />
    </div>
  );
}
function SamplePrevArrow({ className, style, onClick }: SampleArrowProps) {
  return (
    <div
      className={cn(className, classes.Prev)}
      onClick={onClick}
    >
      <img src="/icons/prev-arrow.png" alt="asdfasd" className={classes.PrevArrow} />
    </div>
  );
}

export default function App() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (

    <div className={classes.Poster}>
      <Slider {...settings}>
        <PosterItem />
        <PosterItem />
        <PosterItem />
        <PosterItem />
        <PosterItem />
        <PosterItem />
      </Slider>
    </div>
  );
}
