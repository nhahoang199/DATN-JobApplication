import { Typography } from '@material-tailwind/react'
import React from 'react'

function UserViewIntro() {
    return (
        <div className='py-4 w-full flex flex-col gap-y-0'>
            <Typography variant='h6' color='blue-gray' className='text-lg '>
                Giới thiệu
            </Typography>
            <Typography variant='paragraph' color='gray' className='text-gray-900 h-5'>
                -
            </Typography>
            {/* <div className='flex flex-row gap-x-6'>
                <Typography
                    variant='paragraph'
                    color='gray'
                    className='text-gray-900 max-h-[120px] overflow-y-scroll scrollbar '
                >
                    -
                </Typography>
            </div> */}
        </div>
    )
}

export default UserViewIntro
