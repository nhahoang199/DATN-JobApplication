import { ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { Typography, Tooltip, Avatar, Chip } from '@material-tailwind/react'
import { threeDot } from 'assets'
import React from 'react'

function JobCreatedListingTable(props: { TABLE_HEAD: any; TABLE_ROWS: any }) {
    const { TABLE_HEAD, TABLE_ROWS } = props
    return (
        <table className='w-full min-w-max table-auto text-left'>
            <thead>
                <tr>
                    {TABLE_HEAD.map((head: string, index: number) => (
                        <th
                            key={head}
                            className={`cursor-pointer  border-blue-gray-100 bg-blue-gray-50 p-4 transition-colors hover:bg-blue-gray-50 sticky -top-0 z-10 m-0 ${
                                index === 0 ? 'sticky left-0 z-20' : ''
                            }`}
                        >
                            <Typography
                                variant='small'
                                color='blue-gray'
                                className='flex items-center justify-between gap-2 font-normal leading-none opacity-70'
                            >
                                {head}{' '}
                                {index !== TABLE_HEAD.length - 1 && (
                                    <ChevronUpDownIcon strokeWidth={2} className='h-4 w-4' />
                                )}
                            </Typography>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {TABLE_ROWS.map(({ img, name, email, job, org, online, date }: any, index: number) => {
                    const isLast = index === TABLE_ROWS.length - 1
                    const classes = isLast ? 'p-4 ' : 'p-4 border-b border-blue-gray-50 '

                    return (
                        // <NavLink to={`details/${index}`}>
                        <tr key={name}>
                            <td className={`${classes} lg:max-w-[16rem] 3xl:max-w-[20rem] sticky left-0 bg-white z-10`}>
                                <div className='flex flex-row justify-between items-center'>
                                    <Tooltip content={org}>
                                        <Typography
                                            variant='small'
                                            color='indigo'
                                            className='font-normal underline truncate cursor-pointer grow'
                                        >
                                            {org}
                                        </Typography>
                                    </Tooltip>

                                    {/* <ChevronUpDownIcon strokeWidth={2} className='h-4 w-4' /> */}
                                    <img src={threeDot} alt='3dot' className='ml-4 h-4 w-4 cursor-pointer'></img>
                                </div>
                            </td>
                            <td className={classes}>
                                <div className='flex flex-col'>
                                    <Typography variant='small' color='blue-gray' className='font-normal'>
                                        {job}
                                    </Typography>
                                </div>
                            </td>
                            <td className={classes}>
                                <Typography variant='small' color='blue-gray' className='font-normal'>
                                    {12}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <div className='flex items-center gap-3 cursor-pointer hover:scale-105 group group-hover:text-indigo-700'>
                                    <Avatar src={img} alt={name} size='sm' />
                                    <div className='flex flex-col'>
                                        <Typography
                                            variant='small'
                                            color='blue-gray'
                                            className='font-normal group-hover:text-indigo-700'
                                        >
                                            {name}
                                        </Typography>
                                    </div>
                                </div>
                            </td>

                            <td className={classes}>
                                <Typography variant='small' color='blue-gray' className='font-normal'>
                                    {date}
                                </Typography>
                            </td>
                            <td className={classes}>
                                {/* <Tooltip content='Edit User'>
                            <IconButton variant='text'>
                                <PencilIcon className='h-4 w-4' />
                            </IconButton>
                        </Tooltip> */}
                                <Typography variant='small' color='blue-gray' className='font-normal'>
                                    {date}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <div className='w-max'>
                                    <Chip
                                        variant='ghost'
                                        size='sm'
                                        value={online ? 'Mới' : 'Bản nháp'}
                                        color={online ? 'green' : 'blue-gray'}
                                        className='font-medium text-gray-900 capitalize'
                                    />
                                </div>
                            </td>
                        </tr>
                        // </NavLink>
                    )
                })}
            </tbody>
        </table>
    )
}

export default JobCreatedListingTable
