import { CartProvider } from "@/contexts/cartContex"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { render } from "@testing-library/react"

const queryClient = new QueryClient()

const renderWithClient = (children: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <CartProvider>{children}</CartProvider>
    </QueryClientProvider>
  )
}

export default renderWithClient
