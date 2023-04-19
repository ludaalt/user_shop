import React, { FC, useState, useEffect } from "react";

import {
  IProductItem,
  IProductItemInCart,
  InitProductsContextType,
} from "../types/types";

export const ProductsContext = React.createContext<InitProductsContextType>({});

interface Props {
  children?: React.ReactNode;
}

const ProductsProvider: FC<Props> = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState<IProductItemInCart[]>(
    []
  );
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const buyProduct = (
    product: IProductItem | IProductItemInCart,
    count: number
  ) => {
    const productInCart = productsInCart.find((item) => item.id === product.id);

    if (productInCart) {
      setProductsInCart((prev) =>
        prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + count } : item
        )
      );
    } else {
      setProductsInCart((prev) => [...prev, { ...product, count: count }]);
    }
  };

  useEffect(() => {
    setTotalPrice(
      +productsInCart
        .reduce(
          (acc, item) => acc + item["regular_price"]["value"] * item.count,
          0
        )
        .toFixed(2)
    );
  }, [productsInCart]);

  return (
    <ProductsContext.Provider
      value={{ buyProduct, productsInCart, totalPrice }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
