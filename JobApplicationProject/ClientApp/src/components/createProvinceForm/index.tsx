import { IconButton, Drawer, Typography, Input, Button } from '@material-tailwind/react'
import { Select, Space } from 'antd'
import { getListInputCountryAPI } from 'apis/countryAPI'
import { getListInputCountryAsync } from 'apps/country.slice'
import { hideProgressLoading, showProgressLoading } from 'apps/loading.slice'
import { createProvinceAsync, getAllProvinceAsync, setOpenAddProvince } from 'apps/province.slice'
import { useAppDispatch, RootState } from 'apps/store'
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toastError } from 'utils/function'

function CreateProvinceForm() {
    const dispatch = useAppDispatch()
    const [isDisabled, setIsDisabled] = useState(true)
    const [name, setName] = useState('')
    const [country, setCountry] = useState<string | undefined>()
    const openAddProvince = useSelector((state: RootState) => state.provinceSlice.openAddProvince)
    const getCountrystatus = useSelector((state: RootState) => state.countrySlice.getInputCountryStatus)
    // const getListCountryError = useSelector((state: RootState) => state.countrySlice.getInputCountryError)
    const pageNumber = useSelector((state: RootState) => state.provinceSlice.paginationObject.currentPage)
    const data = useSelector((state: RootState) => state.countrySlice.inputCountryData)
    const getCountry = useCallback(async () => {
        await dispatch(getListInputCountryAsync())
    }, [dispatch])

    useEffect(() => {
        getCountry()
    }, [getCountry])

    useEffect(() => {
        if (getCountrystatus === 'succeeded') {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }, [getCountrystatus])
    const onSelectCountryChange = (value: string) => {
        setCountry(value)
    }
    const handleCreateProvince = async () => {
        if (name === '') {
            toastError('Tên là bắt buộc')
        } else if (country === undefined) {
            toastError('Bạn cần chọn quốc gia')
        } else {
            dispatch(showProgressLoading('Đang tạo...'))
            try {
                await dispatch(
                    createProvinceAsync({
                        name: name,
                        countryId: country || ''
                    })
                )
            } finally {
                dispatch(hideProgressLoading())
                dispatch(setOpenAddProvince(false))
                await dispatch(
                    getAllProvinceAsync({
                        PageNumber: pageNumber,
                        PageSize: 25
                    })
                )
                setName('')
                setCountry(undefined)
            }
        }
    }
    return (
        <Drawer
            open={openAddProvince}
            className='p-4'
            onClose={() => dispatch(setOpenAddProvince(false))}
            placement='right'
            overlayProps={<div className='fixed top-0 right-0 left-0 bottom-0 bg-black-50/50'></div>}
        >
            <div className='mt-12'>
                <div className='mb-6 flex items-center justify-between'>
                    <Typography variant='h5' color='blue-gray'>
                        Thêm mới tỉnh / thành phố
                    </Typography>
                    <IconButton
                        variant='text'
                        color='blue-gray'
                        onClick={() => {
                            setName('')
                            setCountry(undefined)
                            dispatch(setOpenAddProvince(false))
                        }}
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
                            <span className='text-red-500 mr-1'>*</span>
                            Tên tỉnh / thành phố
                        </Typography>
                        <Input
                            size='md'
                            placeholder='Nhập tên tỉnh thành'
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            crossOrigin={undefined}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-full custom-form'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            <span className='text-red-500 mr-1'>*</span>
                            Quốc gia
                        </Typography>
                        <Select
                            showSearch
                            style={{ height: '2.5rem', borderRadius: '0.125rem', borderColor: '#000' }}
                            placeholder='Search to Select'
                            disabled={isDisabled}
                            optionFilterProp='children'
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            onChange={onSelectCountryChange}
                            value={country}
                            options={data.map((item, index) => {
                                return {
                                    value: item.id,
                                    label: item.name
                                }
                            })}
                        />
                    </div>
                </form>
            </div>
            <div className='flex gap-2 fixed bottom-6'>
                <Button size='sm' className='rounded-sm px-6' onClick={handleCreateProvince}>
                    Lưu
                </Button>
                <Button
                    size='sm'
                    variant='outlined'
                    onClick={() => {
                        setName('')
                        setCountry(undefined)
                        dispatch(setOpenAddProvince(false))
                    }}
                    className='rounded-sm'
                >
                    Hủy bỏ
                </Button>
            </div>
        </Drawer>
    )
}

export default CreateProvinceForm
