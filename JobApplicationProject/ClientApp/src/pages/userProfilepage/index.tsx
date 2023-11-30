import { setUserManagerTab } from 'apps/Tabs.slice'
import { useAppDispatch } from 'apps/store'
import { UserProfileTab } from './components'
import { useEffect } from 'react'

export default function UserProfileManage() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setUserManagerTab(2))
    }, [dispatch])
    return (
        <form className='px-6  relative bg-white shadow-xl shadow-gray-400'>
            {/* <div className='fixed bg-white z-10 w-fit '> */}
            <UserProfileTab />
            {/* </div> */}
        </form>
    )
}
