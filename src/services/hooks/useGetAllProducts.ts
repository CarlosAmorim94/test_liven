import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../fakestore/services"
import { IProduct } from "@/types/fakeStoreTypes"

export const useGetAllProducts = () => {
  const { data, error, isLoading } = useQuery<IProduct[]>({
    queryKey: ["allProducts"],
    queryFn: () => getAllProducts(),
  })

  return { data, error, isLoading }
}
