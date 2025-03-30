import { useQuery } from "@tanstack/react-query";

import { IGetEventCategories } from "../../@types/events";
import http from "../../lib/http";

const GetEventCategoriesApi = async (): Promise<IGetEventCategories> => {
  const response = await http.get("/event/categories");
  return response.data;
};

const useGetEventCategoriesQuery = () => {
  return useQuery({
    queryKey: ["eventCategories"],
    queryFn: GetEventCategoriesApi,
  });
};

export default useGetEventCategoriesQuery;
