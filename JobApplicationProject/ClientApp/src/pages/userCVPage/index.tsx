import { useAppDispatch } from 'apps/store'
import { setUserManagerTab } from 'apps/Tabs.slice'
import React, { useEffect } from 'react'
import { UserCVSection, UserCoverLetter } from './components'
import mtTheme from './../../const/MTtheme'
import { ThemeProvider, Drawer, Typography, IconButton, Button } from '@material-tailwind/react'

function UserCVPage() {
    const dispatch = useAppDispatch()
    const [open, setOpen] = React.useState(false)
    useEffect(() => {
        dispatch(setUserManagerTab(3))
    }, [dispatch])
    const openDrawer = () => setOpen(true)
    const closeDrawer = () => setOpen(false)
    return (
        <div className='relative gap-y-5 flex flex-col'>
            <UserCVSection />
            <UserCoverLetter />
            <ThemeProvider value={mtTheme}>
                <Drawer
                    open={open}
                    className='p-4'
                    onClose={closeDrawer}
                    placement='right'
                    overlayProps={<div className='fixed top-0 right-0 left-0 bottom-0 bg-black-50/50'></div>}
                >
                    <div className='mb-6 flex items-center justify-between'>
                        <Typography variant='h5' color='blue-gray'>
                            Material Tailwind
                        </Typography>
                        <IconButton variant='text' color='blue-gray' onClick={closeDrawer}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={2}
                                stroke='currentColor'
                                className='h-5 w-5'
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </IconButton>
                    </div>
                    <Typography color='gray' className='mb-8 pr-4 font-normal'>
                        Material Tailwind features multiple React and HTML components, all written with Tailwind CSS
                        classes and Material Design guidelines.
                    </Typography>
                    <div className='flex gap-2'>
                        <Button size='sm' variant='outlined' onClick={() => setOpen(false)} className='rounded-sm'>
                            Cancel
                        </Button>
                        <Button size='sm' className='rounded-sm'>
                            Get Started
                        </Button>
                    </div>
                </Drawer>
            </ThemeProvider>
        </div>
    )
}

export default UserCVPage
