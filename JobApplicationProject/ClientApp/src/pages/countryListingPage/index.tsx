import React, { useCallback, useEffect } from 'react'
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    CardFooter,
    Tooltip,
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    ThemeProvider
} from '@material-tailwind/react'
import { RootState, useAppDispatch } from 'apps/store'
import { setAdminSidebarTab } from 'apps/Tabs.slice'
import { ConfirmDialog, SimplePagination } from 'components/common'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { getAllCountryAsync, setEditCountry, setOpenAddCountry, setOpenEditCountry } from 'apps/country.slice'
import { showProgressLoading, hideProgressLoading } from 'apps/loading.slice'
import { useSelector } from 'react-redux'
import { formatDisplayDate, toastError, toastSuccess } from 'utils/function'
import { EllipsisVerticalIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import { deleteCountryAPI } from 'apis/countryAPI'
import { CreateCountryForm, EditCountryForm } from 'components'
import mtTheme from 'const/MTtheme'

const TABLE_HEAD = ['Tên quốc gia', 'Mã quốc gia', 'Mã ISO', 'Ngày tạo', 'Ngày chỉnh sửa']

export default function CountryListingPage() {
    const dispatch = useAppDispatch()
    // const data = useSelector((state: RootState) => state.countrySlice.data)
    const [openMenu, setOpenMenu] = React.useState<null | number>()
    const [openDelete, setOpenDelete] = React.useState<boolean>(false)
    const [selectItemDelete, setSelectItemDelete] = React.useState<string>()
    const tableRow = useSelector((state: RootState) => state.countrySlice.data)
    const pagination = useSelector((state: RootState) => state.countrySlice.paginationObject)

    const handleGetAllCountry = useCallback(
        async (pageNumber: number) => {
            dispatch(showProgressLoading('Đang tải dữ liệu..'))
            try {
                await dispatch(
                    getAllCountryAsync({
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
        dispatch(setAdminSidebarTab(6))
        handleGetAllCountry(1)
    }, [dispatch, handleGetAllCountry])

    const onClick = (id: number) => {
        // navigate(`/manager/jobapplied/details/${id}`, { replace: true })
    }

    const handlePageChange = (pageNumber: number) => {
        // Khi trang thay đổi, dispatch action để gọi API với trang mới
        handleGetAllCountry(pageNumber)
    }
    const handleOpenMenu = (index: number) => {
        setOpenMenu(openMenu === index ? null : index)
    }
    const handleDelete = async (id: string) => {
        dispatch(showProgressLoading('Đang xóa..'))
        if (id !== '') {
            try {
                await deleteCountryAPI(id)
            } catch (error) {
                toastError('Có lỗi xảy ra: ' + error)
            } finally {
                dispatch(hideProgressLoading())
                handleGetAllCountry(pagination.currentPage)
                toastSuccess('Xóa quốc gia thành công')
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
                                Quốc gia
                            </Typography>
                            <Typography color='gray' className='mt-1 font-normal'>
                                Xem tất cả các quốc gia
                            </Typography>
                        </div>
                        <div className='flex shrink-0 flex-row gap-2 '>
                            <Button
                                className='flex items-center gap-3 py-3 rounded-sm bg-gray-900'
                                size='sm'
                                variant='gradient'
                                onClick={() => dispatch(setOpenAddCountry(true))}
                            >
                                <PlusCircleIcon strokeWidth={2} className='h-4 w-4' /> Tạo mới
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
                            {tableRow.map(({ name, countryCode, countryISOCode, createdOn, updatedOn, id }, index) => {
                                const isLast = index === tableRow.length - 1
                                const classes = isLast ? 'p-4 ' : 'p-4 border-b border-blue-gray-50 '

                                return (
                                    <tr key={name} className='hover:bg-gray-200' onClick={() => onClick(index)}>
                                        <td className={`${classes} lg:max-w-[16rem] 3xl:max-w-[20rem]`}>
                                            <div className='flex flex-row justify-between items-center'>
                                                <Tooltip content={name}>
                                                    <Typography
                                                        variant='small'
                                                        color='blue-gray'
                                                        className='font-normal  truncate  grow'
                                                    >
                                                        {name}
                                                    </Typography>
                                                </Tooltip>

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
                                                                    setEditCountry({
                                                                        name,
                                                                        countryCode,
                                                                        countryISOCode,
                                                                        id
                                                                    })
                                                                )
                                                                dispatch(setOpenEditCountry(true))
                                                            }}
                                                        >
                                                            <PencilIcon className='w-4 h-4 text-gold-900' />
                                                            Chỉnh sửa
                                                        </MenuItem>
                                                        <MenuItem
                                                            className='text-gray-700 rounded-none flex flex-row items-center gap-x-2'
                                                            onClick={() => {
                                                                setOpenDelete(true)
                                                                setSelectItemDelete(id)
                                                            }}
                                                        >
                                                            <TrashIcon className='w-4 h-4 text-gold-900' />
                                                            Xóa
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant='small' color='blue-gray' className='font-normal '>
                                                {countryCode}
                                            </Typography>
                                        </td>

                                        <td className={classes}>
                                            {/* <Tooltip content='Edit User'>
                            <IconButton variant='text'>
                                <PencilIcon className='h-4 w-4' />
                            </IconButton>
                        </Tooltip> */}
                                            <Typography variant='small' color='blue-gray' className='font-normal'>
                                                {countryISOCode}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            {/* <Tooltip content='Edit User'>
                            <IconButton variant='text'>
                                <PencilIcon className='h-4 w-4' />
                            </IconButton>
                        </Tooltip> */}
                                            <Typography variant='small' color='blue-gray' className='font-normal'>
                                                {formatDisplayDate(createdOn || '')}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant='small' color='blue-gray' className='font-normal'>
                                                {formatDisplayDate(updatedOn || '')}
                                            </Typography>
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
                <CreateCountryForm />
                <EditCountryForm />
                <ConfirmDialog
                    open={openDelete}
                    message={'Bạn có muốn xóa quốc gia này không?'}
                    handleConfim={() => {
                        // setOpenDelete(true)
                        handleDelete(selectItemDelete || '')
                    }}
                    setOpen={setOpenDelete}
                />
            </ThemeProvider>
        </>
    )
}
