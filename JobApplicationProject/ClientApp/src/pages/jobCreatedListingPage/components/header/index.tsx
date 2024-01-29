import { UserPlusIcon } from '@heroicons/react/24/outline'
import { Typography, Button } from '@material-tailwind/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function JobCreatedListingHeader() {
    return (
        <div className='mb-4 mt-2 flex items-start justify-between gap-8'>
            <div className='pl-0 '>
                <Typography
                    variant='h4'
                    color='blue-gray'
                    className='block !bg-gradient-to-r !from-blue-gray-600 !to-gray-900 !bg-clip-text text-transparent font-bold'
                >
                    Việc làm của công ty bạn
                </Typography>
                <Typography color='gray' className='mt-1 font-normal'>
                    Xem tất cả việc làm đang tuyển của công ty bạn
                </Typography>
            </div>
            <div className='flex shrink-0 flex-row gap-2 '>
                <NavLink to='/manager/createjob/?step=1'>
                    <Button className='flex items-center gap-3 py-3 rounded-sm ' variant='gradient' size='sm'>
                        <UserPlusIcon strokeWidth={2} className='h-4 w-4' /> Tạo mới
                    </Button>
                </NavLink>
            </div>
        </div>
    )
}

export default JobCreatedListingHeader
