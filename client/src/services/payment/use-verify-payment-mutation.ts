import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { ApiError } from "../../@types/apiError";
import http from "../../lib/http";

// src/api/paymentApi.ts
// src/api/paymentApi.ts
interface IVerifyPaymentParams {
  pid: string;
  oid?: string;
  amt?: string;
  refId?: string;
}

const verifyEsewaPaymentApi = async (params: IVerifyPaymentParams) => {
  const response = await http.get(`/esewa/verify`, {
    params: {
      pid: params.pid,
      oid: params.oid,
      amt: params.amt,
      refId: params.refId,
    },
  });
  return response.data;
};

// Update useVerifyEsewaPaymentMutation
export const useVerifyEsewaPaymentMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: verifyEsewaPaymentApi,
    onSuccess: (data) => {
      if (data?.success && data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        toast.error("Payment verification incomplete");
        navigate("/");
      }
    },
    onError: (error: ApiError) => {
      toast.error(error?.response?.data?.message || "Verification failed");
      navigate("/");
    },
  });
};
