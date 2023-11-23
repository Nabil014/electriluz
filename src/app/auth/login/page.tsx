import SigninForm from '@/components/SigninForm'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className='flex justify-center flex-col gap-y-4 items-center min-h-[90vh]'>
      <div className='bg-slate-300 p-4 rounded-xl flex flex-col gap-y-8 items-center min-w-[450px]'>
        <h1 className='text-2xl'>Login</h1>
        <SigninForm />
        <div className='flex justify-around items-center w-full'>
          <span>¿No tienes una cuenta?</span>

          <Link
            href='/auth/register'
            className='hover:underline '
          >
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  )
}
