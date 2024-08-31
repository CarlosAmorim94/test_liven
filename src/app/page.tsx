"use client"
import { useGetAllProducts } from "@/services/hooks/useGetAllProducts"

export default function Home() {
  const { data, error, isLoading } = useGetAllProducts()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  )
}
