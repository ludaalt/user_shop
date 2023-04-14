import { useState, useEffect } from "react";
import styled from "styled-components";

import Aside from "./components/Aside";
import ProductList from "./components/ProductList";
import { products } from "./data/products";

const AppContainer = styled.div`
  padding: 20px 5px;

  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const App = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredBrands, setFilteredBrands] = useState<any>([]);

  console.log(isFiltered);

  const [visibleProducts, setVisibleProducts] = useState<any>(products);

  const showFiltered = () => {
    // console.log(999);
    if (filteredBrands.length > 0) {
      // console.log(111);
      setVisibleProducts((prev: any) =>
        products.filter((item: any) => filteredBrands.includes(item.brand))
      );
    }
    if (filteredBrands.length === 0) {
      // console.log(333);
      setVisibleProducts(products);
    }
  };

  useEffect(() => {
    showFiltered();
  }, [isFiltered]);

  return (
    <AppContainer>
      <Aside {...{ setFilteredBrands, setIsFiltered, showFiltered }} />
      <ProductList
        filteredBrands={filteredBrands}
        isFiltered={isFiltered}
        visibleProducts={visibleProducts}
      />
    </AppContainer>
  );
};

export default App;
