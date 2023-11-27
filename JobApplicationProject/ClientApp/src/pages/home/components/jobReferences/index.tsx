import { useSelector } from 'react-redux'
import { JobItems } from './subComponents'
import { List, Typography } from '@material-tailwind/react'
import { useEffect } from 'react'
import { RootState, useAppDispatch } from 'apps/store'
import { fetchJobRefer } from 'apps/jobApplication.slice'
import { NavLink } from 'react-router-dom'
import { IJobApplicationModel } from 'models'
import { Pagination } from 'components/common'
function JobReferences() {
    const dispatch = useAppDispatch()
    const jobApplication = useSelector((state: RootState) => state.jobApplication)

    useEffect(() => {
        // Dispatch action để gọi API khi component được mount
        dispatch(fetchJobRefer({ PageNumber: 1, PageSize: 12 }))
    }, [dispatch])
    const handlePageChange = (pageNumber: number) => {
        // Khi trang thay đổi, dispatch action để gọi API với trang mới
        dispatch(fetchJobRefer({ PageNumber: pageNumber, PageSize: 12 }))
    }
    if (jobApplication.status === 'loading') {
        console.log('loading')
    }

    if (jobApplication.status === 'failed') {
        console.log('failed')
    }
    return (
        <section className='flex justify-center bg-gray-100'>
            <div className='!max-w-full container !w-full mx-4 px-0 xl:px-12 3xl:mx-24 3xl:px-4'>
                <div className='flex flex-row justify-between w-full h-24 px-0 2xl:px-2 3xl:px-12'>
                    <Typography variant='h2' className='w-1/5'>
                        Việc làm gợi ý
                    </Typography>
                </div>
                <List className='grid items-center grid-cols-1 gap-6 px-0 align-middle justify-items-center 3xl:gap-12 2xl:px-2 3xl:px-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4'>
                    {jobApplication.data.map((item: IJobApplicationModel, index: number) => (
                        <NavLink to={`jobs/details/${item.id}`} className='w-full' key={index}>
                            <JobItems item={item} />
                        </NavLink>
                    ))}
                </List>
                <div className='flex justify-center my-12'>
                    <Pagination onPageChange={handlePageChange} />
                </div>
            </div>
        </section>
    )
}

export default JobReferences
