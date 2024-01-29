import { AdminSideBar, Navbar } from 'components'
import { Outlet, useOutlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='flex flex-row mt-14'>
                <AdminSideBar />
                <div className='p-6 w-full h-[calc(100vh-3.6rem)] overflow-y-hidden !bg-blue-gray-50 '>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
