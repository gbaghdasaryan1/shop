import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { IProductMock } from '../../common/data';
import { useAppSelector } from '../../hooks/redux';
import usePagination from '../../hooks/usePagination';
import ProductCard from '../ProductCard';
import classes from "./ProductList.module.scss";
import { ProductListProps } from './ProductList.props';

const ProductList = ({ data }: ProductListProps) => {

  const [state, setState] = useState([]);
  const observer: any = useRef(null)
  const lastElement = useRef(null)
  const [isReady, setIsReady] = useState(false);



  useEffect(() => {
    if (state.length > 0) {
      const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        if (entries[0].isIntersecting) {
        }
      }
      observer.current = new IntersectionObserver(callback);
      observer.current.observe(lastElement.current)
    }

  }, [state.length]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsReady(true)
    } else {
      setIsReady(false)
    }
  }, []);

  return (
    <div className={classes.Wrapper}>

      <div className={classes.ProductList}>
        {
          data.length > 0 && isReady ? data?.map((item: IProductMock, index) => {
            return (
              <ProductCard key={index} data={item} />
            )
          }) :
            <p>empty</p>
        }

      </div>
      {/* <div className={classes.HidenDiv} ref={lastElement}>asdfsdf</div> */}
      {/* <div className={classes.Pagination}>

        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange} />
      </div> */}
    </div>)
};

export default ProductList;
