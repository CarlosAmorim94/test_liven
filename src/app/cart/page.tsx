"use client"
import { useCart } from "@/contexts/cartContex"
import { Header } from "@/components/header/header"
import { CartsCards } from "@/components/cartsCards/cartsCards"
import { Button } from "@/components/button/button"

export default function CartPage() {
  const { cart, clearCart } = useCart()

  const cartItems = Object.values(cart)
  const cartTotal = cartItems.reduce(
    (total, { product, quantity }) => total + product.price * quantity,
    0
  )

  return (
    <div>
      <Header />
      <div className="p-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Carrinho de Compras</h1>
          {cartItems.length > 0 && (
            <div className="text-xl font-semibold  text-green-600">
              Total do Carrinho: ${cartTotal.toFixed(2)}
            </div>
          )}
          {cartItems.length > 0 && (
            <Button
              onClick={clearCart}
              text="Limpar Carrinho"
              className="bg-red-500 hover:bg-red-600 mb-4"
            />
          )}
        </div>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
            {cartItems.map(({ product, quantity }, index) => (
              <CartsCards
                product={product}
                quantity={quantity}
                key={product.id}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
