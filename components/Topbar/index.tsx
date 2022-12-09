import classes from "./Topbar.module.scss";
import InfoIcon from '../../public/icons/info.svg'
import LanguageSelect from '../Lenguage';
import CurrencySelect from '../Currency';
import { useRouter } from 'next/router';

const Topbar = () => {



  return <div className={classes.Topbar}>
    <CurrencySelect />
    <LanguageSelect />
    <InfoIcon className={classes.InfoIcon} />
  </div>;
};

export default Topbar;
