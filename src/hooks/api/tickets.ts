//@ts-nocheck
import { useState } from "react";
import { api } from "./axios";
import { API_ROUTES } from "@app/routes";

export const usePostTickets = () => {

  const [status, setStatus] = useState(false);

  return {
    status,
    doPost: ({ sessionId, userId, row, place, price }) => {
      api
        .post(`${API_ROUTES.tickets}/${sessionId},${userId}`, { row, place, price })
        .then(() => setStatus(true));
    }
  }
};
