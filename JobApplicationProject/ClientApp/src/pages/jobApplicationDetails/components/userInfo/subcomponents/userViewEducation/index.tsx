import React from 'react'
import { Typography } from '@material-tailwind/react'
import { AcademicCapIcon } from '@heroicons/react/24/solid'

function UserViewEducation() {
    const data = [
        {
            name: ''
        }
    ]
    return (
        <div className='py-4 w-full flex flex-col gap-y-0'>
            <Typography variant='h6' color='blue-gray' className='text-lg '>
                Học vấn
            </Typography>
            {data.length === 0 ? (
                <Typography variant='paragraph' color='gray' className='text-gray-900 h-5'>
                    -
                </Typography>
            ) : (
                <div className='flex flex-col gap-y-2 divide-y-2 divide-dashed'>
                    {data.map((item, index) => {
                        return (
                            <div className='flex flex-row gap-x-4 w-full items-start'>
                                <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm mt-3'>
                                    <AcademicCapIcon className='h-5 w-5 text-blue-gray-800' />
                                </div>
                                <div className='flex flex-col  gap-y-1 py-1'>
                                    <Typography variant='h6' color='gray' className='text-gray-900 '>
                                        Điện tử - Viễn thông
                                    </Typography>
                                    <div className='flex flex-row gap-x-4'>
                                        <Typography variant='paragraph' color='gray' className='text-gray-900 '>
                                            Đại học Bách Khoa Hà Nội
                                        </Typography>
                                        {'|'}
                                        <Typography variant='paragraph' color='gray' className='text-gray-900 '>
                                            2022 - Nay
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default UserViewEducation
