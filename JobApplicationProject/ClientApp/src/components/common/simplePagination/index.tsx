import React from 'react'
import { IconButton, Typography } from '@material-tailwind/react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

interface PaginationProps {
    onPageChange: (pageNumber: number) => void
    totalPage: number
}
export function SimplePagination({ onPageChange, totalPage }: PaginationProps) {
    const [active, setActive] = React.useState(1)

    const next = () => {
        if (active === 10) return
        onPageChange(active + 1)
        setActive(active + 1)
    }

    const prev = () => {
        if (active === 1) return
        onPageChange(active - 1)
        setActive(active - 1)
    }

    return (
        <div className='flex items-center gap-8 scale-90'>
            <IconButton size='sm' className='rounded-sm' variant='text' onClick={prev} disabled={active === 1}>
                <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' />
            </IconButton>
            <Typography color='gray' className='font-normal'>
                Page <strong className='text-gray-900'>{active}</strong> of{' '}
                <strong className='text-gray-900'>{totalPage}</strong>
            </Typography>
            <IconButton size='sm' className='rounded-sm' variant='text' onClick={next} disabled={active === totalPage}>
                <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
            </IconButton>
        </div>
    )
}
