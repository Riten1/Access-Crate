// src/api/paymentApi.ts
import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { ApiError } from "../../@types/apiError";
import http from "../../lib/http";

interface IEsewaPaymentPayload {
  eventId: string;
  tickets: Array<{
    ticketId: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number | undefined;
}

const initiateEsewaPaymentApi = async (data: IEsewaPaymentPayload) => {
  const response = await http.post(`/esewa/initiate`, {
    eventId: data.eventId,
    tickets: data.tickets,
    totalAmount: data.totalAmount,
  });

  console.log(data.eventId, data.tickets, data.totalAmount);
  return response.data; // Should return { paymentUrl: string }
};

const useEsewaPaymentMutation = () => {
  return useMutation({
    mutationFn: initiateEsewaPaymentApi,
    onSuccess: (data) => {
      if (data?.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        throw new Error("No payment URL received");
      }
    },
    onError: (error: ApiError) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to initiate payment. Please try again."
      );
    },
  });
};

export default useEsewaPaymentMutation;
