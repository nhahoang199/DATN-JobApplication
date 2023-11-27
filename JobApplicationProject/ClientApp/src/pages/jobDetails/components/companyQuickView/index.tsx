import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { UserGroupIcon, MapPinIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import { Card, CardBody, Avatar, Typography, CardFooter } from '@material-tailwind/react'
import { avepoint } from 'assets'
import './index.scss'
import { NavLink } from 'react-router-dom'
import { ICompanyModel } from 'models'

function CompanyQuickView(props: { item: ICompanyModel }) {
    const { item } = props
    const data = [
        {
            icon: <UserGroupIcon className='w-5 h-5 mr-2 text-sm' />,
            title: 'Quy mô',
            value: `${item.companySize} người`
        },
        {
            icon: <CalendarDaysIcon className='w-5 h-5 mr-2 text-sm' />,
            title: 'Ngày làm việc',
            value: item.workingDay
        },
        {
            icon: <MapPinIcon className='w-5 h-5 mr-2 text-sm' />,
            title: 'Địa điểm',
            value: `${item.address.districtName} - ${item.address.provinceName}`
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
                    <div className='block w-full h-full cursor-auto'>
                        <NavLink
                            to={`/company/details/${item.companyId}`}
                            replace
                            className='w-full duration-200 cursor-pointer line-clamp-3 hover:scale-105'
                        >
                            {item.name}
                        </NavLink>
                    </div>
                </Typography>
            </CardBody>
            <CardFooter className='flex flex-col items-center pt-0 pb-2 pl-6 divide-y divide-dashed hover:divide-solid'>
                {data.map((item, index) => (
                    <div className='flex items-center justify-between w-full h-14 item' key={index}>
                        <Typography className='flex items-start text-sm text-gray-500' color='gray'>
                            {item.icon}
                            {item.title}:
                        </Typography>
                        <Typography className='text-sm text-black-1000 '>{item.value}</Typography>
                    </div>
                ))}
                <div className='flex items-center justify-center w-full h-12'>
                    <NavLink
                        to={`/company/details/${item.companyId}`}
                        replace
                        className='duration-200 text-initial hover:scale-105 hover:text-deep-purple-600'
                    >
                        <Typography className='flex items-center justify-center w-full text-base text-deep-purple-400 underline truncate 3xl:max-w-350 xl:max-w-250'>
                            Xem trang công ty{' '}
                            <ArrowTopRightOnSquareIcon className='inline-block w-4 h-4 ml-2 text-deep-purple-400' />
                        </Typography>
                    </NavLink>
                </div>
            </CardFooter>
        </Card>
    )
}

export default CompanyQuickView
