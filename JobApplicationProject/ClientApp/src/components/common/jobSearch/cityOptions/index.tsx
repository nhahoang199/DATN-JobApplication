import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Select, Option } from '@material-tailwind/react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function CityOptions() {
    return (
        <div className='relative w-2/12 h-11'>
            <MapPinIcon className='absolute z-10 w-5 h-5 text-gray-900 left-3 top-2' />
            <Select
                label='Chọn địa điểm'
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 }
                }}
                color='gray'
                className='text-gray-900 bg-white h-11'
                arrow={<ChevronDownIcon className='w-5 h-5 text-gray-900' />}
                labelProps={{
                    className: 'text-gray-900 pl-8'
                }}
                selected={(element) =>
                    element &&
                    React.cloneElement(element, {
                        disabled: true,
                        className: 'ml-8 flex items-center opacity-100 px-0 gap-2 pointer-events-none'
                    })
                }
            >
                <Option className='text-gray-900'>Hà Nội</Option>
                <Option className='text-gray-900'>Tp. Hồ Chí Minh</Option>
                <Option className='text-gray-900'>Tp. Đà Nẵng</Option>
                <Option className='text-gray-900'>Khác</Option>
            </Select>
        </div>
    )
}
