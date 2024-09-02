import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { useCart } from "@/contexts/cartContex"
import CartPage from "../cart/page"

jest.mock("../../contexts/cartContex")

const mockCart = {
  1: {
    product: {
      id: 1,
      title: "Produto 1",
      price: 10,
      category: "Categoria 1",
      description: "Descrição do Produto 1",
      image: "imagem1.jpg",
      rating: { rate: 4.5, count: 10 },
    },
    quantity: 2,
  },
  2: {
    product: {
      id: 2,
      title: "Produto 2",
      price: 20,
      category: "Categoria 2",
      description: "Descrição do Produto 2",
      image: "imagem2.jpg",
      rating: { rate: 4.0, count: 20 },
    },
    quantity: 1,
  },
}

describe("CartPage", () => {
  let clearCartMock: jest.Mock

  beforeEach(() => {
    clearCartMock = jest.fn()
    ;(useCart as jest.Mock).mockReturnValue({
      cart: mockCart,
      clearCart: clearCartMock,
    })
  })

  it("renders a heading", () => {
    render(<CartPage />)

    const heading = screen.getByText("Loja Simples")
    expect(heading).toBeInTheDocument()
  })
  it("renders the cart title", () => {
    render(<CartPage />)

    const title = screen.getByText((content, element) => {
      return element?.textContent === "Carrinho de Compras"
    })
    expect(title).toBeInTheDocument()
  })

  it("renders cart items", () => {
    render(<CartPage />)

    expect(screen.getByText("Produto 1")).toBeInTheDocument()
    expect(screen.getByText("Produto 2")).toBeInTheDocument()
  })

  it("shows cart total", () => {
    render(<CartPage />)

    const total = screen.getByText("Total do Carrinho: $40.00")
    expect(total).toBeInTheDocument()
  })

  it("shows empty cart message", () => {
    ;(useCart as jest.Mock).mockReturnValue({
      cart: {},
      clearCart: jest.fn(),
    })

    render(<CartPage />)

    expect(screen.getByText("Seu carrinho está vazio.")).toBeInTheDocument()
  })

  it("calls clearCart when 'Limpar Carrinho' button is clicked", () => {
    render(<CartPage />)

    const clearButton = screen.getByText("Limpar Carrinho")
    clearButton.click()
    expect(clearCartMock).toHaveBeenCalled()
  })
})
