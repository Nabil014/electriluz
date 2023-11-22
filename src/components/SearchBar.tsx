'use client'
import { useState } from 'react'
import SearchIcon from '../svg/SearchIcon'

interface SearchBarProps {
  onSearch: (searchTerm: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }
  console.log(searchTerm)

  return (
    <form
      className='flex '
      onSubmit={handleSearch}
    >
      <input
        type='text'
        placeholder='Mouse, monitor...'
        className='rounded-s-lg pl-2 pr-2 text-black outline-none py-2 transition-all'
        required
        onChange={handleInput}
      />
      <button className='flex items-center flex-row bg-[#005ca1] p-2 rounded-e-lg'>
        <SearchIcon />
      </button>
    </form>
  )
}
