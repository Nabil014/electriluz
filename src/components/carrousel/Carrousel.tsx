'use client'
import { useState, useEffect } from 'react'
import ItemCarrousel from './ItemCarrousel'
import { products } from '../../moks/products.json'
import { SelectedIcon, UnselectedIcon } from '@/svg/SelectedIcon'

interface Item {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const productsCarrousel = products.slice(0, 4)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % productsCarrousel.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const currentItem = productsCarrousel[currentIndex]

  const onClick = (item: Item) => {
    setCurrentIndex(productsCarrousel.indexOf(item))
  }

  return (
    <div className='flex flex-col'>
      <div className='flex'>
        <ItemCarrousel item={currentItem} />
      </div>
      <div className='flex justify-center gap-x-4 py-3'>
        {productsCarrousel.map((item, index) => {
          return currentIndex === index ? (
            <button
              key={index}
              onClick={() => onClick(item)}
            >
              <SelectedIcon />{' '}
            </button>
          ) : (
            <button
              key={index}
              onClick={() => onClick(item)}
            >
              <UnselectedIcon />
            </button>
          )
        })}
      </div>
    </div>
  )
}
