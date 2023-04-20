import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ProductsContext } from "../context/context";
import { ProductsContextType } from "../types/types";

import Button from "../components/Button";
import SendingForm from "../components/SendingForm";
import Modal from "../components/Modal";

const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  margin-right: 30px;
`;

const StyledTable = styled.table`
  margin-bottom: 50px;

  td {
    text-align: center;
    border: 1px solid #333;
    padding: 10px 40px;

    @media (max-width: 700px) {
      padding: 8px 10px;
    }

    button {
      padding: 5px;
      border: 1px solid;
      border-radius: 50%;
      margin: 10px;

      @media (max-width: 700px) {
        border: 2px solid black;
        display: block;
      }
    }
  }
`;

const StyledCart = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
  align-items: flex-start;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: auto;
  }
`;

const StyledPrice = styled.p`
  font-size: 30px;
  margin-bottom: 70px;

  @media (max-width: 1100px) {
    margin-bottom: 30px;
  }
`;

const CartPage = () => {
  const { productsInCart, totalPrice, buyProduct } = useContext(
    ProductsContext
  ) as ProductsContextType;

  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <StyledCart>
      {isModalShown && <Modal setIsModalShown={setIsModalShown} />}
      <StyledLink to={"/products"}>
        <Button>К списку товаров</Button>
      </StyledLink>

      <StyledTable>
        <tbody>
          {productsInCart.map(
            (item, index) =>
              item.count > 0 && (
                <tr key={`${item.id} -- ${index}`}>
                  <td>
                    <img src={item.image} alt={item.title} height={100} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item["regular_price"]["value"]}</td>
                  <td>
                    <button onClick={() => buyProduct(item, 1)}>+1</button>
                    {item.count}
                    <button
                      disabled={item.count === 0}
                      onClick={() => buyProduct(item, -1)}
                    >
                      -1
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </StyledTable>

      <div style={{ fontSize: "20px" }}>
        Всего к оплате:
        <br />
        <StyledPrice>{totalPrice}</StyledPrice>
        <SendingForm
          setIsModalShown={setIsModalShown}
          productsInCart={productsInCart}
        />
      </div>
    </StyledCart>
  );
};

export default CartPage;
