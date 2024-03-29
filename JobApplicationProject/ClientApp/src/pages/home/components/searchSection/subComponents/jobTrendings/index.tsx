import React from 'react'
import { Button } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'

function JobTrending() {
    const sampleData = [
        {
            name: 'Java'
        },
        {
            name: 'React'
        },
        {
            name: 'Business Analyst'
        },
        {
            name: '.NET'
        },
        {
            name: 'Dynamic 365 CRM'
        }
    ]
    return (
        <div className='flex items-center gap-4'>
            <p className='font-bold text-black-1000'>Xu hướng: </p>
            {sampleData.map((item, index) => {
                return (
                    <NavLink to='#buttons-with-link'>
                        <Button
                            variant='gradient'
                            className='duration-200 rounded-full hover:scale-105 !bg-gradient-to-r from-blue-gray-700 to-gray-900'
                        >
                            {item.name}
                        </Button>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default JobTrending
