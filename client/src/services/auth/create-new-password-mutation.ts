import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { ApiError } from "../../@types/apiError";
import { ISendOtpResponse } from "../../@types/sendOtp";
import http from "../../lib/http";

interface IResetPasswordProps {
  email: string | null;
  newPassword: string;
  confirmPassword: string;
  otp: string;
}

const createNewPasswordApi = async (
  data: IResetPasswordProps
): Promise<ISendOtpResponse | undefined> => {
  return await http.post("/forgot-password/create-password", data);
};

const useResetPasswordMutation = ({
  closeModal,
  reset,
  setSearchParams,
}: {
  closeModal: () => void;
  reset: () => void;
  setSearchParams: (data: object) => void;
}) => {
  return useMutation({
    mutationFn: createNewPasswordApi,
    onSuccess: (data) => {
      reset();
      closeModal();
      setSearchParams({});
      toast.success(data?.message || "Password changed successfully");
    },
    onError: (error) => {
      const e = error as ApiError;
      toast.error(e?.response?.data?.message || "Something went wrong");
    },
  });
};

export default useResetPasswordMutation;
