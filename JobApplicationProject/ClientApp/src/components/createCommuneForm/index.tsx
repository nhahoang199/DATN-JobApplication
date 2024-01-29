import { IconButton, Drawer, Typography, Input, Button } from '@material-tailwind/react'
import { Select } from 'antd'
import { createCommuneAsync, getAllCommuneAsync, setOpenAddCommune } from 'apps/commune.slice'
import { getListInputCountryAsync } from 'apps/country.slice'
import { getDistrictByProvinceIdAsync } from 'apps/district.slice'
import { showProgressLoading, hideProgressLoading } from 'apps/loading.slice'
import { getProvinceByCountryIdAsync } from 'apps/province.slice'
import { useAppDispatch, RootState } from 'apps/store'
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toastError } from 'utils/function'

function CreateCommuneForm() {
    const dispatch = useAppDispatch()
    const [name, setName] = useState('')
    const [country, setCountry] = useState<string | undefined>()
    const [province, setProvince] = useState<string | undefined>()
    const [district, setDistrict] = useState<string | undefined>()
    const [isDisabledCountry, setIsDisabledCountry] = React.useState<boolean>(true)
    const [isDisabledProvince, setIsDisabledProvince] = React.useState<boolean>(true)
    const [isDisabledDistrict, setIsDisabledDistrict] = React.useState<boolean>(true)
    const openAddCommune = useSelector((state: RootState) => state.communeSlice.openAddCommune)
    const getCountryStatus = useSelector((state: RootState) => state.countrySlice.getInputCountryStatus)
    const getProvinceStatus = useSelector((state: RootState) => state.provinceSlice.getProvinceByCountryIdStatus)
    const getDistrictByProvinceIdStatus = useSelector(
        (state: RootState) => state.districtSlice.getDistrictByProvinceIdStatus
    )
    const countryData = useSelector((state: RootState) => state.countrySlice.inputCountryData)
    const provinceData = useSelector((state: RootState) => state.provinceSlice.provinceByCountryId)
    const districtData = useSelector((state: RootState) => state.districtSlice.districtByProvinceId)
    const pageNumber = useSelector((state: RootState) => state.communeSlice.paginationObject.currentPage)

    const onSelectCountryChange = async (value: string) => {
        setCountry(value)
        setProvince(undefined)
        await dispatch(getProvinceByCountryIdAsync(value))
    }
    const onSelectProvinceChange = async (value: string) => {
        setProvince(value)
        setDistrict(undefined)
        await dispatch(getDistrictByProvinceIdAsync(value))
    }
    const onSelectDistrictChange = async (value: string) => {
        setDistrict(value)
    }
    const getCountry = useCallback(async () => {
        await dispatch(getListInputCountryAsync())
    }, [dispatch])

    const handleCreateCommune = async () => {
        if (name === '') {
            toastError('Tên là bắt buộc')
        } else if (country === undefined) {
            toastError('Bạn cần chọn quốc gia')
        } else if (province === undefined) {
            toastError('Bạn cần chọn tỉnh')
        } else if (district === undefined) {
            toastError('Bạn cần chọn huyện')
        } else {
            dispatch(showProgressLoading('Đang tạo...'))
            try {
                await dispatch(
                    createCommuneAsync({
                        name: name,
                        districtId: district || ''
                    })
                )
            } finally {
                dispatch(hideProgressLoading())
                dispatch(setOpenAddCommune(false))
                await dispatch(
                    getAllCommuneAsync({
                        PageNumber: pageNumber,
                        PageSize: 25
                    })
                )
                setName('')
                setCountry(undefined)
                setProvince(undefined)
                setDistrict(undefined)
                setIsDisabledProvince(true)
                setIsDisabledDistrict(true)
            }
        }
    }

    const handleClose = () => {
        dispatch(setOpenAddCommune(false))
        setName('')
        setCountry(undefined)
        setProvince(undefined)
        setDistrict(undefined)
        setIsDisabledProvince(true)
        setIsDisabledDistrict(true)
    }

    useEffect(() => {
        getCountry()
    }, [getCountry])
    useEffect(() => {
        if (getCountryStatus === 'succeeded') {
            setIsDisabledCountry(false)
        } else {
            setIsDisabledCountry(true)
        }
    }, [getCountryStatus])
    useEffect(() => {
        if (getProvinceStatus === 'succeeded') {
            setIsDisabledProvince(false)
        } else {
            setIsDisabledProvince(true)
        }
    }, [getProvinceStatus])
    useEffect(() => {
        if (getDistrictByProvinceIdStatus === 'succeeded') {
            setIsDisabledDistrict(false)
        } else {
            setIsDisabledDistrict(true)
        }
    }, [getDistrictByProvinceIdStatus])

    return (
        <Drawer
            open={openAddCommune}
            className='p-4'
            onClose={handleClose}
            placement='right'
            overlayProps={<div className='fixed top-0 right-0 left-0 bottom-0 bg-black-50/50'></div>}
        >
            <div className='mt-12'>
                <div className='mb-6 flex items-center justify-between'>
                    <Typography variant='h5' color='blue-gray'>
                        Thêm mới Phường / Xã
                    </Typography>
                    <IconButton variant='text' color='blue-gray' onClick={handleClose}>
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
                            Tên Phường / Xã
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
                    <div className='mb-1 flex flex-col gap-4 w-full custom-form'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            <span className='text-red-500 mr-1'>*</span>
                            Quốc gia
                        </Typography>
                        <Select
                            showSearch
                            style={{ height: '2.5rem', borderRadius: '0.125rem', borderColor: '#000' }}
                            placeholder='Search to Select'
                            disabled={isDisabledCountry}
                            optionFilterProp='children'
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            onChange={onSelectCountryChange}
                            value={country}
                            options={countryData.map((item, index) => {
                                return {
                                    value: item.id,
                                    label: item.name
                                }
                            })}
                        />
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-full custom-form'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            <span className='text-red-500 mr-1'>*</span>
                            Tỉnh Thành
                        </Typography>
                        <Select
                            showSearch
                            style={{ height: '2.5rem', borderRadius: '0.125rem', borderColor: '#000' }}
                            placeholder='Search to Select'
                            disabled={isDisabledProvince}
                            optionFilterProp='children'
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            onChange={onSelectProvinceChange}
                            value={province}
                            options={provinceData.map((item, index) => {
                                return {
                                    value: item.id,
                                    label: item.name
                                }
                            })}
                        />
                    </div>
                    <div className='mb-1 flex flex-col gap-4 w-full custom-form'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
                            <span className='text-red-500 mr-1'>*</span>
                            Quận Huyện
                        </Typography>
                        <Select
                            showSearch
                            style={{ height: '2.5rem', borderRadius: '0.125rem', borderColor: '#000' }}
                            placeholder='Search to Select'
                            optionFilterProp='children'
                            disabled={isDisabledDistrict}
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            onChange={onSelectDistrictChange}
                            value={district}
                            options={districtData.map((item, index) => {
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
                <Button size='sm' className='rounded-sm px-6' onClick={handleCreateCommune}>
                    Lưu
                </Button>
                <Button size='sm' variant='outlined' onClick={handleClose} className='rounded-sm'>
                    Hủy bỏ
                </Button>
            </div>
        </Drawer>
    )
}

export default CreateCommuneForm
