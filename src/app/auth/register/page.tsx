import SignupForm from '@/components/SignupForm'
import Link from 'next/link'
import React from 'react'

export default function RegisterPage() {
  return (
    <div className='flex justify-center flex-col gap-y-4 items-center min-h-[90vh]'>
      <div className='bg-slate-300 p-4 rounded-xl flex flex-col gap-y-8 items-center min-w-[450px]'>
        <h1 className='text-2xl'>Registrarse</h1>
        <SignupForm />
        <div className='flex gap-x-6'>
          <span>¿Ya tienes una cuenta?</span>
          <Link
            href='/auth/login'
            className='hover:underline'
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  )
}
