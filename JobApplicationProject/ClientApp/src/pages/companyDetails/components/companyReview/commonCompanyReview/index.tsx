import { Rating, Typography } from '@material-tailwind/react'
import React from 'react'
import RatingDetails from './ratingDetails'

function CommonCompanyReview() {
    return (
        <div className='flex flex-col w-full rounded-xl bg-white bg-transparent  overflow-hidden'>
            <div className='w-full px-6 pt-6 '>
                <Typography
                    variant='h4'
                    color='blue-gray'
                    className='w-full !line-clamp-2 cursor-default pb-4 border-b-2 border-dashed '
                >
                    <div className='b-title pl-2'>Đánh giá chung</div>
                </Typography>
            </div>
            <div className='py-6 text-gray-900 dark:text-gray-300 flex flex-row justify-center '>
                <div className='flex flex-col items-center px-12 gap-y-2'>
                    <Typography
                        variant='h2'
                        color='blue-gray'
                        className='w-full cursor-default justify-center flex font-semibold'
                    >
                        5
                    </Typography>
                    <Rating value={Math.round(5)} className='h-full flex items-center' readonly />
                    <Typography variant='h6' color='blue-gray' className='w-full cursor-default justify-center flex'>
                        5 đánh giá
                    </Typography>
                </div>
                <RatingDetails />
            </div>
        </div>
    )
}

export default CommonCompanyReview
