import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { UserGroupIcon, MapPinIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import { Card, CardBody, Typography } from '@material-tailwind/react'
import { setOpenEditCompany } from 'apps/companyProfile.slice'
import { useAppDispatch } from 'apps/store'
import React from 'react'

function CompanyCommonProfile() {
    const dispatch = useAppDispatch()
    return (
        <Card className='w-full h-full rounded-md'>
            {/* <CardHeader floated={false} shadow={false} className='pt-0 rounded-none'>
        <Typography variant='h6' color='blue-gray' className='mb-2 mr-4 text-base'>
            Thông tin cá nhân
        </Typography>
    </CardHeader> */}
            <CardBody className='px-0 py-6 mx-6 '>
                <div className='flex flex-row'>
                    <div className='flex flex-col ml-4 grow'>
                        <div className='flex flex-row justify-between'>
                            <Typography variant='h5' color='blue-gray' className='py-2'>
                                Thông tin chung
                            </Typography>{' '}
                            <PencilSquareIcon
                                className='w-6 h-6 cursor-pointer text-deep-purple-500'
                                onClick={() => dispatch(setOpenEditCompany(true))}
                            />
                        </div>
                        <div className='mt-2 w-full flex flex-col gap-y-4 max-h-[calc(60vh-17.1rem)] overflow-y-scroll scrollbar'>
                            <div className='flex flex-row gap-x-6 '>
                                <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                    <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                                        <UserGroupIcon className='w-5 h-5 cursor-pointer text-blue-gray-800' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Typography variant='h6' color='blue-gray' className='-mb-3 italic'>
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
                                <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                    <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                                        <CalendarDaysIcon className='w-5 h-5 cursor-pointer text-blue-gray-800' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Typography variant='h6' color='blue-gray' className='-mb-3 italic'>
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
                                <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                    <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
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
