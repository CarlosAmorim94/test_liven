import { useQuery } from "@tanstack/react-query"
import { getCategories } from "../fakestore/services"
import { ICategories } from "@/types/fakeStoreTypes"

export const useGetAllCategories = () => {
  const { data, error, isLoading } = useQuery<ICategories>({
    queryKey: ["allCategories"],
    queryFn: () => getCategories(),
  })

  return { data, error, isLoading }
}
