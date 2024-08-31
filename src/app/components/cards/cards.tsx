"use client"
import { FC, useState } from "react"
import { IProduct } from "@/types/fakeStoreTypes"
import Image from "next/image"
import { useCart } from "@/app/contexts/cartContex"

interface cardsProps {
  product: IProduct
}

export const Cards: FC<cardsProps> = ({ product }) => {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = (change: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change))
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <div
      key={product.id}
      className="border p-4 rounded shadow-md flex flex-col"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
      <p className="text-lg font-bold text-blue-500 mb-2">
        ${product.price.toFixed(2)}
      </p>
      <div className="flex items-center space-x-2 mb-4">
        <button
          onClick={() => handleQuantityChange(-1)}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => handleQuantityChange(1)}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  )
}
