import { Rating, Typography } from '@material-tailwind/react'
import React from 'react'

function CompanyReviewItem(props: { item: any }) {
    const { item } = props
    return (
        <div className='p-8 shadow-lg  border border-gray-100 rounded-md bg-white dark:bg-gray-800 dark:border-gray-700  shadow-gray-600/10 dark:shadow-none '>
            <div className='flex flex-col'>
                <div>
                    <Typography variant='h6' color='blue-gray' className='w-full !line-clamp-2 cursor-default pb-2'>
                        {item.title}
                    </Typography>
                </div>
                <div className='flex flex-row  items-end'>
                    <p className='text-sm text-gray-500 dark:text-gray-400 mr-4'>Mobile dev</p>
                    <Rating value={Math.round(item.rating)} className='h-fit' readonly />
                </div>
            </div>
            <p className='mt-4 text-sm leading-relaxed'>{item.desc}</p>
        </div>
    )
}

export default CompanyReviewItem
