import React from 'react'
import { companyavatar, avepoint } from 'assets'
import { Rating } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'
function TopCompanySection() {
    const data = [
        {
            id: '123123',
            name: 'AvePoint VietNam',
            title: 'Software Vendor',
            rating: 4.5,
            src: avepoint
        },
        {
            id: '123123',
            name: 'OneMount VietNam',
            title: 'Software Vendor',
            rating: 5,
            src: companyavatar
        },
        {
            id: '123123',
            name: 'Niteco Vietnam Co., Ltd',
            title: 'Software Vendor',
            rating: 4,
            src: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBenZhT2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--78256eff185961a6e10697371a0cdb77a0c699c9/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/Blue%20Illustrated%20Pool%20Party%20Instagram%20Post.png'
        },
        {
            id: '123123',
            name: 'AZuhlke Engineering Vietnam',
            title: 'Software Vendor',
            rating: 4,
            src: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd3VjSFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2bdbcc850d1da5bfc0f020011301732f4a85a9bc/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/Zuhlke-LOGO(forpartners).jpg'
        },
        {
            id: '123123',
            name: 'Orient Software Development Corp.',
            title: 'Software Vendor',
            rating: 5,
            src: companyavatar
        }
    ]
    return (
        <section className='relative py-6 overflow-auto bg-gray-100 dark:bg-gray-800 dark:text-gray-100'>
            <div className='absolute top-0 w-full h-full bg-center bg-cover bg-profile-background bg-search' />
            <div className='absolute top-0 w-full h-full bg-center bg-cover bg-black/75' />
            <div className='container relative z-10 flex flex-col items-center justify-center p-4 mx-auto 3xl:w-3/4 h-1000 sm:p-10'>
                <p className='p-2 text-lg font-medium text-center uppercase tracki text-shadow-lg '>Trusted partner</p>
                <h1 className='mb-16 text-4xl font-bold text-center leadi sm:text-5xl text-shadow-lg'>
                    Top những công ty nổi bật
                </h1>
                <div className='flex flex-row flex-wrap justify-center w-full mt-8'>
                    {data.map((item, index) => (
                        <div className='flex flex-col justify-center w-full px-8 mx-6 my-12 text-center bg-white rounded-md shadow-lg lg:w-72 3xl:w-96 3xl:h-52 dark:text-gray-800 3xl:mx-12'>
                            <img
                                alt=''
                                className='self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500 3xl:mb-2'
                                src={item.src}
                            />
                            <Rating
                                value={Math.round(item.rating)}
                                className='h-fit flex justify-center mt-2 scale-y-110 !cursor-default'
                                readonly
                            />
                            <div className='flex-1 my-4'>
                                <NavLink to={`company/details/${item.id}`}>
                                    <p className='-mt-2 text-xl font-semibold duration-200 cursor-pointer leadi 3xl:mb-4 hover:scale-105'>
                                        {item.name}
                                    </p>
                                </NavLink>
                                <p>{item.title}</p>
                            </div>
                            <div className='flex items-center justify-center p-3 space-x-3 border-t-2'>
                                <a
                                    rel='noopener noreferrer'
                                    href='#aa'
                                    title='Email'
                                    className='dark:text-gray-900 hover:dark:text-violet-400'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                        className='w-5 h-5'
                                    >
                                        <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                                        <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                                    </svg>
                                </a>
                                <a
                                    rel='noopener noreferrer'
                                    href='#aaa'
                                    title='Twitter'
                                    className='dark:text-gray-900 hover:dark:text-violet-400'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 50 50'
                                        fill='currentColor'
                                        className='w-5 h-5'
                                    >
                                        <path d='M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z'></path>
                                    </svg>
                                </a>
                                <a
                                    rel='noopener noreferrer'
                                    href='#aaaa'
                                    title='LinkedIn'
                                    className='dark:text-gray-900 hover:dark:text-violet-400'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 32 32'
                                        className='w-5 h-5'
                                    >
                                        <path d='M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z'></path>
                                    </svg>
                                </a>
                                <a
                                    rel='noopener noreferrer'
                                    href='#aaaa'
                                    title='GitHub'
                                    className='dark:text-gray-900 hover:dark:text-violet-400'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 32 32'
                                        className='w-5 h-5'
                                    >
                                        <path d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z'></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TopCompanySection
