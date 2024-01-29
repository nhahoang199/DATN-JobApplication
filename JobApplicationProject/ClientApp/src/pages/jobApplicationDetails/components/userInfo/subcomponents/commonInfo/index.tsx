import { UserIcon, CalendarDaysIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Avatar, Typography } from '@material-tailwind/react'
import { boyavatar } from 'assets'
import React from 'react'

function UserCommonInfo() {
    return (
        <div className='mt-0 w-full flex flex-col gap-y-2 pb-4'>
            <div className='flex flex-row gap-x-4'>
                <Avatar src={boyavatar} alt='Profile picture' variant='square' size='sm' className='w-10 h-10' />
                <Typography variant='h5' color='blue-gray' className='py-2'>
                    Trần Nha Hoàng
                </Typography>{' '}
                {/* <PencilSquareIcon
                                className='h-6 w-6 cursor-pointer text-deep-purple-500'
                                onClick={() => dispatch(setOpenEditUser(true))}
                            /> */}
            </div>
            <div className='flex flex-row gap-x-6 '>
                <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                    <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                        <UserIcon className='h-5 w-5 text-blue-gray-800' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                            Giới tính
                        </Typography>
                        <Typography
                            placeholder='Quản lý, thực tập,...'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                        >
                            {'Nam '}
                        </Typography>{' '}
                    </div>
                </div>
                <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                    <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                        <CalendarDaysIcon className='h-5 w-5 text-blue-gray-800' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                            Ngày sinh
                        </Typography>
                        <Typography
                            placeholder='Quản lý, thực tập,...'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                        >
                            {'2001/2/3 '}
                        </Typography>{' '}
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-x-6'>
                <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                    <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                        <EnvelopeIcon className='h-5 w-5 text-blue-gray-800' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                            Email
                        </Typography>
                        <Typography
                            placeholder='Quản lý, thực tập,...'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                        >
                            {' '}
                            {'Thứ 2 - Thứ 6'}
                        </Typography>{' '}
                    </div>
                </div>

                <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                    <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                        <PhoneIcon className='h-5 w-5 text-blue-gray-800' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                            Số điện thoại
                        </Typography>
                        <Typography
                            placeholder='Quản lý, thực tập,...'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                        >
                            {' '}
                            {'Thứ 2 - Thứ 6'}
                        </Typography>{' '}
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-x-6'>
                <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                    <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                        <MapPinIcon className='h-5 w-5 text-blue-gray-800' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                            Địa chỉ
                        </Typography>
                        <Typography
                            placeholder='Quản lý, thực tập,...'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                        >
                            {' '}
                            {'Thứ 2 - Thứ 6'}
                        </Typography>{' '}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCommonInfo
