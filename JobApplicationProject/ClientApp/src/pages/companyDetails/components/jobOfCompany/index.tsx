import { List, ListItem, Typography, Input, Button } from '@material-tailwind/react'
import { JobListItem, SimplePagination } from 'components/common'
import React from 'react'
import { NavLink } from 'react-router-dom'

function JobOfCompany() {
    const data = [
        {
            title: 'Backend Developer',
            id: 'zxczxc'
        },
        {
            title: 'Backend Developer',
            id: 'zxczxc'
        },
        {
            title: 'Backend Developer',
            id: 'zxczxc'
        },
        {
            title: 'Backend Developer',
            id: 'zxczxc'
        }
    ]
    return (
        <div className='flex flex-col w-full min-w-0 break-words bg-white shadow-lg rounded-xl '>
            <div className='w-full px-8 pt-8'>
                <Typography
                    variant='h4'
                    color='blue-gray'
                    className='w-full !line-clamp-2 cursor-default pb-4 border-b-2 border-dashed'
                >
                    <div className='pl-2 b-title'> Tuyển dụng</div>
                </Typography>
            </div>
            <div className='flex justify-between w-full px-8 pt-4 pb-6 gap-x-5'>
                <div className='w-9/12 bg-white rounded-md h-11'>
                    <Input
                        label='Nhập tên công việc, vị trí ứng tuyển,...'
                        crossOrigin=''
                        className='h-12'
                        size='lg'
                        labelProps={{
                            className: '!text-gray-900 h-12'
                        }}
                        icon={
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-5 h-5'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                                />
                            </svg>
                        }
                    />
                </div>
                <Button variant='gradient' className='w-3/12'>
                    Tìm kiếm
                </Button>
            </div>
            <div className='w-full px-8 pb-6'>
                <List className='flex flex-col p-0 gap-y-4'>
                    {data.map((item, index) => (
                        <NavLink to={`/entity/details/${item.id}`} replace className='text-initial' key={index}>
                            <ListItem className='flex flex-col bg-gray-100 hover:bg-gray-200'>
                                <JobListItem item={item} />
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
            </div>
            <div className='flex justify-center w-full pt-4 pb-8 px-'>
                <SimplePagination
                    onPageChange={function (pageNumber: number): void {
                        throw new Error('Function not implemented.')
                    }}
                    totalPage={0}
                />
            </div>
        </div>
    )
}

export default JobOfCompany
