import { useQuery } from "@tanstack/react-query"
import { getCategory } from "../fakestore/services"

type GetCategoryProps = {
  category: string
}

export const useGetProduct = ({ category }: GetCategoryProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [`category-${category}`],
    queryFn: () => getCategory(category),
  })

  return { data, error, isLoading }
}
