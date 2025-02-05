import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { ApiError } from "../../@types/apiError";
import { ISendOtpResponse } from "../../@types/sendOtp";
import http from "../../lib/http";

const userSendOtpMailApi = async (email: string): Promise<ISendOtpResponse> => {
  return await http.post("/forgot-password", { email: email });
};

const useSendOtpMailMutation = () => {
  return useMutation({
    mutationFn: userSendOtpMailApi,
    onSuccess: (data) => {
      toast.success(data.message || "OTP sent successfully, check your email");
    },
    onError: (error) => {
      const e = error as ApiError;
      toast.error(e.response?.data?.message || "Something went wrong");
    },
  });
};

export default useSendOtpMailMutation;
