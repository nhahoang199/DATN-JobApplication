import { Chip } from '@material-tailwind/react'
import React from 'react'

function JobCategory() {
    const data = [
        {
            title: 'Ngành nghề',
            items: ['IT']
        },
        {
            title: 'Kỹ năng',
            items: ['.NET', 'C#']
        },
        {
            title: 'Khu vực',
            items: ['Hà Nội', 'Thanh Xuân']
        },
    ]
    return (
        <div className='flex flex-col p-6 bg-white rounded-lg shadow-lg 3xl:p-8 gap-y-5'>
            {data.map((item, index) => (
                <div className='flex flex-col gap-y-4'>
                    <h2 className='text-lg font-bold border-left'>{item.title}</h2>
                    <div className="flex gap-x-2">
                        {item.items.map((item, index) => (
                            <Chip
                                variant='ghost'
                                value={item}
                                className='px-2 text-gray-900 bg-blue-gray-50 rounded-lg w-max !capitalize text-xs font-normal'
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default JobCategory