import { createBrowserRouter } from 'react-router-dom'
import { AdminLayout, UserLayout, RootLayout } from './../layouts'
import { Login, Register, NotFound, Home, JobDetails, JobSeeking } from './../pages'

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: '',
                element: <UserLayout />,
                children: [
                    {
                        index: true,
                        element: <Home />
                    },
                    {
                        path: '/jobs',
                        element: <JobSeeking />
                    },
                    {
                        path: '/jobs/:id',
                        element: <JobDetails />
                    }
                ]
            },
            {
                path: '*',
                element: <NotFound />
            },
            {
                path: 'admin',
                element: <AdminLayout />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
                // errorElement: <ErrorPage />,
            }
        ]
    }
])

export default router
