import { createBrowserRouter } from 'react-router-dom'
import { AdminLayout, UserLayout } from './../layouts'
import { Suspense, lazy } from 'react'
import { LoadingPage } from 'pages'
import { CompanyDescription, CompanyReview } from 'pages/companyDetails/components'
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
                    },
                    {
                        path: 'review',
                        element: (
                            <Suspense fallback={<LoadingPage />}>
                                <CompanyReview />
                            </Suspense>
                        )
                    }
                ]
            },
            {
                path: '*',
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <NotFound />
                    </Suspense>
                )
            }
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
        path: '*',
        element: (
            <Suspense fallback={<LoadingPage />}>
                <NotFound />
            </Suspense>
        )
    }
])

export default router
