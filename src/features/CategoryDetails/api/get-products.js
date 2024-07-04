import apiClient from "lib/api-client";
import { useQuery } from "@tanstack/react-query";
import config from "configs/config";

const getProducts = async (Id) => {
  const response = await apiClient.post(`${config.baseUrl}/admin/product/get`, { subCategoryId: Id });
  return response.data.products;
};

export const useGetProducts = (subcategoryId) => {
  return useQuery({
    queryKey: ["products", subcategoryId],
    queryFn: () => getProducts(subcategoryId),
    staleTime: 300000,
  });
};
