import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react'

export function CareerItem() {
    return (
        <div className='flex flex-col items-center justify-center text-center rounded-lg shadow-lg w-fit 3xl:w-full dark:text-gray-800'>
            <Card className='w-64 3xl:w-72'>
                <CardHeader shadow={false} floated={false} className='flex items-center justify-center h-52 3xl:w-64'>
                    <img
                        src='https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'
                        alt='career'
                        className='object-cover w-full h-full'
                    />
                </CardHeader>
                <CardBody>
                    <div className='flex flex-col items-center justify-between mb-2'>
                        <Typography color='blue-gray' variant='h5' className='w-10/12 font-medium truncate'>
                            IT phần mềm
                        </Typography>
                        <Typography className='w-10/12 font-medium text-gray-600 truncate'>602 việc làm</Typography>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
