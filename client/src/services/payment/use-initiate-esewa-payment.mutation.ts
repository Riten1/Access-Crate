// services/payment/use-initiate-esewa-payment.mutation.ts
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import axios from "axios";
import toast from "react-hot-toast";

import http from "../../lib/http";

interface PaymentData {
  eventId: string;
  tickets: Array<{
    ticketId: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  successUrl: string;
  failureUrl: string;
}

export const useEsewaPaymentMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: {
      eventId: string;
      tickets: Array<{
        ticketId: string;
        quantity: number;
        price: number;
      }>;
      totalAmount: number;
      successUrl: string;
      failureUrl: string;
    }) => {
      // Ensure all parameters are included in the request
      const requestData = {
        eventId: data.eventId,
        tickets: data.tickets,
        totalAmount: data.totalAmount,
        successUrl: data.successUrl,
        failureUrl: data.failureUrl,
      };

      const response = await http.post(`/esewa/initiate`, requestData);
      return response.data;
    },

    onSuccess: (data) => {
      if (!data?.paymentUrl || !data?.params) {
        throw new Error("Invalid payment response from server");
      }

      // Programmatically submit form to eSewa
      const form = document.createElement("form");
      form.method = "POST";
      form.action = data.paymentUrl;
      form.style.display = "none";

      Object.entries(data.params).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value.toString();
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    },
    onError: (error) => {
      toast.error(error.message || "Failed to initiate payment");
    },
  });
};
