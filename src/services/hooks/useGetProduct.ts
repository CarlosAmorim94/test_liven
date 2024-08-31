import { useQuery } from "@tanstack/react-query"
import { getProduct } from "../fakestore/services"
import { IProduct } from "@/types/fakeStoreTypes"

type GetProductProps = {
  id: string
}

export const useGetProduct = ({ id }: GetProductProps) => {
  const { data, error, isLoading } = useQuery<IProduct>({
    queryKey: [`product-${id}`],
    queryFn: () => getProduct(id),
  })

  return { data, error, isLoading }
}
