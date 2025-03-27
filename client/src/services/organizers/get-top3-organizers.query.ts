import { useQuery } from "@tanstack/react-query";

import { IGetTop2OrganizersResponse } from "../../@types/organizers";
import http from "../../lib/http";

const GetTop3OrganizersApi = async (): Promise<IGetTop2OrganizersResponse> => {
  const response = await http.get("/remaining-three-organizers");
  return response.data;
};

const useGetTop3OrganizersQuery = () => {
  return useQuery({
    queryKey: ["top3Organizers"],
    queryFn: GetTop3OrganizersApi,
  });
};

export default useGetTop3OrganizersQuery;
