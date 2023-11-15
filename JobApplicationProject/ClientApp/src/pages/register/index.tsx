import { SyntheticEvent, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { register } from '../../apis/authApi'
import './index.scss'
import { logo_transparent } from 'assets'

const Register = () => {
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        await register(name, userName, password)
        setRedirect(true)
    }
    if (redirect) return <Navigate to='/login' />
    return (
        <div className='register-modal'>
            <div className='flex flex-col justify-center px-6 pt-0 pb-12 lg:px-8 register-container 3xl:h-70vh'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <img className='w-auto mx-auto h-52' src={logo_transparent} alt='Your Company' />
                    <h2 className='text-2xl font-bold leading-9 tracking-tight text-center text-gray-900'>
                        Sign up for an account
                    </h2>
                </div>

                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form className='space-y-4 3xl:space-y-6' action='#' method='POST'>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                                Email address
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='email'
                                    name='email'
                                    type='email'
                                    autoComplete='email'
                                    required
                                    className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center justify-between'>
                                <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                                    Password
                                </label>
                            </div>
                            <div className='mt-2'>
                                <input
                                    id='password'
                                    name='password'
                                    type='password'
                                    autoComplete='current-password'
                                    required
                                    className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <label
                                    htmlFor='confirm-password'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Confirm Password
                                </label>
                            </div>
                            <div className='mt-2'>
                                <input
                                    id='confirm-password'
                                    name='confirm-password'
                                    type='password'
                                    autoComplete='current-password'
                                    required
                                    className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type='submit'
                                className='mt-8 flex w-full justify-center rounded-md px-3 py-1.5 text-sm leading-6 shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-semibold text-gray-200 bg-gray-900  hover:bg-gray-600 dark:text-gray-900'
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
