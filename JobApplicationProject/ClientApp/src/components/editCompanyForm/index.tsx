import { Drawer, Typography, IconButton, Button, Input } from '@material-tailwind/react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { updateCommuneAsync, setOpenEditCommune, getAllCommuneAsync } from 'apps/commune.slice'
import { getAllCompanyAsync, setOpenAdminEditCompany, updateCompanyAsync } from 'apps/companyProfile.slice'
import { showProgressLoading, hideProgressLoading } from 'apps/loading.slice'
import { useAppDispatch, RootState } from 'apps/store'
import dayjs, { Dayjs } from 'dayjs'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toastError } from 'utils/function'

function EditCompanyForm() {
    const [name, setName] = useState<string | undefined>('')
    const [email, setEmail] = useState<string | undefined>('')
    const [crn, setCRN] = useState<string | undefined>('')
    const [dateOfIncorporation, setDateOfIncorporation] = useState<Dayjs | null>(null)
    const dispatch = useAppDispatch()
    const openAdminEditCompany = useSelector((state: RootState) => state.companyProfileSlice.openAdminEditCompany)
    const editCompanyData = useSelector((state: RootState) => state.companyProfileSlice.editCompanyData)
    const pageNumber = useSelector((state: RootState) => state.companyProfileSlice.paginationObject.currentPage)

    useEffect(() => {
        console.log(editCompanyData.dateOfIncorporation)
        if (editCompanyData.dateOfIncorporation) {
            try {
                const initialDate = dayjs(editCompanyData.dateOfIncorporation)
                setDateOfIncorporation(initialDate)
            } catch (error) {
                console.error('Error parsing date:', error)
            }
        }
        // const initialDate = dayjs(editCompanyData.dateOfIncorporation)
        // console.log(initialDate)
        setName(editCompanyData.name)
        setEmail(editCompanyData.email)
        setCRN(editCompanyData.crn)
        // setDateOfIncorporation(initialDate)
    }, [editCompanyData.crn, editCompanyData.dateOfIncorporation, editCompanyData.email, editCompanyData.name])
    const handleEditCompany = async () => {
        if (name === '') {
            toastError('Tên là bắt buộc')
        } else if (email === '') {
            toastError('Bạn cần nhập email')
        } else if (crn === '') {
            toastError('Bạn cần nhập số đăng ký doanh nghiệp')
        } else if (dateOfIncorporation === null) {
            toastError('Bạn cần ngày đăng ký doanh nghiệp')
        } else {
            dispatch(showProgressLoading('Đang tạo...'))
            try {
                await dispatch(
                    updateCompanyAsync({
                        id: editCompanyData.id,
                        name: name,
                        email: email,
                        crn: crn,
                        dateOfIncorporation: dateOfIncorporation.toISOString() || ''
                    })
                )
            } finally {
                dispatch(hideProgressLoading())
                dispatch(setOpenAdminEditCompany(false))
                await dispatch(
                    getAllCompanyAsync({
                        PageNumber: pageNumber,
                        PageSize: 25
                    })
                )
                // setName('')
                // setEmail('')
                // setCRN('')
                // setDateOfIncorporation(null)
            }
        }
    }
    return (
        <Drawer
            open={openAdminEditCompany}
            size={600}
            className='p-4'
            onClose={() => dispatch(setOpenAdminEditCompany(false))}
            placement='right'
            overlayProps={<div className='fixed top-0 right-0 left-0 bottom-0 bg-black-50/50'></div>}
        >
            <div className='mt-12'>
                <div className='mb-6 flex items-center justify-between'>
                    <Typography variant='h5' color='blue-gray'>
                        Chỉnh sửa công ty
                    </Typography>
                    <IconButton
                        variant='text'
                        color='blue-gray'
                        onClick={() => dispatch(setOpenAdminEditCompany(false))}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='h-5 w-5'
                        >
                            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </IconButton>
                </div>
                <form className='mt-4 w-full flex flex-col gap-y-2'>
                    <div className='mb-1 flex flex-col gap-4 w-full'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            Tên
                        </Typography>
                        <Input
                            size='md'
                            placeholder=''
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-full'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            Email
                        </Typography>
                        <Input
                            type='email'
                            size='md'
                            placeholder=''
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-full'>
                        <Typography variant='h6' color='blue-gray' className='-mb-3'>
                            Số đăng ký kinh doanh (CRN)
                        </Typography>

                        <Input
                            size='md'
                            placeholder=''
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                            value={crn}
                            onChange={(e) => setCRN(e.target.value)}
                        />
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-full custom-form'>
                        <Typography variant='h6' color='blue-gray' className='-mb-3'>
                            Ngày thành lập
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                disableFuture
                                slotProps={{
                                    textField: {
                                        size: 'small',
                                        color: 'primary',
                                        focused: false,
                                        className: '!border-gray-900'
                                    },
                                    actionBar: {
                                        actions: ['clear', 'today'],
                                        className: '!text-gray-900'
                                    }
                                }}
                                className='!border-gray-900 border-2 rounded-md p-4'
                                format='DD/MM/YYYY'
                                value={dateOfIncorporation}
                                onChange={(value) => setDateOfIncorporation(value)}
                            />
                        </LocalizationProvider>
                    </div>
                    {/* <div className='mt-6 pt-4 flex flex-col items-start gap-y-5 border-t-2'>
                        <Typography variant='h5' color='blue-gray'>
                            Địa chỉ
                        </Typography>
                        <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                            <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                <MapPinIcon className='h-5 w-5 cursor-pointer text-blue-gray-800' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <Typography variant='paragraph' className='italic -mb-3 text-gray-600'>
                                    Địa chỉ 1
                                </Typography>
                                <Typography
                                    placeholder='Quản lý, thực tập,...'
                                    className=' !border-gray-800 focus:!border-gray-900 rounded-sm !bg-white h-5'
                                >
                                    Thanh Xuân - Hà Nội
                                </Typography>{' '}
                            </div>
                            <div className='flex gap-2 fixed right-4'>
                                <IconButton variant='outlined' className='rounded-none border-gold-900' ripple={true}>
                                    <PencilIcon className='w-5 h-5 text-gold-900' />
                                </IconButton>
                                <IconButton variant='outlined' className='rounded-none border-gold-900' ripple={true}>
                                    <TrashIcon className='w-5 h-5 text-gold-900' />
                                </IconButton>
                            </div>
                        </div>
                        <Button
                            size='sm'
                            className='rounded-sm px-6 w-20 !bg-gold-900'
                            // variant='gradient'
                            onClick={() => dispatch(setOpenAddAddress(true))}
                        >
                            Thêm
                        </Button>
                    </div> */}
                </form>
            </div>
            <div className='flex gap-2 fixed bottom-6'>
                <Button size='sm' className='rounded-sm px-6' onClick={handleEditCompany}>
                    Lưu
                </Button>
                <Button
                    size='sm'
                    variant='outlined'
                    onClick={() => dispatch(setOpenAdminEditCompany(false))}
                    className='rounded-sm'
                >
                    Hủy bỏ
                </Button>
            </div>
        </Drawer>
    )
}

export default EditCompanyForm
