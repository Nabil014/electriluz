'use client'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession()
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
          {session ? (
            <ul className='flex flex-row gap-4'>
              <li>
                <button onClick={() => signOut()}>Cerrar sesión</button>
              </li>
            </ul>
          ) : (
            <ul className='flex flex-row gap-4'>
              <li>
                <Link href='/auth/register'>Registrarse</Link>{' '}
              </li>
              <li>
                <Link href='/auth/login'>Iniciar sesión</Link>{' '}
              </li>
            </ul>
          )}
        </div>
      </header>
    </div>
  )
}
