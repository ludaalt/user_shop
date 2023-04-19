import { FC, useState, useContext, useEffect } from "react";
import styled from "styled-components";

import Button from "./Button";
import { IProductItem, ProductsContextType } from "../types/types";

import { ProductsContext } from "../context/context";

type Props = {
  item: IProductItem;
};

const StyledButton = styled(Button)<{ countInCart: number }>`
  margin: 10px 0;

  width: ${(props) => (props.countInCart === 0 ? `100%` : `auto`)};
  max-width: ${(props) => (props.countInCart === 0 ? `auto` : `65px`)};
  cursor: ${(props) => (props.countInCart !== 0 ? `auto` : `pointer`)};
`;

const ProductItem = styled.div`
  border: 3px solid pink;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #e1e1e4;
  border-radius: 20px;

  text-transform: lowercase;
  font-size: 17px;
  font-weight: bold;
`;

const ChangeCountButton = styled.button<{ countInCart: number }>`
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
  text-align: center;
  padding: 0 2px;

  display: ${(props) => (props.countInCart === 0 ? `none` : `block`)};
`;

const Product: FC<Props> = ({ item }) => {
  const [countInCart, setCountInCart] = useState<number>(0);

  const { buyProduct } = useContext(ProductsContext) as ProductsContextType;

  useEffect(() => {
    if (countInCart > 0) buyProduct(item, countInCart);
  }, [countInCart]);

  return (
    <ProductItem>
      <img src={item.image} alt={item.title} height={300} />
      {item.title}
      <br />
      Brand: {item.brand}
      <p style={{ fontSize: "22px" }}>
        {item["regular_price"]["value"]}{" "}
        <span style={{ textTransform: "uppercase" }}>
          {item["regular_price"]["currency"]}
        </span>
      </p>
      <div
        style={{
          minWidth: "110px",
          position: "relative",
          padding: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ChangeCountButton
          style={{ left: "0" }}
          countInCart={countInCart}
          onClick={() => setCountInCart((prev) => prev + 1)}
        >
          +1
        </ChangeCountButton>
        <StyledButton
          countInCart={countInCart}
          onClick={() =>
            countInCart === 0 ? setCountInCart((prev) => prev + 1) : null
          }
        >
          {countInCart === 0 ? `Купить` : countInCart}
        </StyledButton>
        <ChangeCountButton
          style={{ right: "0" }}
          countInCart={countInCart}
          onClick={() => setCountInCart((prev) => prev - 1)}
        >
          -1
        </ChangeCountButton>
      </div>
    </ProductItem>
  );
};

export default Product;
