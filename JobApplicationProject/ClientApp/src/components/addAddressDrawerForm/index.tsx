import { MapPinIcon } from '@heroicons/react/24/outline'
import { Drawer, Typography, IconButton, Input, Button, Option } from '@material-tailwind/react'
import { setOpenAddAddress } from 'apps/addressForm.slice'
import { setOpenEditCompany } from 'apps/companyProfile.slice'
import { useAppDispatch, RootState } from 'apps/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { Select } from 'antd'
import './index.scss'

function AddAddressDrawerForm() {
    const dispatch = useAppDispatch()
    const openAddAddress = useSelector((state: RootState) => state.addressSlice.openAddAddress)
    return (
        <Drawer
            open={openAddAddress}
            // size={600}
            className='p-4'
            onClose={() => dispatch(setOpenAddAddress(false))}
            placement='right'
            // overlayProps={<div className='fixed top-0 right-0 left-0 bottom-0 bg-black-50/50 z-30'></div>}
        >
            <div className='mt-12'>
                <div className='mb-6 flex items-center justify-between'>
                    <Typography variant='h5' color='blue-gray'>
                        Thêm địa chỉ
                    </Typography>
                    <IconButton variant='text' color='blue-gray' onClick={() => dispatch(setOpenAddAddress(false))}>
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
                <form className='mt-4 w-full flex flex-col gap-y-2 custom-form'>
                    <div className='mb-1 flex flex-col gap-4 w-full'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            Quốc gia
                        </Typography>
                        <Select
                            showSearch
                            style={{ height: '2.5rem', borderRadius: '0.125rem', borderColor: '#000' }}
                            placeholder='Search to Select'
                            optionFilterProp='children'
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: 'Not Identified'
                                },
                                {
                                    value: '2',
                                    label: 'Closed'
                                },
                                {
                                    value: '3',
                                    label: 'Communicated'
                                },
                                {
                                    value: '4',
                                    label: 'Identified'
                                },
                                {
                                    value: '5',
                                    label: 'Resolved'
                                },
                                {
                                    value: '6',
                                    label: 'Cancelled'
                                }
                            ]}
                        />
                    </div>
                    {/* <div className='flex flex-row gap-x-4'>
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
                    </div> */}
                    <div className='mb-1 flex flex-col gap-4 w-full'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            Tỉnh/Thành phố
                        </Typography>
                        <Select
                            showSearch
                            style={{ height: '2.5rem', borderRadius: '0.125rem', borderColor: '#000' }}
                            placeholder='Search to Select'
                            optionFilterProp='children'
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: 'Not Identified'
                                },
                                {
                                    value: '2',
                                    label: 'Closed'
                                },
                                {
                                    value: '3',
                                    label: 'Communicated'
                                },
                                {
                                    value: '4',
                                    label: 'Identified'
                                },
                                {
                                    value: '5',
                                    label: 'Resolved'
                                },
                                {
                                    value: '6',
                                    label: 'Cancelled'
                                }
                            ]}
                        />
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-full'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            Quận/Huyện
                        </Typography>
                        <Select
                            showSearch
                            style={{
                                height: '2.5rem',
                                borderRadius: '0.125rem',
                                borderColor: '#000'
                            }}
                            placeholder='Search to Select'
                            optionFilterProp='children'
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: 'Not Identified'
                                },
                                {
                                    value: '2',
                                    label: 'Closed'
                                },
                                {
                                    value: '3',
                                    label: 'Communicated'
                                },
                                {
                                    value: '4',
                                    label: 'Identified'
                                },
                                {
                                    value: '5',
                                    label: 'Resolved'
                                },
                                {
                                    value: '6',
                                    label: 'Cancelled'
                                }
                            ]}
                        />
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-full'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            Xã/Phường
                        </Typography>
                        <Select
                            showSearch
                            style={{
                                height: '2.5rem',
                                borderRadius: '0.125rem',
                                borderColor: '#000'
                            }}
                            placeholder='Search to Select'
                            optionFilterProp='children'
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: 'Not Identified'
                                },
                                {
                                    value: '2',
                                    label: 'Closed'
                                },
                                {
                                    value: '3',
                                    label: 'Communicated'
                                },
                                {
                                    value: '4',
                                    label: 'Identified'
                                },
                                {
                                    value: '5',
                                    label: 'Resolved'
                                },
                                {
                                    value: '6',
                                    label: 'Cancelled'
                                }
                            ]}
                        />
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-full'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            Tên đường
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
                            Số nhà
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
                    onClick={() => dispatch(setOpenAddAddress(false))}
                    className='rounded-sm'
                >
                    Hủy bỏ
                </Button>
            </div>
        </Drawer>
    )
}

export default AddAddressDrawerForm
