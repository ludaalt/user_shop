import styled from "styled-components";

import Button from "./Button";

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

  :hover {
    transform: scale(1.01);
  }
`;

const Product = ({ item }: any) => {
  return (
    <ProductItem>
      <img src={item.image} alt={item.title} height={300} />
      {item.title}
      <br />
      Brand: {item.brand}
      <Button>Купить</Button>
    </ProductItem>
  );
};

export default Product;
