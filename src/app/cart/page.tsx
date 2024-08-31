"use client"
import { useMemo } from "react"
import { IProduct } from "@/types/fakeStoreTypes"
import Image from "next/image"
import { useCart } from "../contexts/cartContex"
import { Header } from "../components/header/header"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart()

  const cartItems = useMemo(() => {
    return Object.values(cart)
  }, [cart])

  return (
    <div>
      <Header />
      <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Carrinho de Compras</h1>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cartItems.map(({ product, quantity }) => (
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
                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>
                <p className="text-lg font-bold text-blue-500 mb-2">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-sm mb-4">Quantidade: {quantity}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <button
                    onClick={() =>
                      updateQuantity(product.id, Math.max(1, quantity - 1))
                    }
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Remover do Carrinho
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
