import React, { FC, useState } from "react";

import { ProductsContextType, IProductItem } from "../types/types";

export const ProductsContext = React.createContext<ProductsContextType | null>(
  null
);

interface Props {
  children?: React.ReactNode | any;
}

const ProductsProvider: FC<Props> = ({ children }) => {
  return (
    <ProductsContext.Provider value={{}}>{children}</ProductsContext.Provider>
  );
};

export default ProductsProvider;
