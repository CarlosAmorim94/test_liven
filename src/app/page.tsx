"use client"
import { useGetAllProducts } from "@/services/hooks/useGetAllProducts"
import { IProduct } from "@/types/fakeStoreTypes"
import { Cards } from "./components/cards/cards"
import { useEffect, useMemo, useState } from "react"
import { Header } from "./components/header/header"

export default function Home() {
  const { data: products, error, isLoading } = useGetAllProducts()
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])

  useMemo(() => {
    if (products) {
      setFilteredProducts(products)
    }
  }, [products])

  const handleSearch = (text: string) => {
    if (!products) return
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(text.toLowerCase()) ||
        product.description.toLowerCase().includes(text.toLowerCase())
    )
    setFilteredProducts(filtered)
  }

  return (
    <div>
      <Header onSearch={handleSearch} />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading && <p>Carregando produtos...</p>}
        {error && <p>Erro ao carregar produtos</p>}
        {filteredProducts.map((product: IProduct) => (
          <Cards product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}
