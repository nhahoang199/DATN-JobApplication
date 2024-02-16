import { Avatar, Card, CardBody, Typography } from '@material-tailwind/react'
import { boyavatar, myavatar } from 'assets'
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
        <Card className='w-full h-full rounded-md'>
            {/* <CardHeader floated={false} shadow={false} className='pt-0 rounded-none'>
                <Typography variant='h6' color='blue-gray' className='mb-2 mr-4 text-base'>
                    Thông tin cá nhân
                </Typography>
            </CardHeader> */}
            <CardBody className='px-0 py-6 mx-6'>
                <div className='flex flex-row'>
                    <div className='flex flex-col items-start px-4 gap-y-5'>
                        <Avatar src={myavatar} alt='Profile picture' variant='circular' className='w-32 h-32' />
                    </div>
                    <div className='flex flex-col ml-4 grow'>
                        <div className='flex flex-row justify-between'>
                            <Typography variant='h5' color='blue-gray' className='py-2'>
                                Trần Nha Hoàng
                            </Typography>{' '}
                            <PencilSquareIcon
                                className='w-6 h-6 cursor-pointer text-deep-purple-500'
                                onClick={() => dispatch(setOpenEditUser(true))}
                            />
                        </div>
                        <div className='flex flex-col w-full mt-2 gap-y-2'>
                            <div className='flex flex-row gap-x-6 '>
                                <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                    <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-100'>
                                        <UserIcon className='w-5 h-5 cursor-pointer text-blue-gray-800' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Typography variant='h6' color='blue-gray' className='-mb-3 italic'>
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
                                <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                    <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-100'>
                                        <CalendarDaysIcon className='w-5 h-5 cursor-pointer text-blue-gray-800' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Typography variant='h6' color='blue-gray' className='-mb-3 italic'>
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
                                <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                    <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-100'>
                                        <EnvelopeIcon className='w-5 h-5 cursor-pointer text-blue-gray-800' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Typography variant='h6' color='blue-gray' className='-mb-3 italic'>
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

                                <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                    <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-100'>
                                        <PhoneIcon className='w-5 h-5 cursor-pointer text-blue-gray-800' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Typography variant='h6' color='blue-gray' className='-mb-3 italic'>
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
                                <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                    <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-100'>
                                        <MapPinIcon className='w-5 h-5 cursor-pointer text-blue-gray-800' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Typography variant='h6' color='blue-gray' className='-mb-3 italic'>
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
