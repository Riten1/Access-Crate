import { Dispatch, SetStateAction } from "react";
import { useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { ApiError } from "../../@types/apiError";
import http from "../../lib/http";

const userSendOtpMailApi = async (email: string) => {
  return await http.post("/user/forgot-password", { email: email });
};

const useSendOtpMailMutation = (
  setStep: Dispatch<SetStateAction<number>>,
  email: string
) => {
  const [, setSearchParams] = useSearchParams();

  return useMutation({
    mutationFn: userSendOtpMailApi,
    onSuccess: (data) => {
      setStep(1);
      setSearchParams({ email });
      toast.success(data?.data.message || "OTP sent successfully");
    },
    onError: (error) => {
      const e = error as ApiError;
      toast.error(e.response?.data?.message || "Something went wrong");
    },
  });
};

export default useSendOtpMailMutation;
