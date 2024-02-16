import { Typography } from '@material-tailwind/react'
import { setUserManagerTab } from 'apps/Tabs.slice'
import { useAppDispatch } from 'apps/store'
import React, { useEffect } from 'react'
import { AppliedJobItem } from './components'

function UserAppliedJobs() {
    const dispatch = useAppDispatch()
    const fakeData = [
        {
            name: 'Backend Developer'
        },
        {
            name: 'Junior Front-End Developer'
        }
    ]
    useEffect(() => {
        dispatch(setUserManagerTab(6))
    }, [dispatch])
    return (
        <div className=''>
            <Typography
                variant='h3'
                color='blue-gray'
                className='mb-4 mr-4 block !bg-gradient-to-r !from-blue-gray-800 !to-gray-900 !bg-clip-text text-transparent'
            >
                Việc làm đã ứng tuyển
            </Typography>
            <div className='grid grid-cols-3 gap-5'>
                {fakeData.map((item, index) => {
                    return <AppliedJobItem item={item} />
                })}
            </div>
        </div>
    )
}

export default UserAppliedJobs
