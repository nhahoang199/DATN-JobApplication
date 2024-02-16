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
            <CardBody className='flex flex-row w-full p-4 divide-x-2 rounded-md'>
                {' '}
                <div className='flex flex-col gap-y-5 grow '>
                    <Typography variant='paragraph' color='gray' className='-mb-3 italic text-gray-500 '>
                        Việc làm
                    </Typography>
                    <Typography variant='paragraph' color='gray' className='hidden -mb-3 italic text-gray-500 '>
                        Công ty
                    </Typography>
                    <Popover placement='bottom-start' open={openPopover} handler={setOpenPopover}>
                        <PopoverHandler {...triggers}>
                            <Typography
                                placeholder='Quản lý, thực tập,...'
                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5 cursor-pointer '
                            >
                                Backend Developer
                            </Typography>
                        </PopoverHandler>
                        <PopoverContent {...triggers} className='min-w-[700px]'>
                            <div className='flex items-center gap-4 pb-4 mb-4 border-b border-blue-gray-50'>
                                <div>
                                    <Typography variant='h6' color='blue-gray'>
                                        Backend Developer
                                    </Typography>
                                    <Typography variant='small' color='gray' className='font-medium text-blue-gray-500'>
                                        Full-time
                                    </Typography>
                                </div>
                            </div>
                            <div className='flex flex-col w-full pb-4 mt-0 gap-y-2'>
                                <div className='flex flex-row gap-x-6'>
                                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                                            <QueueListIcon className='w-5 h-5 text-blue-gray-800' />,
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='-mb-3 italic text-gray-500'
                                            >
                                                Cấp bậc
                                            </Typography>
                                            <Typography
                                                placeholder='Quản lý, thực tập,...'
                                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                            >
                                                {' '}
                                                {'Junior'}
                                            </Typography>{' '}
                                        </div>
                                    </div>

                                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                                            <FontAwesomeIcon
                                                icon={faBusinessTime}
                                                className='w-5 h-5 text-blue-gray-800'
                                            />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='-mb-3 italic text-gray-500'
                                            >
                                                Kinh nghiệm
                                            </Typography>
                                            <Typography
                                                placeholder='Quản lý, thực tập,...'
                                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                            >
                                                {' '}
                                                {'1 - 2 năm'}
                                            </Typography>{' '}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-x-6'>
                                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                                            <CurrencyDollarIcon className='w-5 h-5 text-blue-gray-800' />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='-mb-3 italic text-gray-500'
                                            >
                                                Mức lương
                                            </Typography>
                                            <Typography
                                                placeholder='Quản lý, thực tập,...'
                                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                            >
                                                {' '}
                                                {'10 - 15 triệu'}
                                            </Typography>{' '}
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                                            <UsersIcon className='w-5 h-5 text-blue-gray-800' />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='-mb-3 italic text-gray-500'
                                            >
                                                Số lượng
                                            </Typography>
                                            <Typography
                                                placeholder='Quản lý, thực tập,...'
                                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                            >
                                                {' '}
                                                {'4 người'}
                                            </Typography>{' '}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-x-6'>
                                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                                            <MapPinIcon className='w-5 h-5 text-blue-gray-800' />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='-mb-3 italic text-gray-500'
                                            >
                                                Địa chỉ
                                            </Typography>
                                            <Typography
                                                placeholder='Quản lý, thực tập,...'
                                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                            >
                                                {' '}
                                                {'Thanh Xuân - Hà Nội'}
                                            </Typography>{' '}
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                                            <UserIcon className='w-5 h-5 text-blue-gray-800' />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='-mb-3 italic text-gray-500'
                                            >
                                                Giới tính
                                            </Typography>
                                            <Typography
                                                placeholder='Quản lý, thực tập,...'
                                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                            >
                                                {' '}
                                                {'Không yêu cầu'}
                                            </Typography>{' '}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center w-full h-8 pt-2 border-t border-blue-gray-50'>
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
                    {/* <Popover placement='bottom-start' open={openPopover} handler={setOpenPopover}>
                        <PopoverHandler {...triggers}>
                            <div className='flex flex-row items-center gap-3'>
                                <Avatar src={companyavatar} alt={'company-avatar'} size='sm' />
                                <div className='flex flex-col'>
                                    <Typography
                                        variant='small'
                                        color='blue-gray'
                                        className='font-normal truncate cursor-pointer grow'
                                    >
                                        AvePoint VN
                                    </Typography>
                                </div>
                            </div>
                        </PopoverHandler>
                        <PopoverContent {...triggers} className='min-w-[700px]'>
                            <div className='flex items-center gap-4 pb-4 mb-4 border-b border-blue-gray-50'>
                                <div>
                                    <Typography variant='h6' color='blue-gray'>
                                        AvePoint VN
                                    </Typography>
                                    <Typography variant='small' color='gray' className='font-medium text-blue-gray-500'>
                                        Full-time
                                    </Typography>
                                </div>
                            </div>
                            <div className='flex flex-col w-full pb-4 mt-0 gap-y-2'>
                                <div className='flex flex-row gap-x-6'>
                                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                                            <UserGroupIcon className='w-5 h-5 text-blue-gray-800' />,
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='-mb-3 italic text-gray-500'
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

                                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                                            <CalendarDaysIcon className='w-5 h-5 text-blue-gray-800' />,
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='-mb-3 italic text-gray-500'
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
                                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                                            <GlobeAltIcon className='w-5 h-5 text-blue-gray-800' />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='-mb-3 italic text-gray-500'
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
                                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                                            <EnvelopeIcon className='w-5 h-5 text-blue-gray-800' />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <Typography
                                                variant='paragraph'
                                                color='gray'
                                                className='-mb-3 italic text-gray-500'
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
                            <div className='flex items-center justify-center w-full h-8 pt-2 border-t border-blue-gray-50'>
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
                    </Popover> */}
                </div>
                <div className='flex flex-col px-4 gap-y-5 min-w-min'>
                    <Typography variant='paragraph' color='gray' className='-mb-3 italic text-gray-500'>
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
                <div className='flex flex-col px-4 gap-y-5 min-w-min'>
                    <Typography variant='paragraph' color='gray' className='-mb-3 italic text-gray-500'>
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
