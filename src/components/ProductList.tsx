import { FC, useState, useMemo, useEffect } from "react";
import styled from "styled-components";

import Product from "./Product";
import Pagination from "./Pagination";
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

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

let PageSize = 6;

const ProductList: FC<Props> = ({ visibleProducts }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return visibleProducts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, visibleProducts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [visibleProducts]);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={visibleProducts.length}
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
      <Products>
        {currentTableData.map((item: IProductItem) => (
          <li key={item.id}>
            <Product item={item} />
          </li>
        ))}
      </Products>
    </div>
  );
};

export default ProductList;
