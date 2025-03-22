import { useQuery } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { ApiError } from "../../@types/apiError";
import { IGetEventDetailsResponse } from "../../@types/events";
import http from "../../lib/http";

const GetEventDetailsApi = async (
  id: string | undefined
): Promise<IGetEventDetailsResponse | undefined> => {
  try {
    const response = await http.get(`/event/${id}`);
    return response.data;
  } catch (error) {
    const e = error as ApiError;
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
};

const useEventDetailsQuery = (id: string) => {
  return useQuery({
    queryKey: ["eventDetails", id],
    queryFn: () => GetEventDetailsApi(id),
  });
};

export default useEventDetailsQuery;
