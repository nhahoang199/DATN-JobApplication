import React from 'react'
import { CompanyQuickView, JobCategory, JobCommonInfo, JobDescription, JobRelated, JobTitle } from 'components'
function JobDetails() {
    return (
        <div className='flex flex-row justify-center w-full py-12 h-max gap-x-12 3xl:gap-x-24'>
            <section className='flex flex-col w-7/12 gap-y-10'>
                <JobTitle />
                <JobDescription />
                <JobRelated />
            </section>
            <section className='flex flex-col w-3/12 gap-y-10'>
                <CompanyQuickView />
                <JobCommonInfo />
                <JobCategory />
            </section>
        </div>
    )
}

export default JobDetails
