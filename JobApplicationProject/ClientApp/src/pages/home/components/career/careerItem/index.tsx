import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react'

export function CareerItem(props: { item: any }) {
    const { item } = props
    return (
        <div className='flex flex-col items-center justify-center text-center rounded-md  w-fit 3xl:w-full dark:text-gray-800 !bg-transparent'>
            <Card className=' !bg-gray-50 shadow-lg'>
                <CardHeader
                    shadow={false}
                    floated={false}
                    className='flex items-center justify-center px-12 3xl:px-20 !bg-transparent'
                >
                    <div className='w-32 h-32 overflow-hidden rounded-md'>
                        <img src={item.src} alt='career' className='object-cover w-full h-full' />
                    </div>
                </CardHeader>
                <CardBody>
                    <div className='flex flex-col items-center justify-between '>
                        <Typography color='blue-gray' variant='h6' className='mb-2 font-bold truncate'>
                            {item.name}
                        </Typography>
                        <Typography className='text-base text-gray-600 truncate'>{item.count} việc làm</Typography>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
