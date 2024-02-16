import { Card, CardHeader, CardBody, Avatar, Typography, CardFooter, Chip } from '@material-tailwind/react'
import { avepoint } from 'assets'
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import React from 'react'

function AppliedJobItem(props: { item: any }) {
    const { item } = props
    return (
        <Card className='w-full p-0 bg-white rounded-md'>
            <CardHeader
                shadow={false}
                floated={false}
                className='flex items-start justify-start mx-6 mt-6 mb-0 rounded-md'
            >
                <Typography color='blue-gray' variant='h5' className='cursor-pointer'>
                    {item.name}
                </Typography>
            </CardHeader>
            <CardBody className='py-2'>
                <div className='flex flex-row items-start justify-between mb-4 xl'>
                    <div className='relative'>
                        <div className='w-12'>
                            <Avatar src={avepoint} alt='Profile picture' variant='circular' className='w-full h-full' />
                        </div>
                    </div>
                    <Typography
                        color='blue-gray'
                        variant='h6'
                        className='relative w-10/12 mt-2 ml-2 truncate cursor-pointer'
                    >
                        AvePoint VietNam
                    </Typography>
                </div>
                <div className='flex flex-col w-full gap-y-2'>
                    <div className='flex flex-row items-center gap-x-2'>
                        <CurrencyDollarIcon className='w-5 h-5 text-green-600' />
                        <Typography
                            variant='paragraph'
                            className='w-12/12 font-bold text-green-600 !line-clamp-3 flex flex-row'
                        >
                            10 - 14 triệu
                        </Typography>
                    </div>
                    <div className='flex flex-row items-center gap-x-2'>
                        <MapPinIcon className='w-5 h-5' />
                        <Typography
                            variant='paragraph'
                            className='w-12/12 font-medium text-gray-800 !line-clamp-3 flex flex-row text-sm'
                        >
                            Thanh Xuân - Hà Nội
                        </Typography>
                    </div>
                </div>
            </CardBody>
            <CardFooter className='flex flex-row items-center justify-between pt-2'>
                <Typography
                    variant='paragraph'
                    className='w-12/12 font-medium text-gray-400 !line-clamp-3 flex flex-row text-sm'
                >
                    Ngày ứng tuyển: 12/12/2023
                </Typography>
                <Chip
                    variant='ghost'
                    size='sm'
                    value={'Chờ phản hồi'}
                    color={'blue-gray'}
                    className='font-medium text-gray-900 capitalize'
                />
            </CardFooter>
        </Card>
    )
}

export default AppliedJobItem
