import React, { useEffect, useState } from 'react'
import { Button, Drawer, IconButton, Input, Select, Typography, Option } from '@material-tailwind/react'
import { BuildingOfficeIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useAppDispatch, RootState } from 'apps/store'
import { useSelector } from 'react-redux'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { setOpenAdminEditHR } from 'apps/hrUser.slice'
import SearchCompanyField from 'components/adminCreateHRForm/searchCompanyField'
import dayjs, { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
interface CompanyValue {
    label: string
    value: string
}
function AdminEditHRForm() {
    const dispatch = useAppDispatch()
    const [roleValue, setRoleValue] = useState('')
    const [nameValue, setNameValue] = useState<string>()
    const [emailValue, setEmailValue] = useState<string>()
    // const [passwordValue, setPasswordValue] = useState<string>()
    const [phoneNumberValue, setPhoneNumberValue] = useState<string>()
    const [genderValue, setGenderValue] = useState<number>()
    const [companyValue, setCompanyValue] = useState<CompanyValue>()
    const [dateOfBirth, setDateOfBirth] = useState<Dayjs | null>(null)
    const openEditHR = useSelector((state: RootState) => state.hrUserSlice.openEditHR)
    const editHRData = useSelector((state: RootState) => state.hrUserSlice.editUser)

    useEffect(() => {
        setNameValue(editHRData.name)
        setRoleValue(editHRData.role)
        setEmailValue(editHRData.email)
        setPhoneNumberValue(editHRData.phoneNumber)
        setGenderValue(editHRData.gender)
        setCompanyValue({
            label: editHRData.companyName || '',
            value: editHRData.companyId || ''
        })
        setDateOfBirth(dayjs(editHRData.dateOfBirth || null))
    }, [
        editHRData.companyId,
        editHRData.companyName,
        editHRData.dateOfBirth,
        editHRData.email,
        editHRData.gender,
        editHRData.name,
        editHRData.phoneNumber,
        editHRData.role
    ])
    return (
        <Drawer
            open={openEditHR}
            className='p-4'
            onClose={() => dispatch(setOpenAdminEditHR(false))}
            placement='right'
            overlayProps={<div className='fixed top-0 bottom-0 left-0 right-0 bg-black-50/50'></div>}
        >
            <div className='mt-12'>
                <div className='flex items-center justify-between mb-6'>
                    <Typography variant='h5' color='blue-gray'>
                        Chỉnh sửa Nhân sự
                    </Typography>
                    <IconButton variant='text' color='blue-gray' onClick={() => dispatch(setOpenAdminEditHR(false))}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='w-5 h-5'
                        >
                            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </IconButton>
                </div>
                <div className='w-full pb-4 border-b-2'>
                    <div className='flex flex-row items-center w-1/2 gap-4 mb-2'>
                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                            <EnvelopeIcon className='w-5 h-5 text-blue-gray-800' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography variant='h6' color='blue-gray' className='-mb-3 italic'>
                                Email
                            </Typography>
                            <Typography
                                placeholder='Quản lý, thực tập,...'
                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm !bg-white h-5'
                            >
                                {emailValue || ''}
                            </Typography>{' '}
                        </div>
                    </div>
                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                            <BuildingOfficeIcon className='w-5 h-5 text-blue-gray-800' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography variant='h6' color='blue-gray' className='-mb-3 italic'>
                                Công ty
                            </Typography>
                            <Typography
                                placeholder='Quản lý, thực tập,...'
                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm !bg-white h-5'
                            >
                                {companyValue?.label || ''}
                            </Typography>{' '}
                        </div>
                    </div>
                </div>
                <form className='flex flex-col w-full mt-4 gap-y-2'>
                    {/* <div className='flex flex-col w-full gap-4 mb-1'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            Mật khẩu
                        </Typography>
                        <Input
                            type='password'
                            size='md'
                            placeholder=''
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                        />
                    </div> */}
                    <div className='flex flex-col w-full gap-4 mb-1'>
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
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col w-full gap-4 mb-1'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            Số điện thoại
                        </Typography>
                        <Input
                            size='md'
                            placeholder=''
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                            value={phoneNumberValue}
                            onChange={(e) => setPhoneNumberValue(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-row gap-x-4'>
                        <div className='flex flex-col w-1/2 gap-4 mb-1 '>
                            <Typography variant='h6' color='blue-gray' className='-mb-3'>
                                Giới tính
                            </Typography>

                            <Select
                                label='Chọn giới tính'
                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm '
                                labelProps={{
                                    className:
                                        'before:rounded-sm before:text-gray-800 before:!text-gray-800  after:rounded-sm  text-gray-400'
                                }}
                                value={genderValue?.toString()}
                                onChange={(value) => setGenderValue(parseInt(value || ''))}
                            >
                                <Option color='black' value={'1'} className='text-gray-700 hover:text-gray-900'>
                                    Nam
                                </Option>
                                <Option color='black' value={'2'} className='text-gray-700 hover:text-gray-900'>
                                    Nữ
                                </Option>
                                <Option color='black' value={'0'} className='text-gray-700 hover:text-gray-900'>
                                    Không xác định
                                </Option>
                            </Select>
                        </div>
                        <div className='flex flex-col w-1/2 gap-4 mb-1 custom-form'>
                            <Typography variant='h6' color='blue-gray' className='-mb-3'>
                                Ngày sinh
                            </Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    disableFuture
                                    value={dateOfBirth}
                                    onChange={(value) => setDateOfBirth(value)}
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
                                    sx={{
                                        borderRadius: 10,
                                        outline: 'none',
                                        borderColor: 'red'
                                        // background: 'red',
                                        // '&.MuiInputBase-root': {
                                        //     borderColor: 'red',
                                        //     background: 'red'
                                        // }
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className='flex flex-col w-full gap-4 mb-1 '>
                        <Typography variant='h6' color='blue-gray' className='-mb-3'>
                            Vai trò
                        </Typography>

                        <Select
                            label='Chọn vai trò của người dùng'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm '
                            labelProps={{
                                className:
                                    'before:rounded-sm before:text-gray-800 before:!text-gray-800  after:rounded-sm  text-gray-400'
                            }}
                            value={roleValue}
                            onChange={(value) => setRoleValue(value || '')}
                        >
                            <Option color='black' value='HROFFICER' className='text-gray-700 hover:text-gray-900'>
                                HR Officer
                            </Option>
                            <Option color='black' value='HRADMIN' className='text-gray-700 hover:text-gray-900'>
                                HR Admin
                            </Option>
                        </Select>
                    </div>
                    <div className='flex flex-col w-full gap-4 mb-1 custom-form'>
                        <Typography variant='h6' color='blue-gray' className='-mb-3'>
                            <span className='mr-1 text-red-500'>*</span>
                            Công ty
                        </Typography>
                        <SearchCompanyField value={companyValue} setFieldValue={setCompanyValue} />
                    </div>
                </form>
            </div>
            <div className='fixed flex gap-2 bottom-6'>
                <Button size='sm' className='px-6 rounded-sm'>
                    Lưu
                </Button>
                <Button
                    size='sm'
                    variant='outlined'
                    onClick={() => dispatch(setOpenAdminEditHR(false))}
                    className='rounded-sm'
                >
                    Hủy bỏ
                </Button>
            </div>
        </Drawer>
    )
}

export default AdminEditHRForm
