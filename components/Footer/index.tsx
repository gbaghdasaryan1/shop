import classes from "./Footer.module.scss";
import Facebook from '../../public/icons/facebook.svg';
import Instagram from '../../public/icons/Instagram.svg'
import Container from '../../layouts/Container';
const Footer = () => {
  return <footer className={classes.Footer}>

    <div>

      <ul>
        <p>Գնողի համար</p>
        <a href='#'>Վճարման տեսակները</a>
        <a href='#'>Հետվերադարձ և փոխանակում</a>
        <a href='#'>Առաքման սակագներ և պայմաններ</a>
        <a href='#'>Վաճառքի կանոններ</a>
        <a href='#'>Հաճախ տրվող հարցեր</a>
      </ul>
      <ul>
        <p>Մեր մասին</p>
        <a href='#'>Ընկերությունը</a>
        <a href='#'>Մեր մասին</a>
        <a href='#'>Կապվեք մեզ հետ</a>
        <a href='#'>Մենք սոցցանցերում</a>
      </ul>

      <div className={classes.SocialMedia}>
        <a href="#">

          <Facebook />
        </a>
        <a href="#">

          <Instagram />
        </a>
      </div>

    </div>
  </footer>;
};

export default Footer;
