import type { NextPage } from "next";
import { products } from '../common/data';
import BrandList from '../components/BrandList';
import Section from '../components/Marketing/Sectoin';
import BasicTabs from '../components/Marketing/Tabs';
import Poster from "../components/Posters";
import Container from '../layouts/Container';
import MainLayout from '../layouts/Main';
import '../i18n'
import { API } from '../Helpers/api';
import axios from 'axios';
import Head from 'next/head';

const Home: NextPage = ({ data }: any) => {

  return (
    <div >

      <Head>
        <title>abranq.am</title>
      </Head>
      <MainLayout>
      <Container dipsplay='block'>
        <Poster />
          <Section title='Վերջին նորույթները' data={products} type="Product" />
        <Section title='Ամենաշատ վաճառվածները' data={products} type="Product" />
        <Section title='Ամենամեծ զեղչերը' data={products} type="Card" />
        <BasicTabs />
        <Section title='Դիտված ապրանքներ' data={products} type="Product" />
        <Section title='Նմանատիպ ապրանքներ' data={products} type="Product" />
        <BrandList />
      </Container>


      </MainLayout>
    </div>
  );
};
export default Home;


// export async function getStaticProps() {
//   const response = await axios.get(API.configuration.getCategories);
//   const data = response.data;
//   return {
//     props: {
//       data
//     }
//   }
// }
