import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../fakestore/services"
import { IProducts } from "@/types/fakeStoreTypes"

export const useGetAllProducts = () => {
  const { data, error, isLoading } = useQuery<IProducts>({
    queryKey: ["allProducts"],
    queryFn: () => getAllProducts(),
  })

  return { data, error, isLoading }
}
