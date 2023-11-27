import React from 'react'
import JobSearch from '../../../../components/common/jobSearch'
import { JobTrending } from './subComponents'

function SearchSection() {
    return (
        <section className='flex items-center justify-center bg-gray-100 h-600 scale-90' id='job-ref'>
            <div className='container shadow-xl 3xl:mx-auto rounded-3xl p-14 bg-search relative overflow-hidden bg-opacity-50'>
                {/* <div className='px-40 pt-20 pb-10 h-72 bgCompanySearch relative'> */}
                {/* <div className='bg-jobs-overlay'></div> */}
                {/* </div> */}
                <h1 className='mb-12 text-4xl font-bold text-center text-gray-900 relative'>
                    Tìm kiếm việc làm hoàn hảo cho sự nghiệp của bạn.
                </h1>
                <JobSearch />
                <JobTrending />
            </div>
        </section>
    )
}

export default SearchSection
