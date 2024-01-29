import { ChevronUpDownIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/24/solid'
import { Avatar, Button, Card, CardBody, CardHeader, Chip, Tooltip, Typography } from '@material-tailwind/react'
import { threeDot } from 'assets'
import React from 'react'
const TABLE_HEAD = ['Tiêu đề', 'Cấp bậc', 'Số lượng tuyển', 'Được tạo bởi', 'Ngày tạo', 'Ngày hết hạn', 'Trạng thái']

const TABLE_ROWS = [
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        job: 'Manager',
        org: 'Organization',
        online: true,
        date: '23/04/18'
    }
]
function CompanyAddresses() {
    return (
        <Card className='h-full w-full rounded-md'>
            <CardBody className=' relative py-6 ml-10 mr-2 px-0'>
                <div className='flex flex-row justify-between pr-4'>
                    <Typography variant='h5' color='blue-gray' className='py-2 pb-4'>
                        Địa chỉ
                    </Typography>{' '}
                    <Button size='sm' className='rounded-sm my-2 flex flex-row items-center gap-1' variant='gradient'>
                        <PlusIcon className='w-4 h-4' />
                        Thêm
                    </Button>
                </div>
                <div className='p-0 mx-0 max-h-[calc(60vh-17.1rem)] overflow-y-scroll scrollbar'>
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
                                    <tr key={name}>
                                        <td
                                            className={`${classes} lg:max-w-[16rem] 3xl:max-w-[20rem] sticky left-0 bg-white z-10`}
                                        >
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
                                                <img
                                                    src={threeDot}
                                                    alt='3dot'
                                                    className='ml-4 h-4 w-4 cursor-pointer'
                                                ></img>
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
                                            <div className='flex items-center gap-3 cursor-pointer hover:scale-105 group group-hover:text-indigo-200'>
                                                <Avatar src={img} alt={name} size='sm' />
                                                <div className='flex flex-col'>
                                                    <Typography
                                                        variant='small'
                                                        color='blue-gray'
                                                        className='font-normal group-hover:text-indigo-200'
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
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    )
}

export default CompanyAddresses
