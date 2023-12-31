'use client'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function SigninForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      email: '',
      password: '',
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })
    if (!res?.ok) return console.log(res)
    router.push('/')
  })
  return (
    <form
      className='flex flex-col gap-y-3 w-[80%] mx-auto'
      onSubmit={onSubmit}
    >
      <div>
        <label
          htmlFor='input-group-1'
          className='block mb-1 text-sm font-medium text-gray-900'
        >
          Email
        </label>
        <div className='relative '>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 16'
            >
              <path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
              <path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
            </svg>
          </div>
          <input
            type='text'
            id='input-group-1'
            className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg  focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 outline-none'
            placeholder='name@flowbite.com'
            {...register('email', { required: 'El email es requerido' })}
          />
        </div>
        {errors.email && (
          <span className='text-red-600 text-xs pl-2'>
            {errors.email.message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor='website-admin'
          className='block mb-1 text-sm font-medium text-gray-900'
        >
          Contraseña
        </label>
        <div className='flex'>
          <span className='inline-flex items-center px-3 text-sm text-white bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600  dark:border-gray-600'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
            </svg>
          </span>
          <input
            type='password'
            id='website-admin'
            className='rounded-none rounded-e-lg bg-gray-50 border text-white  focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 outline-none'
            placeholder='*******'
            {...register('password', {
              required: 'La contraseña es requerida',
              minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres',
              },
            })}
          />
        </div>
        {errors.password && (
          <span className='text-red-600 pl-2 text-xs'>
            {errors.password.message}
          </span>
        )}
      </div>
      <button
        type='submit'
        className='py-2.5 px-5 me-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200  hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
      >
        Enviar
      </button>
    </form>
  )
}
