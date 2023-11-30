import { createBrowserRouter } from 'react-router-dom'
import { AdminLayout, UserLayout, UserManagerLayout } from './../layouts'
import { Suspense, lazy } from 'react'
import { LoadingPage, CreateJobForm } from 'pages'
// import { CompanyDescription, CompanyReview } from 'pages/companyDetails/components'
// import {
//     Login,
//     Register,
//     NotFound,
//     Home,
//     JobDetails,
//     JobSeeking,
//     InternalErrorPage,
//     CompanyListPage,
//     CompanyDetails
// } from './../pages'
const Login = lazy(() => import('./../pages/login'))
const Register = lazy(() => import('./../pages/register'))
const NotFound = lazy(() => import('./../pages/404 page'))
const Home = lazy(() => import('./../pages/home'))
const JobDetails = lazy(() => import('./../pages/jobDetails'))
const JobSeeking = lazy(() => import('./../pages/jobsSeeking'))
const InternalErrorPage = lazy(() => import('./../pages/500 page'))
const CompanyListPage = lazy(() => import('./../pages/companyListingPage'))
const CompanyDetails = lazy(() => import('./../pages/companyDetails'))
const CompanyReviewForm = lazy(() => import('./../pages/companyReviewForm'))
const JobApplyForm = lazy(() => import('../pages/jobApplyRequestForm'))
// const CompanyReview = lazy(() => import('./../pages/companyDetails/components/companyReview'))
const CompanyDescription = lazy(() => import('./../pages/companyDetails/components/companyDescription'))
const UserProfileManage = lazy(() => import('./../pages/userProfilepage'))
const JobCreated = lazy(() => import('../pages/jobCreatedListingPage'))
// const CreateJobForm = lazy(() => import('../pages/createJobForm'))
const CreateJobFormStep1 = lazy(() => import('../pages/createJobForm/components/createJobFormStep1'))

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
                        <CompanyListPage />
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
        )
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
                path: 'jobcreated',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <JobCreated />
                    </Suspense>
                )
            },
            {
                path: 'createdjob',
                element: (
                    // <Suspense fallback={<LoadingPage />}>
                    <CreateJobForm />
                    // </Suspense>
                ),
                children: [
                    {
                        index: true,
                        path: 'step=1',
                        element: (
                            <Suspense fallback={<LoadingPage />}>
                                <CreateJobFormStep1 />
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
