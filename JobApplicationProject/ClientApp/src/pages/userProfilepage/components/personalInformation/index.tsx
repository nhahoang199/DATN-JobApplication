import { Avatar, Card, CardBody, Typography } from '@material-tailwind/react'
import { boyavatar } from 'assets'
import {
    CalendarDaysIcon,
    EnvelopeIcon,
    MapPinIcon,
    PencilSquareIcon,
    PhoneIcon,
    UserIcon
} from '@heroicons/react/24/solid'
import React from 'react'
import { setOpenEditUser } from 'apps/userProfile.slice'
import { useAppDispatch } from 'apps/store'

function PersonalInformation() {
    const dispatch = useAppDispatch()
    return (
        <Card className='h-full w-full rounded-md'>
            {/* <CardHeader floated={false} shadow={false} className='rounded-none pt-0'>
                <Typography variant='h6' color='blue-gray' className='mb-2 mr-4 text-base'>
                    Thông tin cá nhân
                </Typography>
            </CardHeader> */}
            <CardBody className='py-6 mx-6 px-0'>
                <div className='flex flex-row'>
                    <div className='flex flex-col gap-y-5 items-start px-4'>
                        <Avatar src={boyavatar} alt='Profile picture' variant='circular' className='h-32 w-32' />
                    </div>
                    <div className='flex flex-col grow ml-4'>
                        <div className='flex flex-row justify-between'>
                            <Typography variant='h5' color='blue-gray' className='py-2'>
                                Trần Nha Hoàng
                            </Typography>{' '}
                            <PencilSquareIcon
                                className='h-6 w-6 cursor-pointer text-deep-purple-500'
                                onClick={() => dispatch(setOpenEditUser(true))}
                            />
                        </div>
                        <div className='mt-2 w-full flex flex-col gap-y-2'>
                            <div className='flex flex-row gap-x-6 '>
                                <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                    <div className='bg-blue-gray-100 flex items-center justify-center w-10 h-10 rounded-sm'>
                                        <UserIcon className='h-5 w-5 cursor-pointer text-blue-gray-800' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Typography variant='h6' color='blue-gray' className='italic -mb-3'>
                                            Giới tính
                                        </Typography>
                                        <Typography
                                            placeholder='Quản lý, thực tập,...'
                                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm !bg-white h-5'
                                        >
                                            {'Nam '}
                                        </Typography>{' '}
                                    </div>
                                </div>
                                <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                    <div className='bg-blue-gray-100 flex items-center justify-center w-10 h-10 rounded-sm'>
                                        <CalendarDaysIcon className='h-5 w-5 cursor-pointer text-blue-gray-800' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Typography variant='h6' color='blue-gray' className='italic -mb-3'>
                                            Ngày sinh
                                        </Typography>
                                        <Typography
                                            placeholder='Quản lý, thực tập,...'
                                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm !bg-white h-5'
                                        >
                                            {'2001/2/3 '}
                                        </Typography>{' '}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row gap-x-6'>
                                <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                    <div className='bg-blue-gray-100 flex items-center justify-center w-10 h-10 rounded-sm'>
                                        <EnvelopeIcon className='h-5 w-5 cursor-pointer text-blue-gray-800' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Typography variant='h6' color='blue-gray' className='italic -mb-3'>
                                            Email
                                        </Typography>
                                        <Typography
                                            placeholder='Quản lý, thực tập,...'
                                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm !bg-white h-5'
                                        >
                                            {' '}
                                            {'Thứ 2 - Thứ 6'}
                                        </Typography>{' '}
                                    </div>
                                </div>

                                <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                    <div className='bg-blue-gray-100 flex items-center justify-center w-10 h-10 rounded-sm'>
                                        <PhoneIcon className='h-5 w-5 cursor-pointer text-blue-gray-800' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Typography variant='h6' color='blue-gray' className='italic -mb-3'>
                                            Số điện thoại
                                        </Typography>
                                        <Typography
                                            placeholder='Quản lý, thực tập,...'
                                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm !bg-white h-5'
                                        >
                                            {' '}
                                            {'Thứ 2 - Thứ 6'}
                                        </Typography>{' '}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row gap-x-6'>
                                <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                    <div className='bg-blue-gray-100 flex items-center justify-center w-10 h-10 rounded-sm'>
                                        <MapPinIcon className='h-5 w-5 cursor-pointer text-blue-gray-800' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Typography variant='h6' color='blue-gray' className='italic -mb-3'>
                                            Địa chỉ
                                        </Typography>
                                        <Typography
                                            placeholder='Quản lý, thực tập,...'
                                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm !bg-white h-5'
                                        >
                                            {' '}
                                            {'Thứ 2 - Thứ 6'}
                                        </Typography>{' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default PersonalInformation
