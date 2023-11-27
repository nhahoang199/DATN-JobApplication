import { UserGroupIcon, CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Card, CardBody, Typography, CardFooter } from '@material-tailwind/react'

function CompanyCommonInfo() {
    const data = [
        {
            icon: <UserGroupIcon className='w-5 h-5 mr-2 text-sm' />,
            title: 'Quy mô',
            value: ` người`
        },
        {
            icon: <CalendarDaysIcon className='w-5 h-5 mr-2 text-sm' />,
            title: 'Ngày làm việc',
            value: 'aaa'
        },
        {
            icon: <MapPinIcon className='w-5 h-5 mr-2 text-sm' />,
            title: 'Địa điểm',
            value: `aa`
        }
    ]
    return (
        <Card className='w-full shadow-lg rounded-xl'>
            <CardBody className='flex lg:p-4 lg:pb-0 3xl:p-6 overflow-x-wrap break-words '>
                <Typography
                    variant='h6'
                    color='blue-gray'
                    className='mt-4 pb-4 mx-2 w-full !line-clamp-2 cursor-default border-b border-solid'
                >
                    Thông tin chung
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
            </CardFooter>
        </Card>
    )
}

export default CompanyCommonInfo
