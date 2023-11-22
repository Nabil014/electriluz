import Cart from './Cart'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <div className='bg-[#001526] text-white container mx-auto'>
      <header className='flex justify-between py-8'>
        <div>
          <h2>Logo</h2>
        </div>
        <div className='flex flex-row gap-10 pr-4'>
          <SearchBar />
          <Cart />
        </div>
      </header>
      <menu className=''>
        <ul className='flex flex-row items-center justify-center gap-1 text-white px-4 py-1'>
          <button className='bg-cyan-600 px-6 py-4 rounded-lg'>
            Notebooks
          </button>
          <button className='bg-cyan-700 px-6 py-4 rounded-lg'>
            Placas de video
          </button>
          <button className='bg-cyan-700 px-6 py-4 rounded-lg'>
            Microprocesadores
          </button>
          <button className='bg-cyan-700 px-6 py-4 rounded-lg'>
            Placas madre
          </button>
          <button className='bg-cyan-700 px-6 py-4 rounded-lg'>Fuentes</button>
          <button className='bg-cyan-700 px-6 py-4 rounded-lg'>
            Perifericos
          </button>
        </ul>
      </menu>
    </div>
  )
}
