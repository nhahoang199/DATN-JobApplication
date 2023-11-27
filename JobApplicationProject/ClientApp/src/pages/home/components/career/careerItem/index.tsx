import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react'

export function CareerItem() {
    return (
        <div className='flex flex-col items-center justify-center text-center rounded-lg  w-fit 3xl:w-full dark:text-gray-800 !bg-transparent'>
            <Card className=' !bg-gray-50 shadow-lg'>
                <CardHeader
                    shadow={false}
                    floated={false}
                    className='flex items-center justify-center px-12 3xl:px-20 !bg-transparent'
                >
                    <div className='w-32 h-32 rounded-lg overflow-hidden'>
                        <img
                            src='https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'
                            alt='career'
                            className='object-cover w-full h-full'
                        />
                    </div>
                </CardHeader>
                <CardBody>
                    <div className='flex flex-col items-center justify-between '>
                        <Typography color='blue-gray' variant='h6' className='font-bold truncate mb-2'>
                            Hành chính / Văn phòng
                        </Typography>
                        <Typography className='text-base text-gray-600 truncate'>602 việc làm</Typography>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
