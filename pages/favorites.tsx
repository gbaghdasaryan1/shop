import React from "react";
import Container from '../layouts/Container';
import MainLayout from '../layouts/Main';
import LikeListComponent from '../PageComponents/LikeList';

const Favorites = () => {
  return <div>
    <MainLayout>
      <Container>

        <LikeListComponent />
      </Container>
    </MainLayout>
  </div >;
};

export default Favorites;
