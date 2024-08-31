export type IProducts = {
  products: IProduct[]
}

export type IProduct = {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
  rating: IRating
}

export type IRating = {
  rate: number
  count: number
}

export type ICategories = string[]
