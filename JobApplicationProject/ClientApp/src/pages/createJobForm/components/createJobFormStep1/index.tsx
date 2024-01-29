import { Card, Typography, Input, Select, Option } from '@material-tailwind/react'
import React, { useState } from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { IJobApplicationModel } from 'models'
import dayjs from 'dayjs'
import './index.scss'

function CreateJobFormStep1(props: { formData: IJobApplicationModel | undefined; setFormData: any }) {
    const { formData, setFormData } = props
    return (
        <Card color='white' shadow={true} className='w-full h-fit pb-6 mt-4 rounded-md'>
            <Typography variant='h5' color='blue-gray' className='px-6 py-4 border-b-2 border-b-gray-200'>
                Thông tin cơ bản
            </Typography>
            <form className='mt-4 px-6 w-full flex flex-col gap-y-2'>
                <div className='flex flex-row gap-x-6'>
                    <div className='mb-1 flex flex-col gap-4 w-full'>
                        <Typography variant='h6' color='blue-gray' className='-mb-3'>
                            Tiêu đề
                        </Typography>
                        <Input
                            size='md'
                            placeholder=''
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                            value={formData?.title || undefined}
                            onChange={(event) => setFormData((prev: any) => ({ ...prev, title: event.target.value }))}
                        />
                    </div>
                </div>
                <div className='flex flex-row gap-x-6'>
                    <div className='mb-1 flex flex-col gap-4 w-1/2'>
                        <Typography variant='h6' color='blue-gray' className='-mb-3'>
                            Kinh nghiệm
                        </Typography>
                        <Input
                            size='md'
                            placeholder='Nhập kinh nghiệm yêu cầu'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            value={formData?.expirence || undefined}
                            color='black'
                            crossOrigin={undefined}
                            onChange={(event) =>
                                setFormData((prev: any) => ({ ...prev, expirence: event.target.value }))
                            }
                        />
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-1/2'>
                        <Typography variant='h6' color='blue-gray' className='-mb-3'>
                            Số lượng
                        </Typography>

                        <Input
                            type='number'
                            size='md'
                            placeholder='Nhập số lượng cần tuyển'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                            value={formData?.quantity || undefined}
                            onChange={(event) =>
                                setFormData((prev: any) => ({ ...prev, quantity: parseInt(event.target.value) }))
                            }
                        />
                    </div>
                </div>
                <div className='flex flex-row gap-x-6'>
                    <div className='mb-1 flex flex-col gap-4 w-1/2'>
                        <Typography variant='h6' color='blue-gray' className='-mb-3'>
                            Cấp bậc
                        </Typography>
                        <Input
                            size='md'
                            placeholder='Quản lý, thực tập,...'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                            value={formData?.position || undefined}
                            onChange={(event) =>
                                setFormData((prev: any) => ({ ...prev, position: event.target.value }))
                            }
                        />
                    </div>

                    <div className='mb-1 flex flex-col gap-4 w-1/2'>
                        <Typography variant='h6' color='blue-gray' className='-mb-3'>
                            Loại hình công việc
                        </Typography>

                        <Select
                            label='Chọn loại hình công việc'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm '
                            labelProps={{
                                className:
                                    'before:rounded-sm before:text-gray-800 before:!text-gray-800  after:rounded-sm  text-gray-400'
                            }}
                            value={formData?.type?.toString() || undefined}
                            onChange={(value) =>
                                setFormData((prev: any) => ({ ...prev, type: parseInt(value || '0') }))
                            }
                        >
                            <Option className='text-gray-700 hover:text-gray-900' value={'0'}>
                                Toàn thời gian
                            </Option>
                            <Option className='text-gray-700 hover:text-gray-900' value='1'>
                                Bán thời gian
                            </Option>
                            <Option className='text-gray-700 hover:text-gray-900' value='2'>
                                Từ xa
                            </Option>
                        </Select>
                    </div>
                </div>
                <div className='flex flex-row gap-x-6'>
                    <div className='mb-1 flex flex-col gap-4 w-1/2'>
                        <Typography variant='h6' color='blue-gray' className='-mb-3'>
                            Mức lương
                        </Typography>
                        <Input
                            color='black'
                            size='md'
                            placeholder='Nhập mức lương'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                            value={formData?.salary || undefined}
                            onChange={(event) => setFormData((prev: any) => ({ ...prev, salary: event.target.value }))}
                        />
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-1/2'>
                        <Typography variant='h6' color='blue-gray' className='-mb-3'>
                            Giới tính
                        </Typography>

                        <Select
                            label='Chọn giới tính yêu cầu'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm '
                            labelProps={{
                                className:
                                    'before:rounded-sm before:text-gray-800 before:!text-gray-800  after:rounded-sm  text-gray-400'
                            }}
                            value={formData?.gender?.toString() || undefined}
                            onChange={(value) => setFormData((prev: any) => ({ ...prev, gender: value }))}
                        >
                            <Option color='black' className='text-gray-700 hover:text-gray-900' value='Nam'>
                                Nam
                            </Option>
                            <Option color='black' className='text-gray-700 hover:text-gray-900' value='Nữ'>
                                Nữ
                            </Option>
                            <Option color='black' className='text-gray-700 hover:text-gray-900' value='Không yêu cầu'>
                                Không yêu cầu
                            </Option>
                        </Select>
                    </div>
                </div>
                <div className='flex flex-row gap-x-6'>
                    <div className='mb-1 flex flex-col gap-4 w-1/2'>
                        <Typography variant='h6' color='blue-gray' className='-mb-3'>
                            Địa điểm
                        </Typography>

                        <Select
                            label='Chọn địa điểm'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm '
                            labelProps={{
                                className:
                                    'before:rounded-sm before:text-gray-800 before:!text-gray-800  after:rounded-sm  text-gray-400'
                            }}
                        >
                            <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                Địa điểm 1
                            </Option>
                            <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                Địa điểm 2
                            </Option>
                            <Option color='black' className='text-gray-700 hover:text-gray-900'>
                                Địa điểm mới
                            </Option>
                        </Select>
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-1/2'>
                        <Typography variant='h6' color='blue-gray' className='-mb-3'>
                            Thời gian hết hạn
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en-gb'}>
                            <DatePicker
                                value={dayjs(formData?.expiredOn || undefined)}
                                onChange={(value) =>
                                    setFormData((prev: any) => ({ ...prev, expiredOn: dayjs(value).format() }))
                                }
                                disablePast
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
            </form>
        </Card>
    )
}

export default CreateJobFormStep1
