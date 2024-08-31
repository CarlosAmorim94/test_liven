import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../fakestore/services"

export const useGetAllProducts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: () => getAllProducts(),
  })

  return { data, error, isLoading }
}
