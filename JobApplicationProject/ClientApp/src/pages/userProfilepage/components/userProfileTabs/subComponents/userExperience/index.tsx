import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { Card, CardHeader, Typography, CardBody } from '@material-tailwind/react'
import React from 'react'

function UserExperience() {
    return (
        <Card className='h-full w-full rounded-md '>
            <CardHeader floated={false} shadow={false} className='rounded-none pt-0 mt-6 mx-6'>
                <div className='flex flex-row justify-between'>
                    <Typography variant='h5' color='blue-gray' className='py-2'>
                        Kinh nghiệm làm việc
                    </Typography>{' '}
                    <PencilSquareIcon className='h-6 w-6 cursor-pointer text-deep-purple-500' />
                </div>
            </CardHeader>
            <CardBody className='px-0 pb-6 pt-0 mx-6'>
                <Typography variant='paragraph' className='p-0 text-base'>
                    Thể hiện những thông tin chi tiết về quá trình làm việc
                </Typography>
            </CardBody>
        </Card>
    )
}

export default UserExperience
