import styled from "styled-components";

import Product from "./Product";
import { products } from "../data/products";

const Products = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

const ProductList = () => {
  return (
    <Products>
      {products.map((item, key) => (
        <li key={item.id}>
          <Product item={item} />
        </li>
      ))}
    </Products>
  );
};

export default ProductList;
