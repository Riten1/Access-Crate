// src/hooks/useVerifyPayment.ts
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import http from "../../lib/http";

export const useVerifyEsewaPayment = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (params: {
      transaction_uuid: string;
      total_amount?: string;
      status?: string;
      data?: string;
      transaction_code?: string;
    }) => {
      // Clean the transaction_uuid if it contains query params
      const cleanTransactionUuid = params.transaction_uuid.split("?")[0];

      const response = await http.post("/esewa/verify", {
        transaction_uuid: cleanTransactionUuid,
        total_amount: params.total_amount,
        status: params.status,
        data: params.data,
        transaction_code: params.transaction_code,
      });
      return response.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        navigate(`/payment/success?pid=${data.paymentId}`);
      } else {
        navigate(`/payment/failure?error=${data.message}`);
      }
    },
    onError: (error) => {
      navigate("/payment/failure?error=verification_failed");
    },
  });
};
