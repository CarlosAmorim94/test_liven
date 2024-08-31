"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { CartProvider } from "../contexts/cartContex"

const queryClient = new QueryClient()

export const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>{children}</CartProvider>
    </QueryClientProvider>
  )
}
