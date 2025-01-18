import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import toast from "react-hot-toast";

import { ApiError } from "../../@types/apiError";
import http from "../../lib/http";
import { resetLogin } from "../../redux/slices/user-slice";

const getLogoutApi = async () => {
  const response = await http.post(`/auth/logout`);
  return response;
};

export const useLogoutMutation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: getLogoutApi,
    onSuccess: (data) => {
      dispatch(resetLogin());
      navigate("/", { replace: true });
      toast.success(data.data.message || "Logout successful");
    },
    onError: (error) => {
      const e = error as ApiError;
      console.log(error);
      toast.error(e?.response?.data?.message || "Something went wrong");
    },
  });
};
