import React from "react";
import Container from '../../layouts/Container';
import MainLayout from '../../layouts/Main';
import CategoryPageComponent from '../../PageComponents/CategoryPage';

const Category = () => {
  return <MainLayout>
    <Container>
      <CategoryPageComponent />
    </Container>
  </MainLayout>;
};

export default Category;
