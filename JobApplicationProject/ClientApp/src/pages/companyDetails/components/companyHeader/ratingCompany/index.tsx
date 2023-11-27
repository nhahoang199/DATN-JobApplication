import { Rating, Typography } from '@material-tailwind/react'
import { useState } from 'react'

export default function RatingCompany() {
    const [rated, setRated] = useState(4.5)

    return (
        <div className='flex flex-col items-center gap-y-0  font-bold text-blue-gray-500'>
            <div className='flex flex-row items-center text-xl'>
                <Typography variant='lead' color='blue-gray' className='font-bold uppercase'>
                    {rated}
                </Typography>

                <Rating
                    value={Math.round(rated)}
                    onChange={(value) => setRated(value)}
                    className='ml-2 h-full mb-1'
                    readonly
                />
            </div>
            <Typography color='blue-gray' className='font-medium text-sm text-blue-gray-500 mb-0'>
                Based on 134 Reviews
            </Typography>
        </div>
    )
}
