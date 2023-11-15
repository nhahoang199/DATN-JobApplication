import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { UserGroupIcon, MapPinIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import { Card, CardBody, Avatar, Typography, CardFooter } from '@material-tailwind/react'
import { avepoint } from 'assets'
import './index.scss'

function CompanyQuickView() {
    const data = [
        {
            icon: <UserGroupIcon className='w-5 h-5 mr-2 text-sm' />,
            title: 'Quy mô',
            value: 'zxczxc'
        },
        {
            icon: <CalendarDaysIcon className='w-5 h-5 mr-2 text-sm' />,
            title: 'Ngày làm việc',
            value: 'Thứ 2 - Thứ 6'
        },
        {
            icon: <MapPinIcon className='w-5 h-5 mr-2 text-sm' />,
            title: 'Địa điểm',
            value: 'zxczxc'
        }
    ]
    return (
        <Card className='w-full shadow-lg'>
            <CardBody className='flex flex-row xl:p-4 3xl:p-6'>
                <Avatar
                    src={avepoint}
                    alt='avatar'
                    variant='rounded'
                    className='flex flex-row w-24 h-24 m-2 3xl:w-32 3xl:h-32'
                />
                <Typography variant='h6' color='blue-gray' className='mt-4 ml-2 company-title'>
                    <a href='zxczczxzxczx' className='block w-full h-full cursor-auto'>
                        <p className='w-full duration-200 cursor-pointer line-clamp-3 hover:scale-105'>
                            AvePoint Viet Nam
                        </p>
                    </a>
                </Typography>
            </CardBody>
            <CardFooter className='flex flex-col items-center pt-0 pb-2 pl-6 divide-y divide-dashed hover:divide-solid'>
                {data.map((item, index) => (
                    <div className='flex items-center justify-between w-full h-14 item'>
                        <Typography className='flex items-start text-sm text-gray-500' color='gray'>
                            {item.icon}
                            {item.title}:
                        </Typography>
                        <Typography className='text-sm text-black-1000 '>{item.value}</Typography>
                    </div>
                ))}
                <div className='flex items-center justify-center w-full h-12'>
                    <a href='#zzxczxc' className='duration-200 text-initial hover:scale-105 hover:text-indigo-900'>
                        <Typography className='flex items-center justify-center w-full text-base text-indigo-700 underline truncate 3xl:max-w-350 xl:max-w-250'>
                            Xem trang công ty{' '}
                            <ArrowTopRightOnSquareIcon className='inline-block w-4 h-4 ml-2 text-indigo-700' />
                        </Typography>
                    </a>
                </div>
            </CardFooter>
        </Card>
    )
}

export default CompanyQuickView
