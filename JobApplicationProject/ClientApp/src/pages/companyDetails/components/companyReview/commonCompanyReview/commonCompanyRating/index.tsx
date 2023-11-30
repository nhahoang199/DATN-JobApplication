import { Typography, Rating } from '@material-tailwind/react'
import React from 'react'
import RatingDetails from '../ratingDetails'

function CommonCompanyRating() {
    return (
        <div className='py-6 px-8 text-gray-900 dark:text-gray-300 flex flex-row justify-center divide-x-4'>
            <div className='flex flex-col items-center px-6 gap-y-2 w-1/3 '>
                <Typography
                    variant='h2'
                    color='blue-gray'
                    className='w-full cursor-default justify-center flex font-semibold'
                >
                    5
                </Typography>
                <Rating value={Math.round(5)} className='h-full flex items-center' readonly />
                <Typography variant='h6' color='blue-gray' className='w-full cursor-default justify-center flex '>
                    5 đánh giá
                </Typography>
            </div>
            <div className='w-2/3 pl-8'>
                <RatingDetails />
            </div>
        </div>
    )
}

export default CommonCompanyRating
