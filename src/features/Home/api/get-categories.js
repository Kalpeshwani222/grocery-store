import apiClient from "../../../lib/api-client";
import config from "configs/config";
import { useQuery } from "@tanstack/react-query";

const getCategories = async () => {
  const response = await apiClient.get(`${config.baseUrl}/admin/category/get`);
  return response.data.categories;
};

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
