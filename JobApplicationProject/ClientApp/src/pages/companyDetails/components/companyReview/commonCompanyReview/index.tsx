import { Button, Typography } from '@material-tailwind/react'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import CommonCompanyRating from './commonCompanyRating'
import SpecificCompanyRating from './specificCompanyRating'
import './index.scss'
import { NavLink } from 'react-router-dom'

function CommonCompanyReview() {
    const [isViewMore, setIsViewMore] = useState(false)
    return (
        <div className='flex flex-col w-full rounded-xl bg-white bg-transparent overflow-hidden'>
            <div className='w-full px-8 pt-8 '>
                <Typography
                    variant='h4'
                    color='blue-gray'
                    className='w-full !line-clamp-2 cursor-default pb-4 border-b-2 border-dashed !flex flex-row justify-between items-center'
                >
                    <div className='b-title pl-2'>Đánh giá chung</div>
                    <NavLink to='/company/review/id'>
                        <Button
                            className='flex items-center gap-3 h-fit !bg-gradient-to-r from-blue-gray-800 to-gray-800 text-gray-100'
                            variant='gradient'
                        >
                            <PencilSquareIcon className='h-5 w-5' />
                            Viết đánh giá
                        </Button>
                    </NavLink>
                </Typography>
            </div>
            <CommonCompanyRating />

            <div className={`px-8 ${isViewMore ? 'block fadeIn' : 'hidden fadeOut'}`}>
                <SpecificCompanyRating />
            </div>
            <div className=' text-gray-900 dark:text-gray-300 flex flex-row justify-center '>
                <div className='w-full px-8 flex flex-row items-center'>
                    <Typography
                        variant='h6'
                        color='blue-gray'
                        className='w-full cursor-pointer justify-center items-center !flex border-t-2 border-dashed py-4 text-indigo-500'
                        onClick={() => (isViewMore ? setIsViewMore(false) : setIsViewMore(true))}
                    >
                        Xem thêm
                        {isViewMore ? (
                            <ChevronUpIcon className='h-5 w-5 ml-2' />
                        ) : (
                            <ChevronDownIcon className='h-5 w-5 ml-2' />
                        )}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default CommonCompanyReview
