import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { ListItemPrefix, Avatar, Typography, ListItemSuffix, Chip, Tooltip } from '@material-tailwind/react'
import { myavatar } from 'assets'
import React from 'react'

function JobListItem(props: { item: any }) {
    // const { item } = props
    return (
        <>
            <div className='flex flex-row items-start w-full h-fit xl:p-2 3xl:p-4'>
                <ListItemPrefix>
                    <Avatar variant='rounded' alt='candice' src={myavatar} />
                </ListItemPrefix>
                <div>
                    <Typography variant='h6' color='blue-gray'>
                        Backend Dev
                    </Typography>
                    <Typography variant='small' color='gray' className='font-normal'>
                        Cong ty Avepoint
                    </Typography>
                </div>
                <ListItemSuffix className='flex flex-col items-start justify-center'>
                    <Chip
                        variant='ghost'
                        value='fulltime'
                        className='px-4 text-green-800 bg-gray-300 rounded-2xl w-max !capitalize '
                    />
                </ListItemSuffix>
            </div>
            <div className='flex flex-row w-full p-2 pt-1 3xl:p-4 3xl:pt-0'>
                <Chip
                    variant='ghost'
                    value='15 - 20 chẹo'
                    icon={<CurrencyDollarIcon className='text-sm' />}
                    className='px-4 mr-2 text-blue-gray-800 bg-gray-300 rounded-2xl w-max !capitalize font-semibold'
                />
                <Tooltip
                    content='Hà Nội'
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 }
                    }}
                >
                    <Chip
                        variant='ghost'
                        icon={<MapPinIcon className='text-sm text-blue-gray-800' />}
                        value='Hà Nhội'
                        className='!capitalize mr-2 px-4 text-blue-gray-800 bg-gray-300 rounded-2xl w-max font-semibold text-xs'
                    />
                </Tooltip>
            </div>
        </>
    )
}

export default JobListItem
