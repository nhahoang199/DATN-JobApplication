import { Typography } from '@material-tailwind/react'
import React from 'react'
import CompanyReviewItem from './companyReviewItem'
import { SimplePagination } from 'components/common'

function CompanyReviewList() {
    const data = [
        {
            title: 'Eric Ampire',
            rating: 5,
            desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos
        illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione
        ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero
        voluptas veniam at reprehenderit, veritatis harum et rerum.`
        },
        {
            title: 'Rodrigo Aguilar',
            rating: 5,
            desc: `Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
        cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.`
        },
        {
            title: 'Adam Wathan',
            rating: 5,
            desc: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
        aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
        reprehenderit, veritatis harum et rerum.`
        }
    ]
    return (
        <div className='flex flex-col w-full rounded-xl bg-transparent  overflow-hidden'>
            <div className='w-full px-8 pt-8 bg-white shadow-md '>
                <Typography variant='h4' color='blue-gray' className='w-full !line-clamp-2 cursor-default pb-4 '>
                    <div className='b-title pl-2'>{data.length} đã đánh giá</div>
                </Typography>
            </div>
            <div className=' py-6 text-gray-600 dark:text-gray-300'>
                <div className='flex flex-col justify-start gap-8'>
                    {data.map((item, index) => {
                        return <CompanyReviewItem item={item} key={index} />
                    })}
                </div>
            </div>
            <div className='w-full px- pb-8 pt-4 flex justify-center'>
                <SimplePagination />
            </div>
        </div>
    )
}

export default CompanyReviewList
