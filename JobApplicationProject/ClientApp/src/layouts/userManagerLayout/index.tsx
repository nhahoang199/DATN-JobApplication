import { UserManagerSideBar, Navbar } from 'components'
import React from 'react'
import { Outlet } from 'react-router-dom'

function UserManagerLayout() {
    return (
        <>
            <Navbar />
            <div className='flex flex-row mt-14'>
                <UserManagerSideBar />
                <div className='p-6 w-full h-[calc(100vh-3.6rem)] overflow-y-hidden bg-blue-gray-50 '>
                    {/* <div className='w-full h-full rounded-md overflow-y-hidden '> */}
                    <Outlet />
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default UserManagerLayout
