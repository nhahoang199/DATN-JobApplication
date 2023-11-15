import { JobTrending } from './subComponents'
import { JobSearch } from 'components/common'
import { Input } from '@material-tailwind/react'

function SearchSection() {
    return (
        <section className='flex items-center justify-center bg-gray-100 h-600' id='job-ref'>
            <div className='container shadow-xl 3xl:mx-auto rounded-3xl p-14 bg-opacity-90 bg-search'>
                <h1 className='mb-12 text-4xl font-bold text-center text-gray-900'>
                    Tìm kiếm việc làm hoàn hảo cho sự nghiệp của bạn.
                </h1>
                <JobSearch/>
                <JobTrending />
            </div>
        </section>
    )
}

export default SearchSection
