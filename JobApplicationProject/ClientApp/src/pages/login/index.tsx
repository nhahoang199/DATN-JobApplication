import './index.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { logo_transparent } from 'assets'
import { SyntheticEvent, useEffect, useState } from 'react'
import { RootState, useAppDispatch } from 'apps/store'
import { useSelector } from 'react-redux'
import { loginAsync } from 'apps/auth.slice'
import { hideProgressLoading, showProgressLoading } from 'apps/loading.slice'
const Login = () => {
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = useSelector((state: RootState) => state.auth)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(showProgressLoading('Đang đăng nhập'))

        try {
            await dispatch(loginAsync({ email: email, password: password })).unwrap()
        } finally {
            dispatch(hideProgressLoading())
        }
    }
    useEffect(() => {
        if (auth.loginStatus === 'succeeded') navigate(from, { replace: true })
    }, [auth.loginStatus, from, navigate])
    return (
        <div className='login-modal'>
            <div className='flex flex-col justify-center px-6 pt-0  mt-10 lg:px-8 login-container'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <img className='w-auto mx-auto h-52' src={logo_transparent} alt='Your Company' />
                    <h2 className='text-2xl font-bold leading-9 tracking-tight text-center text-gray-900'>
                        Đăng nhập vào tài khoản của bạn
                    </h2>
                </div>

                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form className='space-y-6' action='#' method='POST' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                                Địa chỉ Email
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='email'
                                    name='email'
                                    type='email'
                                    autoComplete='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center justify-between'>
                                <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                                    Mật khẩu
                                </label>
                                <div className='text-sm'>
                                    <div className='font-semibold text-deep-purple-400 hover:text-deep-purple-300'>
                                        Quên mật khẩu?
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <input
                                    id='password'
                                    name='password'
                                    type='password'
                                    autoComplete='current-password'
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='flex w-full justify-center rounded-md px-3 py-1.5 mt-8 text-sm leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-semibold text-gray-200 bg-gray-900  hover:bg-gray-600 dark:text-gray-900'
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login
