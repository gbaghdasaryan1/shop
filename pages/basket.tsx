import React from "react";
import Container from '../layouts/Container';
import MainLayout from '../layouts/Main';
import BasketPageComponent from '../PageComponents/BasketPage';

const BasketPage = () => {
  return <div>
    <MainLayout>
      <Container>

        <BasketPageComponent />
      </Container>
    </MainLayout>
  </div >;
};

export default BasketPage;


// export async function getStaticProps() {

//   const response = await axios.get();
//   const data = response.data;

//   return {
//     props: {
//       data
//     }
//   }
// }
