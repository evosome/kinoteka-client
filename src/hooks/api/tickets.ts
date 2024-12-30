//@ts-nocheck
import { useState } from "react";
import { api } from "./axios";
import { API_ROUTES } from "@app/routes";

export type Seat = {
  row: number;
  place: number;
  price: number;
}

export const usePostTickets = () => {

  const [status, setStatus] = useState(false);

  return {
    status,
    doPost: ({ sessionId, userId, price, seats }) => {
      api
        .post(`${API_ROUTES.tickets}/${sessionId},${userId}`, { price, seats })
        .then(() => setStatus(true));
    }
  }
};
