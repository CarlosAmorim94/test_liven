import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Header } from "./header"

describe("Header Component", () => {
  it("Should render a title in header", () => {
    render(<Header />)

    const heading = screen.getByText("Loja Simples")

    expect(heading).toBeInTheDocument()
  })

  it("Should render a cart button in header", () => {
    render(<Header />)

    const cartButton = screen.getByText("Carrinho")

    expect(cartButton).toBeInTheDocument()
  })
})
