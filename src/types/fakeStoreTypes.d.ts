export type IProducts = {
  products: IProduct[]
}

export type IProduct = {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
}

export type ICategories = string[]
