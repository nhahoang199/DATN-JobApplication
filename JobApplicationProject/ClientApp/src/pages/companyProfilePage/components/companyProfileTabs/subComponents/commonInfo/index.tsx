import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { UserGroupIcon, MapPinIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import { Card, CardBody, Typography } from '@material-tailwind/react'
import { setOpenEditCompany } from 'apps/companyProfile.slice'
import { useAppDispatch } from 'apps/store'
import React from 'react'

function CompanyCommonProfile() {
    const dispatch = useAppDispatch()
    return (
        <Card className='h-full w-full rounded-md'>
            {/* <CardHeader floated={false} shadow={false} className='rounded-none pt-0'>
        <Typography variant='h6' color='blue-gray' className='mb-2 mr-4 text-base'>
            Thông tin cá nhân
        </Typography>
    </CardHeader> */}
            <CardBody className='py-6 mx-6 px-0 '>
                <div className='flex flex-row'>
                    <div className='flex flex-col grow ml-4'>
                        <div className='flex flex-row justify-between'>
                            <Typography variant='h5' color='blue-gray' className='py-2'>
                                Thông tin chung
                            </Typography>{' '}
                            <PencilSquareIcon
                                className='h-6 w-6 cursor-pointer text-deep-purple-500'
                                onClick={() => dispatch(setOpenEditCompany(true))}
                            />
                        </div>
                        <div className='mt-2 w-full flex flex-col gap-y-4 max-h-[calc(60vh-17.1rem)] overflow-y-scroll scrollbar'>
                            <div className='flex flex-row gap-x-6 '>
                                <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                    <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                        <UserGroupIcon className='h-5 w-5 cursor-pointer text-blue-gray-800' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Typography variant='h6' color='blue-gray' className='italic -mb-3'>
                                            Quy mô
                                        </Typography>
                                        <Typography
                                            placeholder='Quản lý, thực tập,...'
                                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm !bg-white h-5'
                                        >
                                            {'200 người'}
                                        </Typography>{' '}
                                    </div>
                                </div>
                                <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                    <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                        <CalendarDaysIcon className='h-5 w-5 cursor-pointer text-blue-gray-800' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Typography variant='h6' color='blue-gray' className='italic -mb-3'>
                                            Ngày làm việc
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
                                    <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
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
                                            Thanh Xuân - Hà Nội
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

export default CompanyCommonProfile
