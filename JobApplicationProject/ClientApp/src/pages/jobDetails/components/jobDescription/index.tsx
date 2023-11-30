import { Typography } from '@material-tailwind/react'
import React from 'react'

function JobDescription() {
    const data = [
        {
            title: 'Mô tả công việc',
            items: ['aaa', 'vvvv', 'cccc']
        },
        {
            title: 'Yêu cầu ứng viên',
            items: ['aaa', 'vvvv', 'cccc']
        },
        {
            title: 'Quyền lợi',
            items: ['aaa', 'vvvv', 'cccc']
        },
        {
            title: 'Địa điểm làm việc',
            items: 'Hà Nhội: 3 Lê Trọng tấn'
        }
    ]
    return (
        <div className='flex flex-col p-8 bg-white rounded-md shadow-lg gap-y-5'>
            <h2 className='text-lg font-bold border-left'>
                <Typography
                    variant='h4'
                    color='blue-gray'
                    className='w-full !line-clamp-2 cursor-default pb-4 border-b-2 border-dashed '
                >
                    <div className='b-title pl-2'>Thông tin chung</div>
                </Typography>
            </h2>
            <div className='flex flex-col gap-y-4'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col gap-y-2'>
                        <h3 className='text-base font-bold'>{item.title}</h3>
                        {Array.isArray(item.items) ? (
                            <ul className='pl-5 text-sm list-disc list-inside'>
                                {item.items.map((subItem, subIndex) => (
                                    <li key={subIndex}>{subItem}</li>
                                ))}
                            </ul>
                        ) : (
                            <div className='text-sm'>- {item.items}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default JobDescription
