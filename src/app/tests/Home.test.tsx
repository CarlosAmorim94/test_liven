import "@testing-library/jest-dom"
import { render, screen, waitFor } from "@testing-library/react"
import Home from "../page"
import { ClientWrapper } from "@/providers/ClientWrapper"
import { useGetAllProducts } from "@/services/hooks/useGetAllProducts"

jest.mock("../../services/hooks/useGetAllProducts")

const mockProducts = [
  {
    id: 1,
    title: "Produto 1",
    price: 10,
    category: "Categoria 1",
    description: "Descrição do Produto 1",
    image: "https://i.pravatar.cc/320",
    rating: { rate: 4.5, count: 10 },
  },
  {
    id: 2,
    title: "Produto 2",
    price: 20,
    category: "Categoria 2",
    description: "Descrição do Produto 2",
    image: "https://i.pravatar.cc/320",
    rating: { rate: 4.0, count: 20 },
  },
]

describe("Home", () => {
  beforeEach(() => {
    ;(useGetAllProducts as jest.Mock).mockReturnValue({
      data: mockProducts,
      error: null,
      isLoading: false,
    })
  })

  it("renders a heading", () => {
    render(
      <ClientWrapper>
        <Home />
      </ClientWrapper>
    )

    const heading = screen.getByText("Loja Simples")
    expect(heading).toBeInTheDocument()
  })

  it("renders products", async () => {
    render(
      <ClientWrapper>
        <Home />
      </ClientWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText("Produto 1")).toBeInTheDocument()
      expect(screen.getByText("Produto 2")).toBeInTheDocument()
    })
  })

  it("shows loading state", () => {
    ;(useGetAllProducts as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    })

    render(
      <ClientWrapper>
        <Home />
      </ClientWrapper>
    )

    expect(screen.getByText("Carregando produtos...")).toBeInTheDocument()
  })

  it("shows error state", () => {
    ;(useGetAllProducts as jest.Mock).mockReturnValue({
      data: null,
      error: new Error("Erro ao carregar produtos"),
      isLoading: false,
    })

    render(
      <ClientWrapper>
        <Home />
      </ClientWrapper>
    )

    expect(screen.getByText("Erro ao carregar produtos")).toBeInTheDocument()
  })
})
