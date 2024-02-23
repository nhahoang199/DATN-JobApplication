import React, { useCallback, useEffect, useState } from 'react'
import { Button, ThemeProvider } from '@material-tailwind/react'
import {
    JobApplicationInfoSection,
    JobDescriptionInfoSection,
    JobDescDetailsTopSection,
    HRAcceptJobApplicationDialog,
    UserAcceptJobApplicationDialog,
    UserRejectDialog,
    HRRejectJobAppDialog,
    UserInfoSection
} from './components'
import mtTheme from 'const/MTtheme'
import { RootState, useAppDispatch } from 'apps/store'
import { setHRManagerTab } from 'apps/Tabs.slice'
import { useSelector } from 'react-redux'
import { getJobApplicationByIdAsync } from 'apps/jobApplication.slice'
import { useParams } from 'react-router-dom'
import LoadingPage from 'pages/loadingPage'
import { updateJobApplicationAPI } from 'apis/jobApplicationAPI'
import { toastError } from 'utils/function'

function JobApplicationDetails() {
    const userRole = useSelector((state: RootState) => state.auth.user.role)
    const [isHRAccept, setIsHRAccept] = useState(false)
    const [isHRReject, setIsHRReject] = useState(false)
    const [isUserAccept, setIsUserAccept] = useState(false)
    const [isUserReject, setIsUserReject] = useState(false)
    const dispatch = useAppDispatch()
    const getJobApplicationByIdStatus = useSelector(
        (state: RootState) => state.jobApplicationSlice.getJobApplicationById.status
    )
    const jobApplication = useSelector((state: RootState) => state.jobApplicationSlice.getJobApplicationById.data)
    const { id } = useParams()
    const getJobApplicationById = useCallback(async () => {
        // dispatch(showProgressLoading('Đang tải dữ liệu...'))
        try {
            await dispatch(getJobApplicationByIdAsync(id || ''))
        } finally {
        }
    }, [dispatch, id])
    const updateStatusJobApplication = useCallback(async () => {
        if (jobApplication.status === 0) {
            try {
                // const response = await updateJobApplicationAPI({
                //     id: jobApplication.id,
                //     status: 1
                // })
                // debugger
            } catch (error: any) {
                toastError(error)
            } finally {
            }
        }
    }, [jobApplication.status])
    useEffect(() => {
        dispatch(setHRManagerTab(6))
        getJobApplicationById()
        updateStatusJobApplication()
    }, [dispatch, getJobApplicationById, updateStatusJobApplication])

    // useEffect(() => {
    //     updateStatusJobApplication()
    // }, [updateStatusJobApplication])
    if (getJobApplicationByIdStatus === 'loading') return <LoadingPage />
    return (
        <div className='flex flex-col gap-y-5 max-h-[calc(100vh-6.5rem)] overflow-y-scroll scrollbar'>
            <JobDescDetailsTopSection item={jobApplication} />
            <JobApplicationInfoSection item={jobApplication} />
            {userRole === 'BASICUSER' ? (
                <JobDescriptionInfoSection item={jobApplication} />
            ) : (
                <UserInfoSection item={jobApplication} />
            )}

            <div className='flex items-center justify-start pb-4 border-t border-blue-gray-50 gap-x-5'>
                {userRole === 'BASICUSER' ? (
                    <div className={`${jobApplication.status === 2 ? '' : 'hidden'} gap-x-5 flex`}>
                        <Button
                            onClick={() => setIsUserAccept(true)}
                            className={`focus:!border-gold-900 focus:border-none rounded-sm !bg-gold-900 shadow-lg px-4  !border-gold-900  active:!border-gold-900 ${
                                !true ? 'hidden' : ''
                            }`}
                        >
                            Đồng ý làm
                        </Button>
                        <Button
                            variant='outlined'
                            onClick={() => setIsUserReject(true)}
                            // ripple={false}
                            // color='amber'
                            className={` focus:border-none rounded-sm shadow-lg px-4 `}
                        >
                            Từ chối làm
                        </Button>
                    </div>
                ) : (
                    <div
                        className={`${
                            jobApplication.status === 0 || jobApplication.status === 1 ? '' : 'hidden'
                        } gap-x-5 flex`}
                    >
                        <Button
                            onClick={() => setIsHRAccept(true)}
                            className={`focus:!border-gold-900 focus:border-none rounded-sm !bg-gold-900 shadow-lg px-4  !border-gold-900  active:!border-gold-900 ${
                                !true ? 'hidden' : ''
                            }`}
                        >
                            Đồng ý
                        </Button>
                        <Button
                            variant='outlined'
                            // ripple={false}
                            // color='amber'
                            onClick={() => setIsHRReject(true)}
                            className={` focus:border-none rounded-sm shadow-lg px-4 `}
                        >
                            Từ chối
                        </Button>
                    </div>
                )}
            </div>
            <ThemeProvider value={mtTheme}>
                <HRAcceptJobApplicationDialog
                    open={isHRAccept}
                    setOpen={setIsHRAccept}
                    jobApplicationId={jobApplication.id || ''}
                />{' '}
                <HRRejectJobAppDialog
                    open={isHRReject}
                    setOpen={setIsHRReject}
                    jobApplicationId={jobApplication.id || ''}
                />
                <UserAcceptJobApplicationDialog
                    open={isUserAccept}
                    setOpen={setIsUserAccept}
                    jobApplicationId={jobApplication.id || ''}
                />
                <UserRejectDialog
                    open={isUserReject}
                    setOpen={setIsUserReject}
                    jobApplicationId={jobApplication.id || ''}
                />
            </ThemeProvider>
        </div>
    )
}

export default JobApplicationDetails
