import { Typography } from '@material-tailwind/react'
import { QueueListIcon, UsersIcon, BriefcaseIcon, UserIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function JobCommonInfo() {
    const data = [
        {
            icon: <QueueListIcon className='w-5 h-5 text-gray-200' />,
            title: 'Cấp bậc',
            value: 'Thực tập sinh'
        },
        {
            icon: <FontAwesomeIcon icon={faBusinessTime} className='w-5 h-5 text-gray-200' />,
            title: 'Kinh nghiệm',
            value: 'Không yêu cầu kinh nghiệm'
        },
        {
            icon: <UsersIcon className='w-5 h-5 text-gray-200' />,
            title: 'Số lượng tuyển',
            value: '10 người'
        },
        {
            icon: <BriefcaseIcon className='w-5 h-5 text-gray-200' />,
            title: 'Hình thức làm việc',
            value: 'Toàn thời gian'
        },
        {
            icon: <UserIcon className='w-5 h-5 text-gray-200' />,
            title: 'Giới tính',
            value: 'Không yêu cầu'
        }
    ]
    return (
        <div className='flex flex-col p-6 bg-white rounded-lg shadow-lg 3xl:p-8 gap-y-5'>
            <h2 className='text-lg font-bold border-left'>Thông tin chung</h2>
            <div className='flex flex-col gap-y-4'>
                {data.map((item, index) => (
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-gray-800'>
                            {item.icon}
                        </div>
                        <div>
                            <Typography variant='small' className='text-gray-500'>
                                {item.title}
                            </Typography>
                            <Typography variant='h6' className=''>
                                {item.value}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default JobCommonInfo
