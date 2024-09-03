"use client"
import { useCart } from "@/contexts/cartContex"
import { IProduct } from "@/types/fakeStoreTypes"
import { FC, useState } from "react"
import { QuantityButtons } from "../quantityButtons/quantityButtons"
import { Button } from "../button/button"
import Image from "next/image"
import NoImage from "@/assets/images/NoImage.gif"

interface CartsCardsProps {
  product: IProduct
  quantity: number
  index: number
}

export const CartsCards: FC<CartsCardsProps> = ({
  product,
  quantity = 1,
  index,
}) => {
  const [imageError, setImageError] = useState(false)
  const { removeFromCart, updateQuantity } = useCart()

  const totalPrice = product.price * quantity

  const onRemove = () => updateQuantity(product.id, Math.max(1, quantity - 1))
  const onAdd = () => updateQuantity(product.id, quantity + 1)

  return (
    <div
      data-testid={`cart-card-${product.title || index}`}
      className="border p-4 rounded shadow-md flex flex-col"
    >
      {product.image && !imageError ? (
        <Image
          src={product.image}
          alt={product.title || "Sem descrição"}
          width={200}
          height={200}
          className="w-full h-40 object-cover mb-4 rounded"
          onError={() => setImageError(true)}
        />
      ) : (
        <Image
          src={NoImage}
          alt="No Image"
          width={200}
          height={200}
          className="w-full h-40 object-cover mb-4 rounded"
        />
      )}
      <h2 className="text-lg font-semibold mb-2">
        {product.title || "Sem título"}
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        {product.description || "Sem descrição"}
      </p>
      <p className="text-sm font-bold text-blue-500 mb-2">
        Unidade: ${product.price.toFixed(2) || 0}
      </p>
      <p className="text-sm mb-4">Quantidade: {quantity || 0}</p>
      <div className="flex justify-between">
        <QuantityButtons
          quantity={quantity || 1}
          onClickButtonAdd={() => onAdd()}
          onClickButtonRemove={() => onRemove()}
        />
        <p className="text-lg font-bold text-green-600 mb-2">
          TOTAL: ${totalPrice.toFixed(2) || 0}
        </p>
      </div>
      <Button
        data-testid={`remove-from-cart-${product.id || index}`}
        onClick={() => removeFromCart(product.id || index)}
        text="Remover do Carrinho"
        className="bg-red-500 hover:bg-red-600 mt-auto w-full"
      />
    </div>
  )
}
