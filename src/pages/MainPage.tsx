import { useState } from "react";
import styled from "styled-components";

import Aside from "../components/Aside";
import ProductList from "../components/ProductList";
import { products } from "../data/products";
import { IProductItem } from "../types/types";

const AppContainer = styled.div`
  padding: 20px 5px;

  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const App = () => {
  const [filteredBrands, setFilteredBrands] = useState<number[]>([]);

  const [visibleProducts, setVisibleProducts] =
    useState<IProductItem[]>(products);

  const showFiltered = () => {
    setVisibleProducts(
      products.filter((item: IProductItem) => {
        console.log(typeof item.brand);
        return filteredBrands.includes(item.brand);
      })
    );
  };

  const showProducts = () => {
    setVisibleProducts(products);
    setFilteredBrands((a: number[]) => a.splice(0, a.length));
  };

  return (
    <AppContainer>
      <Aside
        {...{ setFilteredBrands, showFiltered, showProducts, filteredBrands }}
      />
      <ProductList visibleProducts={visibleProducts} />
    </AppContainer>
  );
};

export default App;
