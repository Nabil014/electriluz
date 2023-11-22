import Image from 'next/image'

interface Product {
  id: number
  title: string
  price: number
  thumbnail: string
  description: string
  category: string
}

interface ProductCardProps {
  product: Product
}
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className='border flex flex-col border-blue-500 rounded-lg h-96 w-[250px]'>
      <Image
        src={product.thumbnail}
        width={250}
        height={250}
        style={{
          objectFit: 'contain',
          height: 'auto',
        }}
        alt={product.title}
      />
      <main className='flex justify-end items-center flex-1 flex-col pb-10'>
        <p className='text-center'>{product.title}</p>
        <strong className='text-center'>${product.price}</strong>
      </main>
    </article>
  )
}
