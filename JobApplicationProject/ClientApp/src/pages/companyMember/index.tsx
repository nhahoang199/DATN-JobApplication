import React, { useEffect } from 'react'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    ThemeProvider
} from '@material-tailwind/react'
import { useAppDispatch } from 'apps/store'
import { setHRManagerTab } from 'apps/Tabs.slice'
import { SimplePagination } from 'components/common'
import { threeDot } from 'assets'
import { setOpenCreateHR } from 'apps/userProfile.slice'
import { CreateHRForm } from 'components'
import mtTheme, { mtTheme2 } from 'const/MTtheme'

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

const TABLE_HEAD = ['Tên', 'Vai trò', 'Email', 'Số điện thoại', 'Ngày sinh', 'Giới tính', 'Trạng thái']

const TABLE_ROWS = [
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        gender: 'Nam',
        org: 'Organization',
        online: true,
        date: '23/04/18'
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
        name: 'Alexa Liras',
        email: 'alexa@creative-tim.com',
        gender: 'Nữ',
        org: 'Developer',
        online: false,
        date: '23/04/18'
    }
]

export default function CompanyMember() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setHRManagerTab(3))
    }, [dispatch])
    return (
        <>
            <Card className='w-full h-full px-2 rounded-md shadow-lg shadow-gray-400'>
                <CardHeader floated={false} shadow={false} className='pt-0 rounded-none'>
                    <div className='flex items-start justify-between gap-8 mt-2 mb-4'>
                        <div className='pl-0 '>
                            <Typography
                                variant='h4'
                                color='blue-gray'
                                className='block !bg-gradient-to-r !from-blue-gray-600 !to-gray-900 !bg-clip-text text-transparent font-bold'
                            >
                                Nhân viên của công ty bạn
                            </Typography>
                            <Typography color='gray' className='mt-1 font-normal'>
                                Xem tất cả nhân viên của công ty bạn
                            </Typography>
                        </div>
                        <div className='flex flex-row gap-2 shrink-0 '>
                            <Button
                                className='flex items-center gap-3 py-3 bg-gray-900 rounded-sm'
                                size='sm'
                                variant='gradient'
                                onClick={() => dispatch(setOpenCreateHR(true))}
                            >
                                <UserPlusIcon strokeWidth={2} className='w-4 h-4' /> Tạo mới
                            </Button>
                        </div>
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
                            {TABLE_ROWS.map(({ img, name, email, gender, org, online, date }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1
                                const classes = isLast ? 'p-4 ' : 'p-4 border-b border-blue-gray-50 '

                                return (
                                    <tr key={name}>
                                        <td
                                            className={`${classes} sticky left-0 lg:max-w-[16rem] 3xl:max-w-[20rem]  bg-white z-10`}
                                        >
                                            <div className='flex items-center justify-between gap-3 cursor-pointer'>
                                                <div className='flex flex-row items-center gap-3 hover:scale-105'>
                                                    <Avatar src={img} alt={name} size='sm' />
                                                    <div className='flex flex-col'>
                                                        <Typography
                                                            variant='small'
                                                            color='blue-gray'
                                                            className='font-normal truncate cursor-pointer hover:text-indigo-700 grow'
                                                        >
                                                            {name}
                                                        </Typography>
                                                    </div>
                                                </div>
                                                <img
                                                    src={threeDot}
                                                    alt='3dot'
                                                    className='w-4 h-4 ml-4 cursor-pointer'
                                                ></img>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className='flex flex-col'>
                                                <Typography variant='small' color='blue-gray' className='font-normal'>
                                                    {gender}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant='small' color='blue-gray' className='font-normal'>
                                                {email}
                                            </Typography>
                                        </td>

                                        <td className={classes}>
                                            <Typography variant='small' color='blue-gray' className='font-normal'>
                                                {12}
                                            </Typography>
                                        </td>

                                        <td className={classes}>
                                            <Typography variant='small' color='blue-gray' className='font-normal'>
                                                {date}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            {/* <Tooltip content='Edit User'>
                                            <IconButton variant='text'>
                                                <PencilIcon className='w-4 h-4' />
                                            </IconButton>
                                        </Tooltip> */}
                                            <Typography variant='small' color='blue-gray' className='font-normal'>
                                                {gender}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className='w-max'>
                                                <Chip
                                                    variant='ghost'
                                                    size='sm'
                                                    value={online ? 'Đang hoạt động' : 'Ngừng hoạt động'}
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
                            totalPage={0}
                        />
                    </div>
                </CardFooter>
            </Card>
            <ThemeProvider value={mtTheme}>
                <CreateHRForm />
            </ThemeProvider>
        </>
    )
}
