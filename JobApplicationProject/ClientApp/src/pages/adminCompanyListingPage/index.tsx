import React, { useCallback, useEffect } from 'react'
import {
    CheckCircleIcon,
    EllipsisVerticalIcon,
    NoSymbolIcon,
    PencilIcon,
    TrashIcon,
    UserPlusIcon
} from '@heroicons/react/24/solid'
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    ThemeProvider,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList
} from '@material-tailwind/react'
import { RootState, useAppDispatch } from 'apps/store'
import { setAdminSidebarTab } from 'apps/Tabs.slice'
import { ConfirmDialog, SimplePagination } from 'components/common'
import { CreateCompanyForm, EditCompanyForm } from 'components'
import mtTheme, { mtThemeLayer2 } from 'const/MTtheme'
import {
    activateCompanyAsync,
    deactivateCompanyAsync,
    getAllCompanyAsync,
    setEditCompanyData,
    setOpenAdminEditCompany,
    setOpenCreateCompany,
    updateCompanyAsync
} from 'apps/companyProfile.slice'
import AddAddressDrawerForm from 'components/addAddressDrawerForm'
import { showProgressLoading, hideProgressLoading } from 'apps/loading.slice'
import { formatDisplayDate, toastError, toastSuccess } from 'utils/function'
import { companyavatar } from 'assets'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

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

const TABLE_HEAD = ['Tên công ty', 'CRN', 'Email', 'Ngày thành lập', 'Ngày tạo', 'Trạng thái']

