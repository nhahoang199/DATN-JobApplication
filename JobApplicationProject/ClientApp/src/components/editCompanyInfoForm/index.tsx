import { MapPinIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Drawer, Typography, IconButton, Input, Select, Option, Button } from '@material-tailwind/react'
import { setOpenAddAddress } from 'apps/addressForm.slice'
import { setOpenEditCompany } from 'apps/companyProfile.slice'
import { useAppDispatch, RootState } from 'apps/store'
import React from 'react'
import { useSelector } from 'react-redux'

function EditCompanyInfoForm() {
    const dispatch = useAppDispatch()
    const openEditCompany = useSelector((state: RootState) => state.companyProfileSlice.openEditCompany)
    return (
        <Drawer
            open={openEditCompany}
            className='p-4'
            onClose={() => dispatch(setOpenEditCompany(false))}
            placement='right'
            size={800}
            // overlayProps={<div className='fixed top-0 right-0 left-0 bottom-0 bg-black-50/50'></div>}
        >
            <div className='mt-12'>
                <div className='mb-6 flex items-center justify-between'>
                    <Typography variant='h5' color='blue-gray'>
                        Chỉnh sửa thông tin công ty
                    </Typography>
                    <IconButton variant='text' color='blue-gray' onClick={() => dispatch(setOpenEditCompany(false))}>
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
                            Tên công ty
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
                        <div className='mb-1 flex flex-col gap-4 w-full'>
                            <Typography variant='h6' color='blue-gray' className='-mb-3'>
                                Ngày làm việc
                            </Typography>

                            <div className='flex flex-row gap-x-5 w-full'>
                                <Select
                                    label='Ngày bắt đầu'
                                    className=' !border-gray-800 focus:!border-gray-900 rounded-sm '
                                    labelProps={{
                                        className:
                                            'before:rounded-sm before:text-gray-800 before:!text-gray-800  after:rounded-sm  text-gray-400'
                                    }}
                                >
                                    <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                        Thứ 2
                                    </Option>
                                    <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                        Thứ 3
                                    </Option>
                                    <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                        Thứ 4
                                    </Option>
                                    <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                        Thứ 5
                                    </Option>
                                    <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                        Thứ 6
                                    </Option>
                                    <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                        Thứ 7
                                    </Option>
                                </Select>
                                <Select
                                    label='Ngày kết thúc'
                                    className=' !border-gray-800 focus:!border-gray-900 rounded-sm '
                                    labelProps={{
                                        className:
                                            'before:rounded-sm before:text-gray-800 before:!text-gray-800  after:rounded-sm  text-gray-400'
                                    }}
                                >
                                    <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                        Thứ 2
                                    </Option>
                                    <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                        Thứ 3
                                    </Option>
                                    <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                        Thứ 4
                                    </Option>
                                    <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                        Thứ 5
                                    </Option>
                                    <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                        Thứ 6
                                    </Option>
                                    <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                        Thứ 7
                                    </Option>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-full'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            Quy mô
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
                <div className='mt-6 pt-4 flex flex-col items-start gap-y-5 border-t-2'>
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
                </div>
            </div>
            <div className='flex gap-2 fixed bottom-6'>
                <Button size='sm' className='rounded-sm px-6'>
                    Lưu
                </Button>
                <Button
                    size='sm'
                    variant='outlined'
                    onClick={() => dispatch(setOpenEditCompany(false))}
                    className='rounded-sm'
                >
                    Hủy bỏ
                </Button>
            </div>
        </Drawer>
    )
}

export default EditCompanyInfoForm
