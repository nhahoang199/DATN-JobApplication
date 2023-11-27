import { Progress } from '@material-tailwind/react'
import React from 'react'

function RatingDetails() {
    const data = [
        {
            key: 5,
            value: 40
        },
        {
            key: 4,
            value: 30
        },
        {
            key: 3,
            value: 20
        },
        {
            key: 2,
            value: 10
        },
        {
            key: 1,
            value: 0
        }
    ]
    return (
        <div className='flex flex-col justify-between px-6 w-1/2'>
            {data.map((item, index) => {
                return (
                    <div className='flex flex-row items-center gap-x-3 text-sm font-bold ' key={index}>
                        <div>{item.key}</div>
                        <Progress value={item.value} color='amber' size='md' className='' />
                        <div className='flex flex-row'>
                            <span className='mr-1'>{item.value}</span> %
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default RatingDetails
