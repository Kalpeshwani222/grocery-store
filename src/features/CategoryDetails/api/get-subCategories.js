import apiClient from "lib/api-client";
import { useQuery } from "@tanstack/react-query";
import config from "configs/config";

const getSubCategories = async (Id) => {
  const response = await apiClient.post(`${config.baseUrl}/admin/subcategory/get`, { categoryId: Id });
  return response.data.subCategories;
};

export const useGetSubCategories = (categoryId) => {
  return useQuery({
    queryKey: ["subCategories", categoryId],
    queryFn: () => getSubCategories(categoryId),
    staleTime: 300000,
    //  enabled: false,
  });
};
