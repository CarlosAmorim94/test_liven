import { useCart } from "@/contexts/cartContex"
import { IProduct } from "@/types/fakeStoreTypes"
import { FC } from "react"
import { QuantityButtons } from "../quantityButtons/quantityButtons"
import { Button } from "../button/button"
import { ImageCards } from "../imageCards/imageCards"

type ICartsCardsProps = {
  product: IProduct
  quantity: number
  index: number
}

export const CartsCards: FC<ICartsCardsProps> = ({
  product,
  quantity = 1,
  index,
}) => {
  const { removeFromCart, updateQuantity } = useCart()

  const totalPrice = product.price * quantity

  const onRemove = () => updateQuantity(product.id, Math.max(1, quantity - 1))
  const onAdd = () => updateQuantity(product.id, quantity + 1)

  return (
    <div
      data-testid={`cart-card-${product.title || index}`}
      className="border p-4 rounded shadow-md flex flex-col md:flex-row items-center md:items-start w-full"
    >
      <ImageCards
        image={product.image}
        title={product.title}
        className="w-full md:w-40 h-40 object-cover mb-4 md:mb-0 md:mr-4 rounded"
      />

      <div className="flex flex-col flex-1">
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
        <div className="flex justify-between items-center mb-4">
          <QuantityButtons
            quantity={quantity || 1}
            onClickButtonAdd={onAdd}
            onClickButtonRemove={onRemove}
          />
          <p className="text-lg font-bold text-green-600">
            TOTAL: ${totalPrice.toFixed(2) || 0}
          </p>
        </div>
        <Button
          data-testid={`remove-from-cart-${product.id || index}`}
          onClick={() => removeFromCart(product.id || index)}
          text="Remover do Carrinho"
          className="bg-red-500 hover:bg-red-600 w-full md:w-auto"
        />
      </div>
    </div>
  )
}
