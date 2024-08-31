"use client"
import Link from "next/link"
import { useState } from "react"

type HeaderProps = {
  onSearch?: (text: string) => void
  showSearch?: boolean
}

export const Header: React.FC<HeaderProps> = ({
  onSearch,
  showSearch = false,
}) => {
  const [searchText, setSearchText] = useState("")

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    setSearchText(text)
    onSearch && onSearch(text)
  }

  return (
    <header className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold">Loja Simples</h1>
      </Link>
      {showSearch && (
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Buscar produtos..."
          className="p-2 rounded border-2 border-gray-300 focus:outline-none focus:border-blue-300 text-black"
        />
      )}
      <Link
        href="/cart"
        className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600"
      >
        Carrinho
      </Link>
    </header>
  )
}
