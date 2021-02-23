import { API } from "../../backend";

export const createOrder = (urserId, token, orderData) => {
  return fetch(`${API}/order/create/${urserId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ orderData }),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
