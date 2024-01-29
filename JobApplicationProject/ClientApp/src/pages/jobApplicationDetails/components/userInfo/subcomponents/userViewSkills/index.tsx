import { Typography, Chip } from '@material-tailwind/react'
import React from 'react'

function UserViewSkills() {
    const data = [
        {
            name: ''
        }
    ]
    return (
        <div className='py-4 w-full flex flex-col gap-y-0'>
            <Typography variant='h6' color='blue-gray' className='text-lg '>
                Kỹ năng
            </Typography>
            {data.length === 0 ? (
                <Typography variant='paragraph' color='gray' className='text-gray-900 h-5'>
                    -
                </Typography>
            ) : (
                <div className='flex flex-col gap-y-2 divide-y-2 divide-dashed'>
                    {data.map((item, index) => {
                        return (
                            <div className='flex flex-col gap-y-2 py-1'>
                                <Typography variant='h6' color='gray' className='text-gray-900'>
                                    Nghiệp dư
                                </Typography>

                                <Chip
                                    variant='ghost'
                                    size='sm'
                                    value={'.Net'}
                                    color={'blue-gray'}
                                    className='font-medium text-gray-900 capitalize w-fit'
                                />
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default UserViewSkills
