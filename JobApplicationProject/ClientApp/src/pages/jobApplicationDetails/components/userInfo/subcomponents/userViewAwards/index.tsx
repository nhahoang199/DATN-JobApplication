import { TrophyIcon } from '@heroicons/react/24/solid'
import { Typography } from '@material-tailwind/react'
import React from 'react'

function UserViewAwards() {
    const data = [
        {
            name: ''
        }
    ]
    return (
        <div className='flex flex-col w-full pt-4 gap-y-0'>
            <Typography variant='h6' color='blue-gray' className='text-lg '>
                Giải thưởng
            </Typography>
            {data.length === 0 ? (
                <Typography variant='paragraph' color='gray' className='h-5 text-gray-900'>
                    -
                </Typography>
            ) : (
                <div className='flex flex-col divide-y-2 gap-y-2 divide-dashed'>
                    {data.map((item, index) => {
                        return (
                            <div className='flex flex-row items-start w-full gap-x-4'>
                                <div className='flex items-center justify-center w-10 h-10 mt-3 rounded-sm bg-blue-gray-50'>
                                    <TrophyIcon className='w-5 h-5 text-blue-gray-800' />
                                </div>
                                <div className='flex flex-col py-1 gap-y-1'>
                                    <Typography
                                        variant='h6'
                                        color='gray'
                                        className='text-gray-900 max-h-[120px] overflow-y-scroll scrollbar'
                                    >
                                        Giải nhất
                                    </Typography>
                                    <div className='flex flex-row gap-x-4'>
                                        <Typography variant='paragraph' color='gray' className='text-gray-900'>
                                            Cuộc thi toán học cấp huyện
                                        </Typography>
                                        {'|'}
                                        <Typography
                                            variant='paragraph'
                                            color='gray'
                                            className='text-gray-900 max-h-[120px] overflow-y-scroll scrollbar'
                                        >
                                            8/2018
                                        </Typography>
                                    </div>
                                    <Typography
                                        variant='paragraph'
                                        color='gray'
                                        className='text-gray-900 max-h-[120px] overflow-y-scroll scrollbar text-sm'
                                    >
                                        Mô tả
                                    </Typography>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default UserViewAwards
