import { useQuery } from "@tanstack/react-query"
import { getCategory } from "../fakestore/services"
import { IProduct } from "@/types/fakeStoreTypes"

type GetCategoryProps = {
  category: string
}

export const useGetProduct = ({ category }: GetCategoryProps) => {
  const { data, error, isLoading } = useQuery<IProduct[]>({
    queryKey: [`category-${category}`],
    queryFn: () => getCategory(category),
  })

  return { data, error, isLoading }
}
