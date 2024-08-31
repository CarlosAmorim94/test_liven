"use client"
import { useState } from "react"

type HeaderProps = {
  onSearch: (text: string) => void
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("")

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    setSearchText(text)
    onSearch(text)
  }

  return (
    <header className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Loja Simples</h1>
      <input
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder="Buscar produtos..."
        className="p-2 rounded border-2 border-gray-300 focus:outline-none focus:border-blue-300 text-black"
      />
    </header>
  )
}
