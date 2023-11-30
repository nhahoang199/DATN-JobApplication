import { Card, Typography, Input, Select, Option } from '@material-tailwind/react'
import React from 'react'

function CreateJobFormStep1() {
    return (
        <Card color='white' shadow={true} className='w-full h-fit pb-6 mt-4 rounded-md'>
            <Typography variant='h5' color='blue-gray' className='px-6 py-4 border-b-2 border-b-gray-200'>
                Thông tin cơ bản
            </Typography>
            <form className='mt-4 px-6 w-full flex flex-col gap-y-6'>
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
                            placeholder='Nhập số năm kinh nghiệm'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            color='black'
                            crossOrigin={undefined}
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
                                    'before:rounded-sm before:text-gray-800 before:!text-gray-800  after:rounded-sm  text-gray-800'
                            }}
                        >
                            <Option className='text-gray-700 hover:text-gray-900'>Toàn thời gian</Option>
                            <Option className='text-gray-700 hover:text-gray-900'>Bán thời gian</Option>
                            <Option className='text-gray-700 hover:text-gray-900'>Từ xa</Option>
                        </Select>
                    </div>
                </div>
                <div className='flex flex-row gap-x-6'>
                    <div className='mb-1 flex flex-col gap-4 w-1/3'>
                        <Typography variant='h6' color='blue-gray' className='-mb-3'>
                            Mức lương
                        </Typography>
                        <Input
                            size='md'
                            placeholder='Nhập mức lương'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                        />
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-1/3'>
                        <Typography variant='h6' color='blue-gray' className='-mb-3'>
                            Giới tính
                        </Typography>

                        <Select
                            label='Chọn giới tính yêu cầu'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm '
                            labelProps={{
                                className:
                                    'before:rounded-sm before:text-gray-800 before:!text-gray-800  after:rounded-sm  text-gray-800'
                            }}
                        >
                            <Option className='text-gray-700 hover:text-gray-900'>Nam</Option>
                            <Option className='text-gray-700 hover:text-gray-900'>Nữ</Option>
                            <Option className='text-gray-700 hover:text-gray-900'>Không yêu cầu</Option>
                        </Select>
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-1/3'>
                        <Typography variant='h6' color='blue-gray' className='-mb-3'>
                            Thời gian hết hạn
                        </Typography>
                        <Input
                            type='date'
                            min={new Date().toISOString().split('T')[0]}
                            size='md'
                            placeholder='Nhập thời gian hết hạn'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                        />
                    </div>
                </div>
            </form>
        </Card>
    )
}

export default CreateJobFormStep1
