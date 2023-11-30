import React, { useEffect } from 'react'
import { CompanyDetailsHeader, CompanyCommonInfo, CompanyContact, JobOfCompany, CompanyTabs } from './components'
import { useDispatch } from 'react-redux'
import { setNavigation } from 'apps/navBar.slice'
import { Outlet } from 'react-router-dom'

function CompanyDetails() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setNavigation(1))
    }, [dispatch])
    return (
        <>
            <section className='relative block h-[40vh]'>
                <div className='bg-profile-background absolute top-0 h-full w-full bg-search bg-cover bg-center' />
                <div className='absolute top-0 h-full w-full bg-black/75 bg-cover bg-center' />
            </section>
            <section className='relative bg-gray-100 py-16 px-4'>
                <div className='relative container mx-auto flex flex-col gap-y-5'>
                    <CompanyDetailsHeader />
                    <div className='flex flex-row justify-between w-full pt-4 h-max gap-x-10 3xl:gap-x-24'>
                        <div className='flex flex-col w-8/12 gap-y-10'>
                            <CompanyTabs />
                            {/* <Outlet /> */}
                            <JobOfCompany />
                        </div>
                        <div className='flex flex-col w-4/12 gap-y-10 mt-24'>
                            <CompanyCommonInfo />
                            <CompanyContact />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompanyDetails
