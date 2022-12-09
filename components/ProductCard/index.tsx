/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import classes from "./ProductCard.module.scss";
import ZoomIcon from '../../public/icons/zoom.svg';
import BasketIcon from '../../public/icons/basket.svg';
import HeartIcon from '../../public/icons/heart.svg';
import { ProductCardProps } from './ProductCard.props';
import { createShortName } from './helpers';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { basketSlice } from '../../redux/reducers/basket/basketSlice';
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';
import { likeListSlice } from '../../redux/reducers/like-list/likeList';
import { SnackbarOrigin } from '@mui/material';
import { rateAPI } from '../../redux/services/RateService';
import Spinner from '../Spinner';

export interface State extends SnackbarOrigin {
  open: boolean;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const { addBasketItem, removeBasketItem } = basketSlice.actions;
  const { addLikeListItem, removeLikeListItem } = likeListSlice.actions;
  const { selected, rate } = useAppSelector(state => state.currency);
  const [onBasket, setOnBasket] = useState(false);
  const [onLike, setOnLike] = useState(false);
  const router = useRouter();

  const price = (data.price * rate).toFixed();

  const removeFromBasket = () => {
    dispatch(removeBasketItem(data));
  };
  const onAddBasket = () => {
    dispatch(addBasketItem(data));
    setOnBasket(true);
  };
  const onAddLikeList = () => {
    dispatch(addLikeListItem(data));
    setOnLike(true);

  };
  const removeFromLikeList = () => {
    dispatch(removeLikeListItem(data));
  };




  return <>

    <div className={classes.ProductCard}>
      <div className={classes.ProductImg}>
        <div className={classes.Image} style={{ backgroundImage: `url(${data.image})` }}></div>
        <div className={classes.Tools}>

          {
            !router.pathname.includes("favorites") ?
              <span onClick={onAddLikeList} className={`${onLike && classes.LikeActive}`}>
                <HeartIcon />
              </span> :
              <span onClick={removeFromLikeList}>
                <CloseIcon />
              </span>
          }
          {
            !router.pathname.includes("basket") ? <span onClick={onAddBasket} className={`${onBasket && classes.BasketActive}`}>
              <BasketIcon />
            </span> :
              <span onClick={removeFromBasket}>
                <CloseIcon />
              </span>
          }

          <span>
            <ZoomIcon />
          </span>
        </div>
      </div>

      <p className={classes.Price}>{price} {selected}</p>
      <p className={classes.Name}>{createShortName(data.name)}</p>
    </div>
  </>;
};

export default ProductCard;
