import { createContext, useContext, useState, ReactNode } from "react"
import { IProduct } from "@/types/fakeStoreTypes"

interface CartContextType {
  cart: { [key: number]: { product: IProduct; quantity: number } }
  addToCart: (product: IProduct, quantity: number) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<{
    [key: number]: { product: IProduct; quantity: number }
  }>({})

  const addToCart = (product: IProduct, quantity: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: {
        product,
        quantity: (prevCart[product.id]?.quantity || 0) + quantity,
      },
    }))
  }

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const { [id]: _, ...rest } = prevCart
      return rest
    })
  }

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: {
        ...prevCart[id],
        quantity,
      },
    }))
  }

  const clearCart = () => {
    setCart({})
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
