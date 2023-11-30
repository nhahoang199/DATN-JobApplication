import { useEffect } from 'react'
import CommonCompanyReview from './commonCompanyReview'
import CompanyReviewList from './companyReviewList'
import { setCompanyTab } from 'apps/Tabs.slice'
import { useAppDispatch } from 'apps/store'
function CompanyReview() {
    const dispatch = useAppDispatch()
    // useEffect(() => {
    //     dispatch(setCompanyTab(1))
    //     const companyTab = document.querySelector('#companyTabs')
    //     console.log(companyTab)
    // }, [dispatch])
    return (
        <div className='flex flex-col w-full gap-y-10'>
            <CommonCompanyReview />
            <CompanyReviewList />
        </div>
    )
}

export default CompanyReview
