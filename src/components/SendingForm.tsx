import { FC, useState } from "react";
import styled from "styled-components";

import Button from "./Button";

import { sendOrder } from "../services/sendOrder";
import { IProductItem } from "../types/types";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    display: inline-block;
    margin: 5px 0;
    padding: 5px;
    border-radius: 5px;
  }
`;

type Props = {
  productsInCart: IProductItem[];
};

const SendingForm: FC<Props> = ({ productsInCart }) => {
  const [userData, setUserData] = useState({ name: "", tel: "" });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendOrder({ ...userData, order: productsInCart });

    setUserData({ name: "", tel: "" });
  };

  return (
    <div style={{ fontSize: "20px" }}>
      Оформление заказа
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя"
          required
          name="name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Телефон"
          required
          name="tel"
          value={userData.tel}
          onChange={(e) => setUserData({ ...userData, tel: e.target.value })}
        />
        <Button type="submit">Заказать</Button>
      </StyledForm>
    </div>
  );
};

export default SendingForm;
