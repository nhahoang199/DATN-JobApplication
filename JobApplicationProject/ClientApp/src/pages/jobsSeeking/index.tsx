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
import { setNavigation } from 'apps/navBar.slice'
import { avepoint, companyavatar, myavatar } from 'assets'
import { JobSearch } from 'components/common'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './index.scss'

function JobSeeking() {
    const data = [
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'Backend Developer',
            companyName: 'AvePoint VietNam'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'Junior FrontEnd Developer',
            companyName: 'AvePoint VietNam'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'Junior/Intern Project Manager',
            companyName: 'AvePoint VietNam'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            companyName: 'zxczxczxczxczx'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            companyName: 'zxczxczxczxczx'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            companyName: 'zxczxczxczxczx'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            companyName: 'zxczxczxczxczx'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            companyName: 'zxczxczxczxczx'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            companyName: 'zxczxczxczxczx'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            companyName: 'zxczxczxczxczx'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            companyName: 'zxczxczxczxczx'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            companyName: 'zxczxczxczxczx'
        }
    ]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setNavigation(0))
    }, [dispatch])
    return (
        <section className='pb-10'>
            <div className='relative px-40 pt-20 bg-center h-72 bg_jobs'>
                <h1 className='relative z-10 mb-4 text-4xl font-bold text-center text-gray-200'>
                    Tìm kiếm việc làm phù hợp với bạn
                </h1>
                <h1 className='relative z-10 mb-6 text-lg font-bold text-center text-gray-200'>
                    Việc làm tốt nhất tại
                    <span className='text-deep-purple-400'> Việt Nam</span>
                </h1>
                <div className='bg-jobs-overlay'></div>
                <JobSearch />
            </div>
            <div className='px-20'>
                <div className='flex flex-col items-center w-full h-24 px-12 my-8 divide-y-2 divide-gray-200 divide-solid'>
                    <div className='w-full mb-2'>
                        <Typography variant='h3' className='text-gray-800'>
                            Các việc làm tại Việt Nam
                        </Typography>
                    </div>
                    <div className='flex flex-row items-center w-full py-4'>
                        <Typography variant='paragraph' className='font-medium text-gray-800'>
                            Tìm thấy {data.length} việc làm
                        </Typography>
                        <Typography variant='paragraph' className='ml-4 text-gray-600'>
                            |
                        </Typography>
                        <Typography variant='paragraph' className='ml-4 font-medium text-gray-500'>
                            Hiển thị 1 - 12 trên xxx
                        </Typography>
                    </div>
                </div>
                <List className='flex flex-col items-center px-12 align-middle gap-y-5 justify-items-center'>
                    {data.map((item, index) => (
                        <NavLink to={`details/${item.id}`} className='w-full'>
                            <ListItem className='flex flex-col bg-white shadow-lg hover:bg-gray-200'>
                                <div className='flex flex-row items-start w-full h-fit xl:p-2 3xl:p-4'>
                                    <ListItemPrefix>
                                        <Avatar variant='rounded' alt='candice' src={avepoint} />
                                    </ListItemPrefix>
                                    <div>
                                        <Typography variant='h6' color='blue-gray'>
                                            {item.name}
                                        </Typography>
                                        <Typography variant='small' color='gray' className='font-normal'>
                                            {item.companyName}
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
                                        value='15 - 20 triệu'
                                        icon={<CurrencyDollarIcon className='text-sm' />}
                                        className='px-4 mr-6 text-blue-gray-800 bg-blue-gray-100 hover:bg-gray-400 rounded-2xl w-max !capitalize font-semibold'
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
                                            className='!capitalize mr-2 px-4 text-blue-gray-800 bg-blue-gray-100 hover:bg-gray-400 rounded-2xl w-max font-semibold text-xs'
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
