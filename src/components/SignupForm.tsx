'use client'
import { useForm } from 'react-hook-form'

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form
      className='flex flex-col gap-y-3 w-[80%] mx-auto'
      onSubmit={onSubmit}
    >
      <div>
        <label
          htmlFor='name'
          className='block mb-1 text-sm font-medium text-gray-900'
        >
          Nombre
        </label>
        <div className='relative '>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
            </svg>
          </div>
          <input
            type='text'
            id='name'
            className=' text-white text-sm rounded-lg   block w-full ps-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 outline-none'
            placeholder='Juan Perez'
            {...register('name', { required: 'El nombre es requerido' })}
          />
        </div>
        {errors.name && (
          <span className='text-red-600 text-xs pl-2'>
            {errors.name.message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor='email'
          className='block mb-1 text-sm font-medium text-gray-900'
        >
          Email
        </label>
        <div className='relative '>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
            <svg
              className='w-4 h-4  dark:text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 16'
            >
              <path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
              <path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
            </svg>
          </div>
          <input
            type='text'
            id='email'
            className=' border  text-white text-sm rounded-lg   block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 outline-none'
            placeholder='usuario@dominio.com'
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
          <span className='inline-flex items-center pl-3 text-sm text-white rounded-e-0  rounded-s-md bg-gray-700   focus:border-blue-500'>
            <svg
              className=' text-gray-400'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
              />
              <path d='M12 17v4' />
              <path d='M10 20l4 -2' />
              <path d='M10 18l4 2' />
              <path d='M5 17v4' />
              <path d='M3 20l4 -2' />
              <path d='M3 18l4 2' />
              <path d='M19 17v4' />
              <path d='M17 20l4 -2' />
              <path d='M17 18l4 2' />
              <path d='M9 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
              <path d='M7 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2' />
            </svg>
          </span>
          <input
            type='password'
            id='website-admin'
            className='rounded-none rounded-e-lg text-white  focus:border-blue-500 block flex-1 min-w-0 w-full text-sm  p-2.5  bg-gray-700 border-gray-600  outline-none'
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
        className='py-2.5 px-5  mt-2 text-sm font-medium  outline-none  rounded-full    focus:z-10  bg-gray-800 text-gray-400 dark:border-gray-600 hover:text-white hover:bg-gray-700'
      >
        Enviar
      </button>
    </form>
  )
}
