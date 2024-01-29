import { Drawer, Typography, IconButton, Button, Input, Avatar } from '@material-tailwind/react'
import { DatePicker } from '@mui/x-date-pickers'
import { createCompanyAsync, getAllCompanyAsync, setOpenCreateCompany } from 'apps/companyProfile.slice'
import { useAppDispatch, RootState } from 'apps/store'
import { companyavatar } from 'assets'
import { useSelector } from 'react-redux'
import './index.scss'
import { MapPinIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import { setOpenAddAddress } from 'apps/addressForm.slice'
import { useState } from 'react'
import { createCommuneAsync, setOpenAddCommune, getAllCommuneAsync } from 'apps/commune.slice'
import { showProgressLoading, hideProgressLoading } from 'apps/loading.slice'
import { toastError } from 'utils/function'
import dayjs, { Dayjs } from 'dayjs'

function CreateCompanyForm() {
    const dispatch = useAppDispatch()
    const [name, setName] = useState<string | undefined>('')
    const [email, setEmail] = useState<string | undefined>('')
    const [crn, setCRN] = useState<string | undefined>('')
    const [dateOfIncorporation, setDateOfIncorporation] = useState<Dayjs | null>(null)
    const openCreateCompany = useSelector((state: RootState) => state.companyProfileSlice.openCreateCompany)
    const pageNumber = useSelector((state: RootState) => state.companyProfileSlice.paginationObject.currentPage)

    const handleCreateCompany = async () => {
        if (name === '') {
            toastError('Tên là bắt buộc')
        } else if (email === '') {
            toastError('Bạn cần chọn Email')
        } else if (crn === '') {
            toastError('Bạn cần chọn số đăng ký kinh doanh')
        } else if (dateOfIncorporation === null) {
            toastError('Bạn cần chọn ngày thành lập')
        } else {
            dispatch(showProgressLoading('Đang tạo...'))
            try {
                console.log(name)
                console.log(email)
                console.log(crn)
                console.log(dateOfIncorporation.toISOString())
                await dispatch(
                    createCompanyAsync({
                        name: name,
                        email: email,
                        crn: crn,
                        dateOfIncorporation: dateOfIncorporation.toISOString()
                    })
                )
            } finally {
                dispatch(hideProgressLoading())
                dispatch(setOpenCreateCompany(false))
                await dispatch(
                    getAllCompanyAsync({
                        PageNumber: pageNumber,
                        PageSize: 25
                    })
                )
                setName('')
                setEmail('')
                setCRN('')
                setDateOfIncorporation(null)
            }
        }
    }
    return (
        <Drawer
            open={openCreateCompany}
            size={600}
            className='p-4'
            onClose={() => dispatch(setOpenCreateCompany(false))}
            placement='right'
            overlayProps={<div className='fixed top-0 right-0 left-0 bottom-0 bg-black-50/50'></div>}
        >
            <div className='mt-12'>
                <div className='mb-6 flex items-center justify-between'>
                    <Typography variant='h5' color='blue-gray'>
                        Tạo mới công ty
                    </Typography>
                    <IconButton variant='text' color='blue-gray' onClick={() => dispatch(setOpenCreateCompany(false))}>
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
                            <span className='text-red-500 mr-1'>*</span>
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
                            <span className='text-red-500 mr-1'>*</span>
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
                            <span className='text-red-500 mr-1'>*</span>
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
                            <span className='text-red-500 mr-1'>*</span>
                            Ngày thành lập
                        </Typography>
                        {/* <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en-gb'}> */}
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
                            value={dateOfIncorporation}
                            onChange={(value) => setDateOfIncorporation(value)}
                            className='!border-gray-900 border-2 rounded-md p-4'
                            format='DD/MM/YYYY'
                        />
                        {/* </LocalizationProvider> */}
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
                <Button size='sm' className='rounded-sm px-6' onClick={handleCreateCompany}>
                    Lưu
                </Button>
                <Button
                    size='sm'
                    variant='outlined'
                    onClick={() => dispatch(setOpenCreateCompany(false))}
                    className='rounded-sm'
                >
                    Hủy bỏ
                </Button>
            </div>
        </Drawer>
    )
}

export default CreateCompanyForm
