import { createBrowserRouter } from 'react-router-dom'
import { AdminLayout, UserLayout, UserManagerLayout } from './../layouts'
import { Suspense, lazy } from 'react'
import { LoadingPage } from 'pages'
// import { CompanyDescription, CompanyReview } from 'pages/companyDetails/components'
// import {
//     Login,
//     Register,
//     NotFound,
//     Home,
//     JobDetails,
//     JobSeeking,
//     InternalErrorPage,
//     SearchCompanyPage,
//     CompanyDetails
// } from './../pages'
const Login = lazy(() => import('./../pages/login'))
const Register = lazy(() => import('./../pages/register'))
const NotFound = lazy(() => import('./../pages/404 page'))
const Home = lazy(() => import('./../pages/home'))
const JobDetails = lazy(() => import('./../pages/jobDetails'))
const JobSeeking = lazy(() => import('./../pages/jobsSeeking'))
const InternalErrorPage = lazy(() => import('./../pages/500 page'))
const SearchCompanyPage = lazy(() => import('./../pages/companyListingPage'))
const CompanyDetails = lazy(() => import('./../pages/companyDetails'))
const CompanyReviewForm = lazy(() => import('./../pages/companyReviewForm'))
const JobApplyForm = lazy(() => import('../pages/jobApplyRequestForm'))
// const CompanyReview = lazy(() => import('./../pages/companyDetails/components/companyReview'))
const CompanyDescription = lazy(() => import('./../pages/companyDetails/components/companyDescription'))
const UserProfileManage = lazy(() => import('./../pages/userProfilepage'))
const UserCVPage = lazy(() => import('./../pages/userCVPage'))
const UserAppliedJobs = lazy(() => import('./../pages/userAppliedJobs'))
const UserSavedJobs = lazy(() => import('./../pages/userSavedJobs'))
const CompanyProfilePage = lazy(() => import('./../pages/companyProfilePage'))
const HRProfilePage = lazy(() => import('./../pages/hrProfilePage'))
const CompanyMember = lazy(() => import('./../pages/companyMember'))
const JobCreated = lazy(() => import('../pages/jobCreatedListingPage'))
const JobAppliedCompanyListing = lazy(() => import('./../pages/jobAppliedCompanyListing'))
const JobApplicationDetails = lazy(() => import('./../pages/jobApplicationDetails'))
const CountryListingPage = lazy(() => import('./../pages/countryListingPage'))
const ProvinceListingPage = lazy(() => import('./../pages/provinceListingPage'))
const DistrictListingPage = lazy(() => import('./../pages/districtListingPage'))
const CommuneListingPage = lazy(() => import('./../pages/communeListingPage'))
const CompanyListingPage = lazy(() => import('./../pages/adminCompanyListingPage'))
const BasicUserListingPage = lazy(() => import('./../pages/basicUserListingPage'))
const HRListingPage = lazy(() => import('./../pages/hrListingPage'))
// const CreateJobForm = lazy(() => import('../pages/createJobForm'))
const CreateJobForm = lazy(() => import('../pages/createJobForm'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        errorElement: <InternalErrorPage />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <Home />
                    </Suspense>
                )
            },
            {
                path: 'jobs',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <JobSeeking />
                    </Suspense>
                )
            },
            {
                path: 'jobs/details/:id',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <JobDetails />
                    </Suspense>
                )
            },

            {
                path: 'company',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <SearchCompanyPage />
                    </Suspense>
                )
            },
            {
                path: 'company/details/:id',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <CompanyDetails />
                    </Suspense>
                ),
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<LoadingPage />}>
                                <CompanyDescription />
                            </Suspense>
                        )
                    }
                    // {
                    //     path: 'review',
                    //     element: (
                    //         <Suspense fallback={<LoadingPage />}>
                    //             <CompanyReview />
                    //         </Suspense>
                    //     )
                    // }
                ]
            }

            // {
            //     path: '*',
            //     element: (
            //         <Suspense fallback={<LoadingPage />}>
            //             <NotFound />
            //         </Suspense>
            //     )
            // }
        ]
    },
    {
        path: 'admin',
        element: (
            <Suspense fallback={<LoadingPage />}>
                <AdminLayout />
            </Suspense>
        ),
        children: [
            {
                path: 'countrylist',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <CountryListingPage />
                    </Suspense>
                )
            },
            {
                path: 'provincelist',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <ProvinceListingPage />
                    </Suspense>
                )
            },
            {
                path: 'districtlist',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <DistrictListingPage />
                    </Suspense>
                )
            },
            {
                path: 'communelist',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <CommuneListingPage />
                    </Suspense>
                )
            },
            {
                path: 'companylist',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <CompanyListingPage />
                    </Suspense>
                )
            },
            {
                path: 'basicuserlist',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <BasicUserListingPage />
                    </Suspense>
                )
            },
            {
                path: 'hruserlist',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <HRListingPage />
                    </Suspense>
                )
            },
            {
                path: 'companydetails/:id',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <CompanyProfilePage />
                    </Suspense>
                )
            },
        ]
    },
    {
        path: 'manager',
        element: <UserManagerLayout />,
        children: [
            {
                index: true,
                path: 'profile',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <UserProfileManage />
                    </Suspense>
                )
            },
            {
                index: true,
                path: 'cv',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <UserCVPage />
                    </Suspense>
                )
            },
            {
                path: 'jobcreated',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <JobCreated />
                    </Suspense>
                )
            },
            {
                path: 'appliedjobs',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <UserAppliedJobs />
                    </Suspense>
                )
            },
            {
                path: 'savedjobs',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <UserSavedJobs />
                    </Suspense>
                )
            },
            {
                path: 'companyprofile',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <CompanyProfilePage />
                    </Suspense>
                )
            },
            {
                path: 'hrprofile',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <HRProfilePage />
                    </Suspense>
                )
            },
            {
                path: 'companymember',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <CompanyMember />
                    </Suspense>
                )
            },
            {
                path: 'jobapplied',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <JobAppliedCompanyListing />
                    </Suspense>
                )
            },
            {
                path: 'jobapplied/details/:id',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <JobApplicationDetails />
                    </Suspense>
                )
            },
            {
                path: 'createjob',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <CreateJobForm />
                    </Suspense>
                )
                // children: [
                //     {
                //         index: true,
                //         path: 'step/:id',
                //         element: (
                //             <Suspense fallback={<LoadingPage />}>
                //                 <CreateJobFormStep1 />
                //             </Suspense>
                //         )
                //     }
                // ]
            }
        ]
    },
    {
        path: 'register',
        element: (
            <Suspense fallback={<LoadingPage />}>
                <Register />
            </Suspense>
        )
    },
    {
        path: 'login',
        element: (
            <Suspense fallback={<LoadingPage />}>
                <Login />
            </Suspense>
        )
        // errorElement: <ErrorPage />,
    },
    {
        path: 'jobs/apply/:id',
        element: (
            <Suspense fallback={<LoadingPage />}>
                <JobApplyForm />
            </Suspense>
        )
    },
    {
        path: 'company/review/:id',
        element: (
            <Suspense fallback={<LoadingPage />}>
                <CompanyReviewForm />
            </Suspense>
        )
    },
    {
        path: '*',
        element: (
            <Suspense fallback={<LoadingPage />}>
                <NotFound />
            </Suspense>
        )
    }
])

export default router
