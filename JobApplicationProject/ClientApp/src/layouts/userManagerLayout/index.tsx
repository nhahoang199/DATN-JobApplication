import { RootState } from 'apps/store'
import { Navbar, HRManageSideBar, UserManagerSideBar } from 'components'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

function UserManagerLayout() {
    const userRole = useSelector((state: RootState) => state.auth.user.role)
    return (
        <div className='scroll-smooth'>
            <Navbar />
            <div className='flex flex-row mt-14'>
                {userRole === 'BASICUSER' ? <UserManagerSideBar /> : <HRManageSideBar />}

                <div className='p-6 w-full h-[calc(100vh-3.6rem)] overflow-y-hidden !bg-blue-gray-50 '>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default UserManagerLayout
