'use client'
import ProductCard from '@/app/products/ProductCard'
import Link from 'next/link'
import { useState } from 'react'

interface PaginationProps {
  items: {
    id: number
    title: string
    price: number
    thumbnail: string
    description: string
    category: string
  }[]
}

export default function Pagination({ items }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const totalPages = Math.ceil(items.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = items.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className='flex flex-col items-center gap-y-8 pb-4'>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {currentItems.map((item) => (
          <Link
            href={`/products/${item.id}`}
            key={item.id}
          >
            <ProductCard product={item} />
          </Link>
        ))}
      </ul>
      <footer className='flex gap-x-4 items-center'>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className='flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          Anterior
        </button>

        <span className='flex items-center justify-center px-4 h-10 leading-tight text-gray-700 '>
          {currentPage} de {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          Siguiente
        </button>
      </footer>
    </div>
  )
}
