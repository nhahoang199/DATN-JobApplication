import { Navbar, HRManageSideBar, UserManagerSideBar } from 'components'
import { Outlet } from 'react-router-dom'

function UserManagerLayout() {
    return (
        <div className='scroll-smooth'>
            <Navbar />
            <div className='flex flex-row mt-14'>
                <UserManagerSideBar />
                {/* <HRManageSideBar /> */}
                <div className='p-6 w-full h-[calc(100vh-3.6rem)] overflow-y-hidden !bg-blue-gray-50 '>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default UserManagerLayout
