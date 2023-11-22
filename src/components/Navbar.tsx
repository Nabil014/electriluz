import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <header className='flex justify-between px-4 py-3 bg-gradient-to-r from-[#053966] to-[#001e37] text-white'>
        <div>
          <ul className='flex flex-row gap-4'>
            <Link href={'/'}>INICIO</Link>
            <Link href={'/nosotros'}>NOSOTROS</Link>
            <Link href={'/contacto'}>CONTACTO</Link>
          </ul>
        </div>
        <div>
          <ul className='flex flex-row gap-4'>
            <li>Registrarse</li>
            <li>Iniciar sesión</li>
          </ul>
        </div>
      </header>
    </div>
  )
}
