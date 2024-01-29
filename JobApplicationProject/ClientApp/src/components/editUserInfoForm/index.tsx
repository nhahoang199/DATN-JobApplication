import { Drawer, Typography, IconButton, Button, Input, Select, Option, Avatar } from '@material-tailwind/react'
import { DatePicker } from '@mui/x-date-pickers'
import { useAppDispatch, RootState } from 'apps/store'
import { setOpenEditUser } from 'apps/userProfile.slice'
import { boyavatar } from 'assets'
import React from 'react'
import { useSelector } from 'react-redux'

function EditUserForm() {
    const dispatch = useAppDispatch()
    const openEditUser = useSelector((state: RootState) => state.userProfile.openEditUser)
    return (
        <Drawer
            open={openEditUser}
            className='p-4'
            onClose={() => dispatch(setOpenEditUser(false))}
            placement='right'
            overlayProps={<div className='fixed top-0 right-0 left-0 bottom-0 bg-black-50/50'></div>}
        >
            <div className='mt-12'>
                <div className='mb-6 flex items-center justify-between'>
                    <Typography variant='h5' color='blue-gray'>
                        Chỉnh sửa thông tin cá nhân
                    </Typography>
                    <IconButton variant='text' color='blue-gray' onClick={() => dispatch(setOpenEditUser(false))}>
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
                            Thay đổi ảnh đại diện
                        </Typography>
                        <div className='flex flex-row gap-x-5 w-full'>
                            {' '}
                            <div className='w-20'>
                                <Avatar
                                    src={boyavatar}
                                    alt='Profile picture'
                                    variant='circular'
                                    className='h-full w-full'
                                />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <div className='flex flex-row gap-x-2'>
                                    <Button size='sm' className='rounded-sm px-6' variant='gradient'>
                                        Thay đổi
                                    </Button>
                                    <Button
                                        size='sm'
                                        variant='outlined'
                                        // onClick={() => dispatch(setOpenEditUser(false))}
                                        className='rounded-sm'
                                    >
                                        Xóa
                                    </Button>
                                </div>
                                <Typography variant='paragraph' color='blue-gray' className='text-gray-600'>
                                    Tối đa 100kb (.png, .jpg, .jpeg)
                                </Typography>
                            </div>
                        </div>
                    </div>
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
                        />
                    </div>
                    <div className='flex flex-row gap-x-4'>
                        <div className='mb-1 flex flex-col gap-4 w-1/2'>
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
                            >
                                <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                    Nam
                                </Option>
                                <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                    NỮ
                                </Option>
                                <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                    Không xác định
                                </Option>
                            </Select>
                        </div>
                        <div className='mb-1 flex flex-col gap-4 w-1/2'>
                            <Typography variant='h6' color='blue-gray' className='-mb-3'>
                                Ngày sinh
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
                            {/* </LocalizationProvider> */}
                        </div>
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-full'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            Email
                        </Typography>
                        <Input
                            size='md'
                            placeholder=''
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                        />
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-full'>
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
                        />
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-full'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            Địa chỉ
                        </Typography>
                        <Input
                            size='md'
                            placeholder=''
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                        />
                    </div>
                </form>
            </div>
            <div className='flex gap-2 fixed bottom-6'>
                <Button size='sm' className='rounded-sm px-6'>
                    Lưu
                </Button>
                <Button
                    size='sm'
                    variant='outlined'
                    onClick={() => dispatch(setOpenEditUser(false))}
                    className='rounded-sm'
                >
                    Hủy bỏ
                </Button>
            </div>
        </Drawer>
    )
}

export default EditUserForm
