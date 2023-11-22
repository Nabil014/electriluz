import Image from 'next/image'

interface Props {
  item: {
    id: number
    title: string
    description: string
    thumbnail: string
  }
}
export default function ItemCarrousel(item: Props) {
  const { thumbnail, title, description } = item.item

  return (
    <div className='flex relative justify-center items-center w-full mx-auto'>
      <div className='absolute inset-0 bg-black/50' />
      <div className='w-[450px] h-[350px]'>
        <Image
          src={thumbnail}
          alt={title}
          width={450}
          height={350}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
      <p className='absolute bg-white/80 w-full items-center flex justify-center'>
        {title}
      </p>
    </div>
  )
}
