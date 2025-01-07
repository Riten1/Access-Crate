import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import toast from "react-hot-toast";

import { ApiError } from "../../@types/apiError";
import http from "../../lib/http";
import { setLogin } from "../../redux/slices/user-slice";

interface ILoginProps {
  email: string;
  password: string;
}

const userLoginApi = async (data: ILoginProps) => {
  const response = await http.post(`/auth/login`, data);
  return { ...response.data };
};

const userLoginMutation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: userLoginApi,
    onSuccess: (data) => {
      toast.success(data?.message || "Login successful");

      dispatch(
        setLogin({
          token: data?.data.accessToken,
          userData: {
            ...data?.data.user,
          },
       
        })
      );

      navigate("/");
    },
    onError: (error) => {
      const e = error as ApiError;

      toast.error(e?.response?.message || "Something went wrong");
    },
  });
};

export default userLoginMutation;
