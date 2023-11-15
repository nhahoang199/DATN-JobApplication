import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import {
    Avatar,
    Chip,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Tooltip,
    Typography
} from '@material-tailwind/react'
import { myavatar } from 'assets'
import { JobSearch } from 'components/common'
import React from 'react'
import { NavLink } from 'react-router-dom'

function JobSeeking() {
    const data = [
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        }
    ]
    return (
        <section className='pb-10'>
            <div className='h-40 px-40 pt-10 bg-search'>
                <JobSearch />
            </div>
            <div className='px-20'>
                <div className='flex flex-row items-center justify-between w-full h-24 px-0 2xl:px-2 3xl:px-12'>
                    <Typography variant='h2' className=''>
                        Tìm thấy {data.length} việc làm:  
                    </Typography>
                </div>
                <List className='flex flex-col items-center px-20 align-middle gap-y-5 justify-items-center'>
                    {data.map((item, index) => (
                        <NavLink to = {item.name} className='w-full'>
                            <ListItem className='flex flex-col bg-white shadow-lg hover:bg-gray-200'>
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
                                            className='px-4 text-green-800 bg-blue-gray-100 rounded-2xl w-max !capitalize '
                                        />
                                    </ListItemSuffix>
                                </div>
                                <div className='flex flex-row w-full p-2 pt-4 3xl:p-4 3xl:pt-0'>
                                    <Chip
                                        variant='ghost'
                                        value='15 - 20 chẹo'
                                        icon={<CurrencyDollarIcon className='text-sm' />}
                                        className='px-4 mr-2 text-blue-gray-800 bg-gray-200 rounded-2xl w-max !capitalize font-semibold'
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
                                            className='!capitalize mr-2 px-4 text-blue-gray-800 bg-gray-200 rounded-2xl w-max font-semibold text-xs'
                                        />
                                    </Tooltip>
                                </div>
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
            </div>
        </section>
    )
}

export default JobSeeking
