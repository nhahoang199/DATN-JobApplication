import React, { useState } from 'react'
import RatingDetails from '../ratingDetails'
import { Rating, Typography } from '@material-tailwind/react'
import './index.scss'

function SpecificCompanyRating() {
    const [isActive, setIsActive] = useState(0)
    const data = [
        {
            label: 'Mức lương & Phúc lợi',
            value: 5
        },
        {
            label: 'Đào tạo & Học hỏi',
            value: 4
        },
        {
            label: 'Sự quan tâm đến nhân viên',
            value: 4
        },
        {
            label: 'Văn hóa công ty',
            value: 5
        },
        {
            label: 'Môi trường làm việc',
            value: 3
        }
    ]
    return (
        <div className='text-gray-900 dark:text-gray-300 flex flex-row justify-center rounded-md border border-solid overflow-hidden '>
            <div className='flex flex-col w-7/12 divide-y-2'>
                {data.map((item, index) => {
                    return (
                        <div
                            className={`flex flex-row items-center border-r-2 px-4 py-2 !cursor-pointer tab-item ${
                                isActive === index ? 'is-item-active' : ''
                            }`}
                            key={index}
                            onClick={() => setIsActive(index)}
                        >
                            <Typography
                                variant='paragraph'
                                color='blue-gray'
                                className='w-full  font-medium justify-center is-item-active-p !cursor-pointer'
                            >
                                {item.label}
                            </Typography>
                            <div className='flex flex-row items-center'>
                                <Rating value={Math.round(item.value)} className='h-full flex items-center' readonly />
                                <>
                                    {' '}
                                    <Typography
                                        variant='h6'
                                        color='blue-gray'
                                        className='w-full text-end ml-2 !cursor-pointer'
                                    >
                                        {item.value}
                                    </Typography>
                                </>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='flex flex-col w-5/12 px-6 justify-center'>
                <Typography
                    variant='h5'
                    color='blue-gray'
                    className='w-full text-base flex items-center is-item-active-p !cursor-pointer h-1/5 '
                >
                    Đánh giá chi tiết
                </Typography>
                <RatingDetails className='h-4/5 py-2' childClassName='' />
            </div>
        </div>
    )
}

export default SpecificCompanyRating
