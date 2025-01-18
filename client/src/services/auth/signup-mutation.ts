import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import toast from "react-hot-toast";

import { ApiError } from "../../@types/apiError";
import http from "../../lib/http";
import { setLogin } from "../../redux/slices/user-slice";

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
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: userRegisterApi,
    onSuccess: (data) => {
      toast.success(data?.message || "User registered successfully");
      reset();
      dispatch(
        setLogin({
          accessToken: data?.data.accessToken,
          userData: { ...data?.data.user },
        })
      );
      console.log(data);
      closeModal();
      navigate("/");
    },
    onError: (error) => {
      const e = error as ApiError;
      console.log(e);
      toast.error(e?.response?.data?.message || "Something went wrong");
    },
  });
};

export default useRegisterUserMutation;
