import CommonCompanyReview from './commonCompanyReview'
import CompanyReviewList from './companyReviewList'
function CompanyReview() {
    return (
        <div className='flex flex-col w-full gap-y-10'>
            <CommonCompanyReview />
            <CompanyReviewList />
        </div>
    )
}

export default CompanyReview
