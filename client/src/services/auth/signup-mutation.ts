import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { ApiError } from "../../@types/apiError";
import http from "../../lib/http";

interface ISignUpProps {
  email: string;
  password: string;
  full_name: string;
  address?: string;
  contact_info: string;
  profile_pic?: string;
}

const userRegisterApi = async (data: ISignUpProps) => {
  const response = await http.post(`/auth/register`, data);
  return { ...response.data };
};

const useRegisterUserMutation = ({
  closeModal,
  reset,
}: {
  closeModal: () => void;
  reset: () => void;
}) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: userRegisterApi,
    onSuccess: (data) => {
      toast.success(data?.message || "Login successful");
      reset();
      data.success && closeModal();
      navigate("/");
    },
    onError: (error) => {
      const e = error as ApiError;
      toast.error(e?.response?.message || "Something went wrong");
    },
  });
};

export default useRegisterUserMutation;
