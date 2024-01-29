import { faBusinessTime } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    ArrowTopRightOnSquareIcon,
    CalendarDaysIcon,
    CurrencyDollarIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    MapPinIcon,
    QueueListIcon,
    UserGroupIcon,
    UserIcon,
    UsersIcon
} from '@heroicons/react/24/solid'
import {
    Avatar,
    Card,
    CardBody,
    Chip,
    Popover,
    PopoverContent,
    PopoverHandler,
    Typography
} from '@material-tailwind/react'
import { companyavatar } from 'assets'
import React from 'react'
import { NavLink } from 'react-router-dom'

function JobDescDetailsTopSection() {
    const [openPopover, setOpenPopover] = React.useState(false)

    const triggers = {
        onMouseEnter: () => setOpenPopover(true),
        onMouseLeave: () => setOpenPopover(false)
    }
    return (
        <Card className='rounded-md '>
            <CardBody className='flex flex-row divide-x-2 w-full p-4 rounded-md'>
                {' '}
                <div className='flex flex-col gap-y-5 grow '>
                    <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3 hidden'>
                        Việc làm
                    </Typography>
                    <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                        Công ty
                    </Typography>
                    <Popover placement='bottom-start' open={openPopover} handler={setOpenPopover}>
                        <PopoverHandler {...triggers}>
                            <Typography
                                placeholder='Quản lý, thực tập,...'
                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5 cursor-pointer hidden'
                            >
                                Backend Developer
                            </Typography>
                        </PopoverHandler>
                        <PopoverContent {...triggers} className='min-w-[700px] hidden'>
                            <div className='mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4'>
                                <div>
                                    <Typography variant='h6' color='blue-gray'>
                                        Backend Developer
                                    </Typography>
                                    <Typography variant='small' color='gray' className='font-medium text-blue-gray-500'>
                                        Full-time
                                    </Typography>
                                </div>
                            </div>
                            <div className='mt-0 w-full flex flex-col gap-y-2 pb-4'>
                                <div className='flex flex-row gap-x-6'>
                                    <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                        <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                            <QueueListIcon className='w-5 h-5 text-blue-gray-800' />,
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='text-gray-500 italic -mb-3'
                                            >
                                                Cấp bậc
                                            </Typography>
                                            <Typography
                                                placeholder='Quản lý, thực tập,...'
                                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                            >
                                                {' '}
                                                {'Thứ 2 - Thứ 6'}
                                            </Typography>{' '}
                                        </div>
                                    </div>

                                    <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                        <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                            <FontAwesomeIcon
                                                icon={faBusinessTime}
                                                className='w-5 h-5 text-blue-gray-800'
                                            />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='text-gray-500 italic -mb-3'
                                            >
                                                Kinh nghiệm
                                            </Typography>
                                            <Typography
                                                placeholder='Quản lý, thực tập,...'
                                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                            >
                                                {' '}
                                                {'Thứ 2 - Thứ 6'}
                                            </Typography>{' '}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-x-6'>
                                    <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                        <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                            <CurrencyDollarIcon className='h-5 w-5 text-blue-gray-800' />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='text-gray-500 italic -mb-3'
                                            >
                                                Mức lương
                                            </Typography>
                                            <Typography
                                                placeholder='Quản lý, thực tập,...'
                                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                            >
                                                {' '}
                                                {'Thứ 2 - Thứ 6'}
                                            </Typography>{' '}
                                        </div>
                                    </div>
                                    <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                        <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                            <UsersIcon className='h-5 w-5 text-blue-gray-800' />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='text-gray-500 italic -mb-3'
                                            >
                                                Số lượng
                                            </Typography>
                                            <Typography
                                                placeholder='Quản lý, thực tập,...'
                                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                            >
                                                {' '}
                                                {'Thứ 2 - Thứ 6'}
                                            </Typography>{' '}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-x-6'>
                                    <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                        <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                            <MapPinIcon className='h-5 w-5 text-blue-gray-800' />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='text-gray-500 italic -mb-3'
                                            >
                                                Địa chỉ
                                            </Typography>
                                            <Typography
                                                placeholder='Quản lý, thực tập,...'
                                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                            >
                                                {' '}
                                                {'Thứ 2 - Thứ 6'}
                                            </Typography>{' '}
                                        </div>
                                    </div>
                                    <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                        <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                            <UserIcon className='h-5 w-5 text-blue-gray-800' />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='text-gray-500 italic -mb-3'
                                            >
                                                Giới tính
                                            </Typography>
                                            <Typography
                                                placeholder='Quản lý, thực tập,...'
                                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                            >
                                                {' '}
                                                {'Thứ 2 - Thứ 6'}
                                            </Typography>{' '}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center w-full h-8 border-t border-blue-gray-50 pt-2'>
                                <NavLink
                                    to={`/company/details/`}
                                    replace
                                    className='duration-200 text-initial hover:scale-105 hover:text-indigo-400'
                                >
                                    <Typography className='flex items-center justify-center w-full text-base text-indigo-600 underline truncate 3xl:max-w-350 xl:max-w-250'>
                                        Xem thông tin{' '}
                                        <ArrowTopRightOnSquareIcon className='inline-block w-4 h-4 ml-2 text-indigo-600' />
                                    </Typography>
                                </NavLink>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <Popover placement='bottom-start' open={openPopover} handler={setOpenPopover}>
                        <PopoverHandler {...triggers}>
                            <div className='flex flex-row items-center gap-3'>
                                <Avatar src={companyavatar} alt={'company-avatar'} size='sm' />
                                <div className='flex flex-col'>
                                    <Typography
                                        variant='small'
                                        color='blue-gray'
                                        className='font-normal  truncate cursor-pointer grow'
                                    >
                                        AvePoint VN
                                    </Typography>
                                </div>
                            </div>
                        </PopoverHandler>
                        <PopoverContent {...triggers} className='min-w-[700px]'>
                            <div className='mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4'>
                                <div>
                                    <Typography variant='h6' color='blue-gray'>
                                        AvePoint VN
                                    </Typography>
                                    <Typography
                                        variant='small'
                                        color='gray'
                                        className='font-medium text-blue-gray-500 hidden'
                                    >
                                        Full-time
                                    </Typography>
                                </div>
                            </div>
                            <div className='mt-0 w-full flex flex-col gap-y-2 pb-4'>
                                <div className='flex flex-row gap-x-6'>
                                    <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                        <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                            <UserGroupIcon className='w-5 h-5 text-blue-gray-800' />,
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='text-gray-500 italic -mb-3'
                                            >
                                                Quy mô
                                            </Typography>
                                            <Typography
                                                placeholder='Quản lý, thực tập,...'
                                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                            >
                                                {'200 người'}
                                            </Typography>{' '}
                                        </div>
                                    </div>

                                    <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                        <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                            <CalendarDaysIcon className='w-5 h-5 text-blue-gray-800' />,
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='text-gray-500 italic -mb-3'
                                            >
                                                Ngày làm việc
                                            </Typography>
                                            <Typography
                                                placeholder='Quản lý, thực tập,...'
                                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                            >
                                                {'Thứ 2 - Thứ 6'}
                                            </Typography>{' '}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-x-6'>
                                    <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                        <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                            <GlobeAltIcon className='h-5 w-5 text-blue-gray-800' />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='text-gray-500 italic -mb-3'
                                            >
                                                Website
                                            </Typography>
                                            <Typography
                                                placeholder='Quản lý, thực tập,...'
                                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                            >
                                                {'Thứ 2 - Thứ 6'}
                                            </Typography>{' '}
                                        </div>
                                    </div>
                                    <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                                        <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                            <EnvelopeIcon className='h-5 w-5 text-blue-gray-800' />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='text-gray-500 italic -mb-3'
                                            >
                                                Email
                                            </Typography>
                                            <Typography
                                                placeholder='Quản lý, thực tập,...'
                                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                            >
                                                {' '}
                                                {'Thứ 2 - Thứ 6'}
                                            </Typography>{' '}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center w-full h-8 border-t border-blue-gray-50 pt-2'>
                                <NavLink
                                    to={`/company/details/`}
                                    replace
                                    className='duration-200 text-initial hover:scale-105 hover:text-indigo-400'
                                >
                                    <Typography className='flex items-center justify-center w-full text-base text-indigo-600 underline truncate 3xl:max-w-350 xl:max-w-250'>
                                        Xem trang công ty
                                        <ArrowTopRightOnSquareIcon className='inline-block w-4 h-4 ml-2 text-indigo-600' />
                                    </Typography>
                                </NavLink>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
                <div className='flex flex-col gap-y-5 min-w-min px-4'>
                    <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                        Trạng thái
                    </Typography>
                    <Chip
                        variant='ghost'
                        size='sm'
                        value={'Bản nháp'}
                        color={'blue-gray'}
                        className='font-medium text-gray-900 capitalize w-fit'
                    />
                </div>
                <div className='flex flex-col gap-y-5 min-w-min px-4'>
                    <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                        Ngày ứng tuyển
                    </Typography>
                    <Typography
                        placeholder='Quản lý, thực tập,...'
                        className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900  !bg-white h-5 cursor-default'
                    >
                        22/12/2023
                    </Typography>{' '}
                </div>
            </CardBody>
        </Card>
    )
}

export default JobDescDetailsTopSection
