import { useEffect, useState } from 'react'
import { CompanyQuickView, JobCategory, JobCommonInfo, JobDescription, JobRelated, JobTitle } from './components'
import { useParams } from 'react-router-dom'
import { IJobDetail } from 'models'
import { getJobDetail } from 'apis/jobApplicationAPI'
import { InternalErrorPage, LoadingPage } from 'pages'
import { useDispatch } from 'react-redux'
import { setNavigation } from 'apps/navBar.slice'
function JobDetails() {
    const { id } = useParams()
    const [jobDetails, setJobDetails] = useState<IJobDetail | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setNavigation(0))
    }, [dispatch])
    useEffect(() => {
        if (id === undefined || '') return
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await getJobDetail(id?.toString())
                setJobDetails(response.data)
                // debugger
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [id])

    console.log(jobDetails)
    if (loading) {
        return <LoadingPage />
    }

    if (error) {
        return <InternalErrorPage />
    }

    if (!jobDetails) {
        return <div>No job details available.</div>
    }

    // You can also use the following code if you want to use Redux thunk
    // useEffect(() => {
    //   dispatch(fetchJobDetails(jobId));
    // }, [dispatch, jobId]);

    return (
        <div className='flex flex-row justify-center w-full py-12 h-max gap-x-12 3xl:gap-x-24'>
            <section className='flex flex-col w-7/12 gap-y-10'>
                <JobTitle item={jobDetails} />
                <JobDescription />
                <JobRelated />
            </section>
            <section className='flex flex-col w-3/12 gap-y-10'>
                <CompanyQuickView item={jobDetails.company} />
                <JobCommonInfo item={jobDetails} />
                <JobCategory item={jobDetails} />
            </section>
        </div>
    )
}

export default JobDetails
