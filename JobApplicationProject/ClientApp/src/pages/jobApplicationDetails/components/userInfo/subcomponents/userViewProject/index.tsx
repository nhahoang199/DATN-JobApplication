import React from 'react'
import { Typography } from '@material-tailwind/react'
import { CodeBracketSquareIcon } from '@heroicons/react/24/solid'
function UserViewProjects() {
    const data = [
        {
            name: ''
        }
    ]
    return (
        <div className='py-4 w-full flex flex-col gap-y-0'>
            <Typography variant='h6' color='blue-gray' className='text-lg '>
                Dự án cá nhân
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
                                    <CodeBracketSquareIcon className='h-5 w-5 text-blue-gray-800' />
                                </div>
                                <div className='flex flex-col gap-y-1 py-1'>
                                    <Typography
                                        variant='h6'
                                        color='gray'
                                        className='text-gray-900 max-h-[120px] overflow-y-scroll scrollbar'
                                    >
                                        DATN
                                    </Typography>
                                    <div className='flex flex-row gap-x-4'>
                                        <Typography
                                            variant='paragraph'
                                            color='gray'
                                            className='text-indigo-700 hover:text-indigo-400 underline underline-offset-4 cursor-pointer mr-0'
                                        >
                                            https://github.com/nhahoang199?tab=repositories
                                        </Typography>
                                        {'|'}
                                        <Typography
                                            variant='paragraph'
                                            color='gray'
                                            className='text-gray-900 max-h-[120px] overflow-y-scroll scrollbar'
                                        >
                                            2022 - Nay
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

export default UserViewProjects
