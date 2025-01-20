import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { ApiError } from "../../@types/apiError";
import { IProfileResponse } from "../../@types/profile";
import http from "../../lib/http";

export interface IUpdateProfileProps {
  full_name: string;
  email: string;
  address?: string;
  contact_info?: string;
  profile_pic?: File;
}

const updateProfileApi = async (
  data: IUpdateProfileProps
): Promise<IProfileResponse> => {
  const response = await http.patch("/update-profile", data);
  return { ...response.data };
};

const useUpdateProfileMutation = ({
  closeModal,
  reset,
}: {
  closeModal: () => void;
  reset: () => void;
}) => {
  return useMutation({
    mutationFn: updateProfileApi,
    onSuccess: (data) => {
      toast.success(data?.message || "Profile updated successfully");
      reset();
      closeModal();
    },

    onError: (error) => {
      const e = error as ApiError;
      toast.error(e?.response?.data?.message || "Something went wrong");
    },
  });
};

export default useUpdateProfileMutation;
