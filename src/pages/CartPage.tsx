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
`;

const StyledTable = styled.table`
  margin: 0 30px;

  td {
    border: 1px solid #333;
    padding: 10px 45px;

    button {
      padding: 5px;
      border: 1px solid;
      border-radius: 50%;
      margin: 10px;
    }
  }
`;

const CartPage = () => {
  const { productsInCart, totalPrice, buyProduct } = useContext(
    ProductsContext
  ) as ProductsContextType;

  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "20px",
        alignItems: "flex-start",
      }}
    >
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
        <p style={{ fontSize: "30px", marginBottom: "70px" }}>{totalPrice}</p>
        <SendingForm
          setIsModalShown={setIsModalShown}
          productsInCart={productsInCart}
        />
      </div>
    </div>
  );
};

export default CartPage;
