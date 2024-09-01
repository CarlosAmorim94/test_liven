"use client"
import { FC, useState } from "react"
import { IProduct } from "@/types/fakeStoreTypes"
import Image from "next/image"
import { useCart } from "@/contexts/cartContex"
import { QuantityButtons } from "../quantityButtons/quantityButtons"
import { Button } from "../button/button"

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

  const totalPrice = product.price * quantity

  return (
    <div
      key={product.id}
      className="border p-4 rounded shadow-md flex flex-col"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
      <p className="text-lg font-bold text-blue-500 mb-2">
        ${product.price.toFixed(2)}
      </p>
      <div className="flex justify-between">
        <QuantityButtons
          quantity={quantity}
          onClickButtonAdd={() => handleQuantityChange(1)}
          onClickButtonRemove={() => handleQuantityChange(-1)}
        />
        <p className="text-lg font-bold text-green-600 mb-2">
          TOTAL: ${totalPrice.toFixed(2)}
        </p>
      </div>

      <Button
        id={`add-to-cart-${product.id}`}
        onClick={handleAddToCart}
        text="Adicionar ao Carrinho"
        className="mt-auto bg-blue-500 hover:bg-blue-600"
      />
    </div>
  )
}
