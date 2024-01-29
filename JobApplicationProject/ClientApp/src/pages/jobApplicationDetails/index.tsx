import React, { useEffect, useState } from 'react'
import { Button, ThemeProvider } from '@material-tailwind/react'
import {
    JobApplicationInfoSection,
    JobDescriptionInfoSection,
    JobDescDetailsTopSection,
    HRAcceptJobApplicationDialog,
    UserAcceptJobApplicationDialog,
    UserRejectDialog,
    HRRejectJobAppDialog
} from './components'
import mtTheme from 'const/MTtheme'
import { useAppDispatch } from 'apps/store'
import { setHRManagerTab } from 'apps/Tabs.slice'

function JobApplicationDetails() {
    const [isHRAccept, setIsHRAccept] = useState(false)
    const [isHRReject, setIsHRReject] = useState(false)
    const [isUserAccept, setIsUserAccept] = useState(false)
    const [isUserReject, setIsUserReject] = useState(false)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setHRManagerTab(6))
    }, [dispatch])
    return (
        <div className='flex flex-col gap-y-5 max-h-[calc(100vh-6.5rem)] overflow-y-scroll scrollbar'>
            <JobDescDetailsTopSection />
            <JobApplicationInfoSection />
            {/* <UserInfoSection /> */}
            <JobDescriptionInfoSection />
            <div className='flex items-center justify-start border-t border-blue-gray-50 gap-x-5 pb-4'>
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

                {/* <Button
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
                </Button> */}
            </div>
            <ThemeProvider value={mtTheme}>
                <HRAcceptJobApplicationDialog
                    open={isHRAccept}
                    setOpen={setIsHRAccept}
                    handleConfim={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                />{' '}
                <HRRejectJobAppDialog
                    open={isHRReject}
                    setOpen={setIsHRReject}
                    handleConfim={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                />
                <UserAcceptJobApplicationDialog
                    open={isUserAccept}
                    setOpen={setIsUserAccept}
                    handleConfim={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                />
                <UserRejectDialog
                    open={isUserReject}
                    setOpen={setIsUserReject}
                    handleConfim={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                />
            </ThemeProvider>
        </div>
    )
}

export default JobApplicationDetails
