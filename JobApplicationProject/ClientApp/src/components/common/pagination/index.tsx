import { useState } from 'react'
import { Button, IconButton } from '@material-tailwind/react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
interface PaginationProps {
    onPageChange: (pageNumber: number) => void
}
export function Pagination({ onPageChange }: PaginationProps) {
    const [active, setActive] = useState(1)
    const getItemProps = (index: number) =>
        ({
            variant: active === index ? 'filled' : 'text',
            color: 'gray',
            onClick: () => {
                setActive(index)
                onPageChange(index)
            },
            className: 'rounded-full'
        }) as any

    const next = () => {
        if (active === 5) return
        onPageChange(active + 1)
        setActive(active + 1)
    }

    const prev = () => {
        if (active === 1) return
        onPageChange(active - 1)
        setActive(active - 1)
    }
    return (
        <div className='flex items-center gap-4'>
            <Button
                variant='text'
                className='flex items-center gap-2 rounded-full'
                onClick={prev}
                disabled={active === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className='w-4 h-4' /> Previous
            </Button>
            <div className='flex items-center gap-2'>
                <IconButton {...getItemProps(1)}>1</IconButton>
                <IconButton {...getItemProps(2)}>2</IconButton>
                <IconButton {...getItemProps(3)}>3</IconButton>
                <IconButton {...getItemProps(4)}>4</IconButton>
                <IconButton {...getItemProps(5)}>5</IconButton>
            </div>
            <Button
                variant='text'
                className='flex items-center gap-2 rounded-full'
                onClick={next}
                disabled={active === 5}
            >
                Next
                <ArrowRightIcon strokeWidth={2} className='w-4 h-4' />
            </Button>
        </div>
    )
}
