export interface IProductItem {
  id: number;
  title: string;
  brand: number;
  image: string;

  type?: string;

  sku?: string;
  regular_price: {
    currency: string;
    value: number;
  };
}

export interface IProductItemInCart extends IProductItem {
  count: number;
}

export interface IBrand {
  id: number;
  title: string;
}

export type ProductsContextType = {
  buyProduct: (
    item: IProductItem,
    count: number
  ) => React.MouseEventHandler<HTMLButtonElement>;
  productsInCart: IProductItemInCart[];
  totalPrice: number;
};

export type InitProductsContextType = Omit<
  ProductsContextType,
  "productsInCart" | "buyProduct" | "totalPrice"
>;

export interface IOrderData {
  name: string;
  order: IProductItemInCart[];
  tel: string;
}
