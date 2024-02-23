import React, { useCallback, useEffect } from 'react'
import { Card, CardHeader, Typography, CardBody, Chip, CardFooter, Avatar, Tooltip } from '@material-tailwind/react'
import { RootState, useAppDispatch } from 'apps/store'
import { setHRManagerTab } from 'apps/Tabs.slice'
import { SimplePagination } from 'components/common'
import { myavatar, threeDot } from 'assets'
import { useNavigate } from 'react-router-dom'
import { hideProgressLoading, showProgressLoading } from 'apps/loading.slice'
import { getAllJobApplicationAsync } from 'apps/jobApplication.slice'
import { useSelector } from 'react-redux'
import { formatDisplayDate, getUserAvatar, getUserAvatar2, renderJobApplicationStatus } from 'utils/function'

// const TABS = [
//     {
//         label: 'All',
//         value: 'all'
//     },
//     {
//         label: 'Monitored',
//         value: 'monitored'
//     },
//     {
//         label: 'Unmonitored',
//         value: 'unmonitored'
//     }
// ]

const TABLE_HEAD = ['Việc làm', 'Người ứng tuyển', 'Ngày ứng tuyển', 'Trạng thái']

const TABLE_ROWS = [
    {
        img: myavatar,
        name: 'Trần Nha Hoàng',
        email: 'john@creative-tim.com',
        job: 'Manager',
        org: 'Backend Developer',
        online: true,
        date: '23/04/23'
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
        name: 'Alexa Liras',
        email: 'alexa@creative-tim.com',
        job: 'Programator',
        org: 'Backend Developer',
        online: true,
        date: '23/04/23'
    }
]

export default function JobAppliedCompanyListing() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const tableRow = useSelector((state: RootState) => state.jobApplicationSlice.getAllJobApplication.data)
    const pagination = useSelector((state: RootState) => state.jobApplicationSlice.getAllJobApplication)
    const handleGetAllJobApplication = useCallback(
        async (pageNumber: number) => {
            dispatch(showProgressLoading('Đang tải dữ liệu..'))
            try {
                await dispatch(
                    getAllJobApplicationAsync({
                        PageNumber: pageNumber,
                        PageSize: 25
                    })
                )
            } finally {
                dispatch(hideProgressLoading())
            }
        },
        [dispatch]
    )
    useEffect(() => {
        dispatch(setHRManagerTab(6))
        handleGetAllJobApplication(1)
    }, [dispatch, handleGetAllJobApplication])
    const onClick = (id: string | undefined | null) => {
        navigate(`/manager/jobapplied/details/${id}`, { replace: true })
    }

    return (
        <Card className='w-full h-full px-2 rounded-md shadow-lg shadow-gray-400'>
            <CardHeader floated={false} shadow={false} className='pt-0 rounded-none'>
                <div className='flex items-start justify-between gap-8 mt-2 mb-4'>
                    <div className='pl-0 '>
                        <Typography
                            variant='h4'
                            color='blue-gray'
                            className='block !bg-gradient-to-r !from-blue-gray-600 !to-gray-900 !bg-clip-text text-transparent font-bold'
                        >
                            Đơn ứng tuyển vào công ty bạn
                        </Typography>
                        <Typography color='gray' className='mt-1 font-normal'>
                            Xem tất cả đơn ứng tuyển
                        </Typography>
                    </div>
                    {/* <div className='flex flex-row gap-2 shrink-0 '>
                        <Button
                            className='flex items-center gap-3 py-3 bg-gray-900 rounded-sm'
                            size='sm'
                            variant='gradient'
                            onClick={() => dispatch(setOpenCreateHR(true))}
                        >
                            <UserPlusIcon strokeWidth={2} className='w-4 h-4' /> Tạo mới
                        </Button>
                    </div> */}
                </div>
                {/* <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
                    <Tabs value='all' className='w-full md:w-max'>
                        <TabsHeader>
                            {TABS.map(({ label, value }) => (
                                <Tab key={value} value={value}>
                                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>
                    <div className='w-full md:w-72'>
                        <Input
                            label='Search'
                            icon={<MagnifyingGlassIcon className='w-5 h-5' />}
                            crossOrigin={undefined}
                        />
                    </div>
                </div> */}
            </CardHeader>
            <CardBody className='p-0 mx-4 h-[calc(100vh-17.1rem)] overflow-y-scroll scrollbar'>
                <table className='w-full text-left table-auto min-w-max'>
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
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
                                        {/* {index !== TABLE_HEAD.length - 1 && (
                                            <ChevronUpDownIcon strokeWidth={2} className='w-4 h-4' />
                                        )} */}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableRow.map((item, index) => {
                            const isLast = index === tableRow.length - 1
                            const classes = isLast ? 'p-4 ' : 'p-4 border-b border-blue-gray-50 '

                            return (
                                <tr key={index} className='hover:bg-gray-200' onClick={() => onClick(item.id)}>
                                    <td className={`${classes} lg:max-w-[16rem] 3xl:max-w-[20rem]`}>
                                        <div className='flex flex-row items-center justify-between'>
                                            <Tooltip content={item.jobDescriptionName}>
                                                <Typography
                                                    variant='small'
                                                    color='blue-gray'
                                                    className='font-normal truncate grow'
                                                >
                                                    {item.jobDescriptionName}
                                                </Typography>
                                            </Tooltip>

                                            {/* <ChevronUpDownIcon strokeWidth={2} className='w-4 h-4' /> */}
                                            <img
                                                src={threeDot}
                                                alt='3dot'
                                                className='w-4 h-4 ml-4 cursor-pointer'
                                            ></img>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className='flex items-center gap-3 '>
                                            <Avatar src={getUserAvatar2(null, 0)} alt={'user avatar'} size='sm' />
                                            <div className='flex flex-col'>
                                                <Typography variant='small' color='blue-gray' className='font-normal '>
                                                    {item.userName}
                                                </Typography>
                                            </div>
                                        </div>
                                    </td>

                                    <td className={classes}>
                                        {/* <Tooltip content='Edit User'>
                            <IconButton variant='text'>
                                <PencilIcon className='w-4 h-4' />
                            </IconButton>
                        </Tooltip> */}
                                        <Typography variant='small' color='blue-gray' className='font-normal'>
                                            {formatDisplayDate(item.createdOn || '')}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <div className='w-max'>{renderJobApplicationStatus(item.status || 0)}</div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className='flex items-center justify-between p-4 pl-8 border-t border-blue-gray-50'>
                <Typography variant='small' color='blue-gray' className='font-normal'>
                    12 items
                </Typography>
                <div className='flex gap-2'>
                    {/* <Button className='flex items-center gap-3 py-3' size='sm' variant='outlined'>
                        <ChevronLeftIcon strokeWidth={2} className='w-4 h-4' />
                        Trang trước
                    </Button>
                    <Button className='flex items-center gap-3 py-3' size='sm' variant='outlined'>
                        Trang sau <ChevronRightIcon strokeWidth={2} className='w-4 h-4' />
                    </Button> */}
                    <SimplePagination
                        onPageChange={function (pageNumber: number): void {
                            throw new Error('Function not implemented.')
                        }}
                        totalPage={1}
                    />
                </div>
            </CardFooter>
        </Card>
    )
}
