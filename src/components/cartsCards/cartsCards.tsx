import { useCart } from "@/contexts/cartContex"
import { IProduct } from "@/types/fakeStoreTypes"
import Image from "next/image"
import { FC } from "react"
import { QuantityButtons } from "../quantityButtons/quantityButtons"
import { Button } from "../button/button"

interface CartsCardsProps {
  product: IProduct
  quantity: number
}

export const CartsCards: FC<CartsCardsProps> = ({ product, quantity }) => {
  const { removeFromCart, updateQuantity } = useCart()

  const totalPrice = product.price * quantity

  const onRemove = () => updateQuantity(product.id, Math.max(1, quantity - 1))
  const onAdd = () => updateQuantity(product.id, quantity + 1)

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
      <p className="text-sm font-bold text-blue-500 mb-2">
        Unidade: ${product.price.toFixed(2)}
      </p>
      <p className="text-sm mb-4">Quantidade: {quantity}</p>
      <div className="flex justify-between">
        <QuantityButtons
          quantity={quantity}
          onClickButtonAdd={() => onAdd()}
          onClickButtonRemove={() => onRemove()}
        />
        <p className="text-lg font-bold text-green-600 mb-2">
          TOTAL: ${totalPrice.toFixed(2)}
        </p>
      </div>
      <Button
        onClick={() => removeFromCart(1)}
        text="Remover do Carrinho"
        className="bg-red-500 hover:bg-red-600 mt-auto w-full"
      />
    </div>
  )
}