export default function CompanyListingPage() {
    const dispatch = useAppDispatch()
    const [openMenu, setOpenMenu] = React.useState<null | number>()
    const [openDeactivate, setOpenDeactivate] = React.useState<boolean>(false)
    const [selectItemDeactivate, setSelectItemDeactivate] = React.useState<string>()
    const [openActivate, setOpenActivate] = React.useState<boolean>(false)
    const [selectItemActivate, setSelectItemActivate] = React.useState<string>()
    const tableRow = useSelector((state: RootState) => state.companyProfileSlice.data)
    const pageNumber = useSelector((state: RootState) => state.companyProfileSlice.paginationObject.currentPage)
    const pagination = useSelector((state: RootState) => state.companyProfileSlice.paginationObject)

    const handleGetAllCompany = useCallback(
        async (pageNumber: number) => {
            dispatch(showProgressLoading('Đang tải dữ liệu..'))
            try {
                await dispatch(
                    getAllCompanyAsync({
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
        dispatch(setAdminSidebarTab(1))
        handleGetAllCompany(1)
    }, [dispatch, handleGetAllCompany])
    const handlePageChange = (pageNumber: number) => {
        // Khi trang thay đổi, dispatch action để gọi API với trang mới
        handleGetAllCompany(pageNumber)
    }
    const handleOpenMenu = (index: number) => {
        setOpenMenu(openMenu === index ? null : index)
    }
    const handleActivate = async (id: string) => {
        if (id !== '') {
            try {
                dispatch(showProgressLoading('Đang kích hoạt..'))
                await dispatch(activateCompanyAsync(id || ''))
            } finally {
                dispatch(hideProgressLoading())
                // handleGetAllCommunes(pagination.currentPage)
                await dispatch(
                    getAllCompanyAsync({
                        PageNumber: pageNumber,
                        PageSize: 25
                    })
                )
            }
        }
    }
    const handleDeactivate = async (id: string) => {
        if (id !== '') {
            try {
                dispatch(showProgressLoading('Đang vô hiệu hóa..'))
                await dispatch(deactivateCompanyAsync(id || ''))
            } finally {
                dispatch(hideProgressLoading())
                // handleGetAllCommunes(pagination.currentPage)
                await dispatch(
                    getAllCompanyAsync({
                        PageNumber: pageNumber,
                        PageSize: 25
                    })
                )
            }
        }
    }
    return (
        <>
            <Card className='h-full w-full rounded-md px-2 shadow-lg shadow-gray-400'>
                <CardHeader floated={false} shadow={false} className='rounded-none pt-0'>
                    <div className='mb-4 mt-2 flex items-start justify-between gap-8'>
                        <div className='pl-0 '>
                            <Typography
                                variant='h4'
                                color='blue-gray'
                                className='block !bg-gradient-to-r !from-blue-gray-600 !to-gray-900 !bg-clip-text text-transparent font-bold'
                            >
                                Danh sách công ty
                            </Typography>
                            <Typography color='gray' className='mt-1 font-normal'>
                                Xem tất cả công ty
                            </Typography>
                        </div>
                        <div className='flex shrink-0 flex-row gap-2 '>
                            <Button
                                className='flex items-center gap-3 py-3 rounded-sm bg-gray-900'
                                size='sm'
                                variant='gradient'
                                onClick={() => dispatch(setOpenCreateCompany(true))}
                            >
                                <UserPlusIcon strokeWidth={2} className='h-4 w-4' /> Tạo mới
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
                            icon={<MagnifyingGlassIcon className='h-5 w-5' />}
                            crossOrigin={undefined}
                        />
                    </div>
                </div> */}
                </CardHeader>
                <CardBody className='p-0 mx-4 h-[calc(100vh-17.1rem)] overflow-y-scroll scrollbar'>
                    <table className='w-full min-w-max table-auto text-left'>
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
                                            <ChevronUpDownIcon strokeWidth={2} className='h-4 w-4' />
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
                                    <tr key={index}>
                                        <td
                                            className={`${classes} sticky left-0 lg:max-w-[16rem] 3xl:max-w-[20rem]  bg-white z-10`}
                                        >
                                            <div className='flex items-center gap-3 cursor-pointer  justify-between'>
                                                <NavLink to={`/admin/companydetails/${item.id}`}>
                                                    <div className='flex flex-row items-center gap-3 hover:scale-105'>
                                                        <Avatar src={companyavatar} alt={item.name} size='sm' />
                                                        <div className='flex flex-col'>
                                                            <Typography
                                                                variant='small'
                                                                color='blue-gray'
                                                                className='font-normal hover:text-indigo-700 truncate cursor-pointer grow'
                                                            >
                                                                {item.name}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </NavLink>

                                                <Menu
                                                    animate={{
                                                        mount: { y: 0 },
                                                        unmount: { y: 25 }
                                                    }}
                                                    placement='right-start'
                                                    open={openMenu === index}
                                                    handler={() => handleOpenMenu(index)}
                                                >
                                                    <MenuHandler>
                                                        <div
                                                            className={`w-fit p-1 hover:bg-gray-300 ${
                                                                openMenu === index ? 'bg-gray-300 text-gray-900' : ''
                                                            }`}
                                                        >
                                                            <EllipsisVerticalIcon
                                                                className={`h-5 w-5 cursor-pointer text-gray-900 `}
                                                            ></EllipsisVerticalIcon>
                                                        </div>
                                                    </MenuHandler>
                                                    <MenuList className='rounded-sm'>
                                                        <MenuItem
                                                            className='text-gray-700 rounded-none flex flex-row items-center gap-x-2'
                                                            onClick={() => {
                                                                dispatch(
                                                                    setEditCompanyData({
                                                                        id: item.id,
                                                                        name: item.name,
                                                                        crn: item.crn,
                                                                        email: item.email,
                                                                        dateOfIncorporation: item.dateOfIncorporation
                                                                    })
                                                                )
                                                                dispatch(setOpenAdminEditCompany(true))
                                                            }}
                                                        >
                                                            <PencilIcon className='w-4 h-4 text-gold-900' />
                                                            Chỉnh sửa
                                                        </MenuItem>
                                                        {item.status === 1 ? (
                                                            <MenuItem
                                                                className='text-gray-700 rounded-none flex flex-row items-center gap-x-2'
                                                                onClick={() => {
                                                                    setOpenDeactivate(true)
                                                                    setSelectItemDeactivate(item.id)
                                                                }}
                                                            >
                                                                <NoSymbolIcon className='w-4 h-4 text-gold-900' />
                                                                Vô hiệu hóa
                                                            </MenuItem>
                                                        ) : (
                                                            <MenuItem
                                                                className='text-gray-700 rounded-none flex flex-row items-center gap-x-2'
                                                                onClick={() => {
                                                                    setOpenActivate(true)
                                                                    setSelectItemActivate(item.id)
                                                                }}
                                                            >
                                                                <CheckCircleIcon className='w-4 h-4 text-gold-900' />
                                                                Kích hoạt
                                                            </MenuItem>
                                                        )}
                                                    </MenuList>
                                                </Menu>
                                            </div>
                                        </td>

                                        <td className={classes}>
                                            <Typography variant='small' color='blue-gray' className='font-normal'>
                                                {item.crn}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant='small' color='blue-gray' className='font-normal'>
                                                {item.email}
                                            </Typography>
                                        </td>

                                        <td className={classes}>
                                            <Typography variant='small' color='blue-gray' className='font-normal'>
                                                {formatDisplayDate(item.dateOfIncorporation || '')}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant='small' color='blue-gray' className='font-normal'>
                                                {formatDisplayDate(item.createdOn || '')}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className='w-max'>
                                                <Chip
                                                    variant='ghost'
                                                    size='sm'
                                                    value={item.status === 1 ? 'Đang hoạt động' : 'Ngừng hoạt động'}
                                                    color={item.status === 1 ? 'green' : 'blue-gray'}
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
                <CardFooter className='flex items-center justify-between border-t border-blue-gray-50 p-4 pl-8'>
                    <Typography variant='small' color='blue-gray' className='font-normal'>
                        {pagination.totalCount} items
                    </Typography>
                    <div className='flex gap-2'>
                        {/* <Button className='flex items-center gap-3 py-3' size='sm' variant='outlined'>
                        <ChevronLeftIcon strokeWidth={2} className='h-4 w-4' />
                        Trang trước
                    </Button>
                    <Button className='flex items-center gap-3 py-3' size='sm' variant='outlined'>
                        Trang sau <ChevronRightIcon strokeWidth={2} className='h-4 w-4' />
                    </Button> */}
                        <SimplePagination onPageChange={handlePageChange} totalPage={pagination.totalPages} />
                    </div>
                </CardFooter>
            </Card>
            <ThemeProvider value={mtTheme}>
                <CreateCompanyForm />
                <EditCompanyForm />
                <ConfirmDialog
                    open={openDeactivate}
                    message={'Bạn có muốn vô hiệu hóa công ty này không?'}
                    handleConfim={() => handleDeactivate(selectItemDeactivate || '')}
                    setOpen={setOpenDeactivate}
                />
                <ConfirmDialog
                    open={openActivate}
                    message={'Bạn có muốn kích hoạt công ty này không?'}
                    handleConfim={() => handleActivate(selectItemActivate || '')}
                    setOpen={setOpenActivate}
                />
            </ThemeProvider>
            <ThemeProvider value={mtThemeLayer2}>
                <AddAddressDrawerForm />
            </ThemeProvider>
        </>
    )
}
