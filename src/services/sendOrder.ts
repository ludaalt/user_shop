import { IOrderData } from "../types/types";

const url = "https://app.aaccent.su/js/confirm.php";

export const sendOrder = async (data: IOrderData) => {
  try {
    const response = await fetch(url, {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const json = await response.text();
    console.log("Успех:", JSON.stringify(json));
  } catch (error) {
    console.error("Ошибка:", error);
  }
};
