import "../styles/globals.scss";
import { Provider } from "react-redux";
import { setupStore } from "../redux/store";
import type { AppProps } from "next/app";
import Head from 'next/head';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../i18n"


import { useEffect, useState } from 'react';
const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  }, []);
  return (
    <>
      {
        isReady && <>
          <Head>

            <link rel="icon" href="/logo.svg" />
          </Head>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider></>
      }

    </>
  );
}

export default MyApp;
