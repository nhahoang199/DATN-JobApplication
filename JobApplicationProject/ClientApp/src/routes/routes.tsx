import { createBrowserRouter } from 'react-router-dom'
import { AdminLayout, UserLayout } from './../layouts'
import { Login, Register } from './../pages'

const router = createBrowserRouter([
    {
        path: '/admin',
        element: <AdminLayout />,
        
    },
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: 'auth/login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register /> 
            }
        ]
    },
    // {
    //     path: '/register',
    //     element: <Register />
    // },
    // {
    //     path: '/admin',
    //     element: <AdminLayout />
    //     // errorElement: <ErrorPage />,
    // },
])

export default router
