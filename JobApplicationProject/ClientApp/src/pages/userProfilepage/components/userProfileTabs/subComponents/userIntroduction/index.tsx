import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'

function UserIntroduce() {
    return (
        <Card className='h-full w-full rounded-md '>
            <CardHeader floated={false} shadow={false} className='rounded-none pt-0 mt-6 mx-6'>
                <div className='flex flex-row justify-between'>
                    <Typography variant='h5' color='blue-gray' className='py-2'>
                        Giới thiệu bản thân
                    </Typography>{' '}
                    <PencilSquareIcon className='h-6 w-6 cursor-pointer text-deep-purple-500' />
                </div>
            </CardHeader>
            <CardBody className='px-0 pb-6 pt-0 mx-6'>
                <Typography variant='paragraph' className='p-0 text-base'>
                    Giới thiệu về điểm mạnh của bạn
                </Typography>
            </CardBody>
        </Card>
    )
}

export default UserIntroduce
