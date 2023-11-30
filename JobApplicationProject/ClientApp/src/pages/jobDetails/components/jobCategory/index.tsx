import { Chip } from '@material-tailwind/react'
import React from 'react'
import { IJobDetail } from 'models'

function JobCategory(props: { item: IJobDetail }) {
    const { item } = props
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
            items: [item.company.address.provinceName, item.company.address.districtName]
        }
    ]
    return (
        <div className='flex flex-col p-6 bg-white rounded-md shadow-lg 3xl:p-8 gap-y-5'>
            {data.map((item, index) => (
                <div className='flex flex-col gap-y-4'>
                    <h2 className='text-lg font-bold border-left'>{item.title}</h2>
                    <div className='flex gap-x-2'>
                        {item.items.map((item, index) => (
                            <Chip
                                variant='ghost'
                                value={item}
                                className='px-2 text-gray-900 bg-blue-gray-50 rounded-md w-max !capitalize text-xs font-normal'
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default JobCategory
