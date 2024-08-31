import { useQuery } from "@tanstack/react-query"
import { getCategories } from "../fakestore/services"

export const useGetAllCategories = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["allCategories"],
    queryFn: () => getCategories(),
  })

  return { data, error, isLoading }
}
