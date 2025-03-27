import { useQuery } from "@tanstack/react-query";

import { IGetTop2OrganizersResponse } from "../../@types/organizers";
import http from "../../lib/http";

const GetTop2OrganizersApi = async (): Promise<IGetTop2OrganizersResponse> => {
  const response = await http.get("/top-two-organizers");
  return response.data;
};

const useGetTop2OrganizersQuery = () => {
  return useQuery({
    queryKey: ["top2Organizers"],
    queryFn: GetTop2OrganizersApi,
  });
};

export default useGetTop2OrganizersQuery;
