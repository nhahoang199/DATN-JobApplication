import { Typography } from '@material-tailwind/react'
import { setUserManagerTab } from 'apps/Tabs.slice'
import { RootState, useAppDispatch } from 'apps/store'
import React, { useCallback, useEffect } from 'react'
import { AppliedJobItem } from './components'
import { getAllJobApplicationAsync } from 'apps/jobApplication.slice'
import { showProgressLoading, hideProgressLoading } from 'apps/loading.slice'
import { useSelector } from 'react-redux'

function UserAppliedJobs() {
    const dispatch = useAppDispatch()
    const tableRow = useSelector((state: RootState) => state.jobApplicationSlice.getAllJobApplication.data)
    const pagination = useSelector((state: RootState) => state.jobApplicationSlice.getAllJobApplication)
    const handleGetAllJobApplication = useCallback(
        async (pageNumber: number) => {
            dispatch(showProgressLoading('Đang tải dữ liệu..'))
            try {
                await dispatch(
                    getAllJobApplicationAsync({
                        PageNumber: pageNumber,
                        PageSize: 25
                    })
                )
            } finally {
                dispatch(hideProgressLoading())
            }
        },
        [dispatch]
    )
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
        handleGetAllJobApplication(1)
    }, [dispatch, handleGetAllJobApplication])
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
                {tableRow.map((item, index) => {
                    return <AppliedJobItem item={item} index={index} />
                })}
            </div>
        </div>
    )
}

export default UserAppliedJobs
