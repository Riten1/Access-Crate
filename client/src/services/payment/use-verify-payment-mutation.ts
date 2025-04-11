// src/hooks/useVerifyPayment.ts
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import axios from "axios";
import toast from "react-hot-toast";

import http from "../../lib/http";

export const useVerifyEsewaPayment = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (params: {
      pid: string;
      oid?: string;
      amt?: string;
      status?: string;
      data?: string;
    }) => {
      // Clean the pid if it contains query params
      const cleanPid = params.pid.split("?")[0];

      const response = await http.post("/esewa/verify", {
        pid: cleanPid,
        oid: params.oid,
        amt: params.amt,
        status: params.status,
        data: params.data,
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
