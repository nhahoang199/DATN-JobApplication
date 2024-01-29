import { setUserManagerTab } from 'apps/Tabs.slice'
import { RootState, useAppDispatch } from 'apps/store'
import { PersonalInformation, UserProfileTab } from './components'
import { useEffect, useState } from 'react'
import { ThemeProvider, Drawer, Typography, IconButton, Button } from '@material-tailwind/react'
import mtTheme from 'const/MTtheme'
import { useSelector } from 'react-redux'
import { setOpenEditUser } from 'apps/userProfile.slice'
import { EditUserForm } from 'components'

export default function UserProfileManage() {
    const [open, setOpen] = useState(false)
    const dispatch = useAppDispatch()
    const openEditUser = useSelector((state: RootState) => state.userProfile.openEditUser)
    useEffect(() => {
        dispatch(setUserManagerTab(2))
    }, [dispatch])
    const openDrawer = () => setOpen(true)
    const closeDrawer = () => setOpen(false)
    return (
        <>
            <div className='gap-y-5 flex flex-col'>
                <PersonalInformation />
                <UserProfileTab />
            </div>
            <ThemeProvider value={mtTheme}>
                <EditUserForm />
            </ThemeProvider>
        </>
    )
}
