import { FC } from "react";
import styled from "styled-components";

import Product from "./Product";
import { IProductItem } from "../types/types";

type Props = {
  visibleProducts: IProductItem[];
};

const Products = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;

  opacity: 0;
  animation: ani 1s forwards;

  @keyframes ani {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ProductList: FC<Props> = ({ visibleProducts }) => {
  return (
    <Products>
      {visibleProducts.map((item: IProductItem) => (
        <li key={item.id}>
          <Product item={item} />
        </li>
      ))}
    </Products>
  );
};

export default ProductList;
