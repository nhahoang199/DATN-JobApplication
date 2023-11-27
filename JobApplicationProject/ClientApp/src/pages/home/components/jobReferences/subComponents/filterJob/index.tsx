import React from 'react'
import { Drawer, Button, Typography, IconButton } from '@material-tailwind/react'
import { FunnelIcon } from '@heroicons/react/20/solid'

export function FilterJob() {
    const [open, setOpen] = React.useState(false)

    const openDrawer = () => setOpen(true)
    const closeDrawer = () => setOpen(false)

    return (
        <React.Fragment>
            <Button
                variant='gradient'
                onClick={openDrawer}
                className='flex items-center justify-center w-full duration-200 rounded-full bg-black-900 hover:scale-105 '
            >
                <FunnelIcon className='w-5 h-5 mr-4' />
                Lọc{' '}
            </Button>
            <Drawer open={open} onClose={closeDrawer} className='p-4'>
                <div className='flex items-center justify-between mb-6'>
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
                            className='w-5 h-5'
                        >
                            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </IconButton>
                </div>
                <Typography color='gray' className='pr-4 mb-8 font-normal'>
                    Material Tailwind features multiple React and HTML components, all written with Tailwind CSS classes
                    and Material Design guidelines.
                </Typography>
                <div className='fixed flex gap-2 bottom-4 left-40'>
                    <Button size='sm'>Áp dụng</Button>
                </div>
            </Drawer>
        </React.Fragment>
    )
}
