import { IconButton, Drawer, Typography, Input, Button } from '@material-tailwind/react'
import { createCountryAsync, getAllCountryAsync, setOpenAddCountry } from 'apps/country.slice'
import { showProgressLoading, hideProgressLoading } from 'apps/loading.slice'
import { useAppDispatch, RootState } from 'apps/store'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function CreateCountryForm() {
    const dispatch = useAppDispatch()
    const [countryName, setCountryName] = useState<string>('')
    const [countryCode, setCountryCode] = useState<string>('')
    const [countryISOCode, setCountryISOCode] = useState<string>('')
    const openAddCountry = useSelector((state: RootState) => state.countrySlice.openAddCountry)
    const pageNumber = useSelector((state: RootState) => state.countrySlice.paginationObject.currentPage)

    const handleCreateCountry = async () => {
        dispatch(showProgressLoading('Đang tạo quốc gia...'))
        try {
            await dispatch(
                createCountryAsync({
                    name: countryName,
                    countryCode: countryCode,
                    countryISOCode: countryISOCode
                })
            )
        } finally {
            dispatch(hideProgressLoading())
            dispatch(setOpenAddCountry(false))
            await dispatch(
                getAllCountryAsync({
                    PageNumber: pageNumber,
                    PageSize: 25
                })
            )
            setCountryName('')
            setCountryCode('')
            setCountryISOCode('')
        }
    }
    return (
        <Drawer
            open={openAddCountry}
            className='p-4'
            onClose={() => dispatch(setOpenAddCountry(false))}
            placement='right'
            overlayProps={<div className='fixed top-0 right-0 left-0 bottom-0 bg-black-50/50'></div>}
        >
            <div className='mt-12'>
                <div className='mb-6 flex items-center justify-between'>
                    <Typography variant='h5' color='blue-gray'>
                        Thêm mới quốc gia
                    </Typography>
                    <IconButton variant='text' color='blue-gray' onClick={() => dispatch(setOpenAddCountry(false))}>
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
                            Tên quốc gia
                        </Typography>
                        <Input
                            size='md'
                            placeholder=''
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                            value={countryName}
                            onChange={(e) => {
                                setCountryName(e.target.value)
                            }}
                        />
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-full'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            Mã quốc gia
                        </Typography>
                        <Input
                            size='md'
                            placeholder=''
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                            value={countryCode}
                            onChange={(e) => {
                                setCountryCode(e.target.value)
                            }}
                        />
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-full'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            Mã ISO
                        </Typography>
                        <Input
                            size='md'
                            placeholder=''
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                            value={countryISOCode}
                            onChange={(e) => {
                                setCountryISOCode(e.target.value)
                            }}
                        />
                    </div>
                </form>
            </div>
            <div className='flex gap-2 fixed bottom-6'>
                <Button size='sm' className='rounded-sm px-6' onClick={handleCreateCountry}>
                    Lưu
                </Button>
                <Button
                    size='sm'
                    variant='outlined'
                    onClick={() => dispatch(setOpenAddCountry(false))}
                    className='rounded-sm'
                >
                    Hủy bỏ
                </Button>
            </div>
        </Drawer>
    )
}

export default CreateCountryForm
