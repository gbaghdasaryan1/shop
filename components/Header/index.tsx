import classes from './Header.module.scss';
import BurgerIcon from '../../assets/icons/burger.svg';
import Logo from '../../public/logo.svg';
import UserIcon from '../../public/icons/user.svg';
import HeartIcon from '../../public/icons/heart.svg';
import BasketIcon from '../../public/icons/basket.svg';
import SearchField from '../SearchField';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { useAppSelector } from '../../hooks/redux';
import { useState, useEffect } from 'react'
import useWindowSize from '../../hooks/useWindowsSize';
import Menu from '../Menu';
import axios from 'axios';
import { API } from '../../Helpers/api';



const Header = () => {

  const [open, setOpen] = useState(false)
  const router = useRouter();
  const { t } = useTranslation('common');
  const { items } = useAppSelector(state => state.basket)
  const [isReady, setIsReady] = useState(false);
  const winSize = useWindowSize();
  const isAuth = localStorage.getItem('TOKEN');

  useEffect(() => {
    // if (typeof window !== 'undefined') {
    //   setIsReady(true)
    // } else {
    //   setIsReady(false)
    // }

    // getRate()
  }, []);

  // const getRate = async () => {
  //   const res = await axios.get(API.configuration.getRate + 'RUB')
  //   const data = res.data;
  // }

  const openMenu = () => {
    setOpen(true);
    document.body.style.overflow = 'hidden';
  }

  console.log(localStorage.getItem('LLK_KEY'));
  


  return (
    <>
      <Menu onClose={() => setOpen(!open)} open={open} />

    <header className={classes.Header}>

        <Logo className={classes.Logo} onClick={() => router.push('/')} />
        <BurgerIcon className={classes.BurgerIcon} onClick={openMenu} />

      <SearchField />
      {
        winSize.width > 600 &&
      <div className={classes.Icons}>
        {
                isAuth ? <UserIcon className={classes.UserIcon} /> : <span onClick={() => router.push('/authentication/signin')}>Sign in</span>
        }
       
              <span onClick={() => router.push('/favorites')}>
          <HeartIcon className={classes.HeartIcon} />
                <p>{t('favorites')}</p>

        </span>
              <span onClick={() => router.push('/basket')}>
              <BasketIcon className={classes.BasketIcon} />
          {
            isReady && items?.length > 0 ? <span>{items?.length}</span> : null
          }

                <p>{t('basket')}</p>
        </span>
      </div>
      }
    </header>
    </>
  );
};

export default Header;
