import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { ApiError } from "../../@types/apiError";
import http from "../../lib/http";

interface IChangePasswordProps {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const useChangeCurrentPassswordApi = async (data: IChangePasswordProps) => {
  const response = await http.post("/change-password", data);
  console.log(data);
  return { ...response.data };
};

export const useChangeCurrentPassswordMutation = ({
  closeModal,
  reset,
}: {
  closeModal: () => void;
  reset: () => void;
}) => {
  return useMutation({
    mutationFn: useChangeCurrentPassswordApi,
    onSuccess: (data) => {
      reset();
      closeModal();
      toast.success(data?.data.message || "Password changed successfully");
    },
    onError: (error) => {
      const e = error as ApiError;
      toast.error(e?.response?.data?.message || "Something went wrong");
    },
  });
};
