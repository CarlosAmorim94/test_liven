import { api } from "../api"

export const getAllProducts = async () => {
  try {
    const { data } = await api.get("/products")
    return data
  } catch (error) {
    throw error
  }
}

export const getProduct = async (id: string) => {
  try {
    const { data } = await api.get(`/products/${id}`)
    return data
  } catch (error) {
    throw error
  }
}
