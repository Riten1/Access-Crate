import { useQuery } from "@tanstack/react-query";

import { IProfileResponse } from "../../@types/profile";
import http from "../../lib/http";

const GetCurrentAccountApi = async (): Promise<IProfileResponse> => {
  const response = await http.get("/profile");
  return response.data;
};

const useGetCurrentAccountQuery = () => {
  return useQuery({
    queryKey: ["currentAccount"],
    queryFn: GetCurrentAccountApi,
  });
};

export default useGetCurrentAccountQuery;
