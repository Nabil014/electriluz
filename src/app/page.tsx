import Carrousel from '@/components/carrousel/Carrousel'
import Header from '@/components/Header'
import Products from '@/app/products/Products'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className='container mx-auto'>
      <header>
        <Header />
      </header>
      <main className='mt-10'>
        <Carrousel />

        <section className='flex gap-4'>
          <div className='flex-1'>
            <Sidebar />
          </div>
          <Products />
        </section>
      </main>
    </div>
  )
}
