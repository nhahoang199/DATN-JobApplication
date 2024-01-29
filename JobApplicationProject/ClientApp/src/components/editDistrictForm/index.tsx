import { IconButton, Drawer, Typography, Input, Button } from '@material-tailwind/react'
import { Select } from 'antd'
import { getListInputCountryAsync } from 'apps/country.slice'
import {
    createDistrictAsync,
    getAllDistrictAsync,
    getDistrictDetailsAsync,
    setOpenEditDistrict,
    updateDistrictAsync
} from 'apps/district.slice'
import { showProgressLoading, hideProgressLoading } from 'apps/loading.slice'
import {
    createProvinceAsync,
    getAllProvinceAsync,
    getProvinceByCountryIdAsync,
    setOpenAddProvince
} from 'apps/province.slice'
import { useAppDispatch, RootState } from 'apps/store'
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toastError } from 'utils/function'

function EditDistrictForm() {
    const dispatch = useAppDispatch()
    const [isDisabledCountry, setIsDisabledCountry] = React.useState<boolean>(true)
    const [isDisabledProvince, setIsDisabledProvince] = React.useState<boolean>(true)
    const [name, setName] = useState('')
    const [country, setCountry] = useState<string | undefined>()
    const [province, setProvince] = useState<string | undefined>()
    const openEditDistrict = useSelector((state: RootState) => state.districtSlice.openEditDistrict)
    const editDistrictId = useSelector((state: RootState) => state.districtSlice.editDistrictId)
    const editDistrictData = useSelector((state: RootState) => state.districtSlice.editDistrictData)
    const countryData = useSelector((state: RootState) => state.countrySlice.inputCountryData)
    const provinceData = useSelector((state: RootState) => state.provinceSlice.provinceByCountryId)
    const getCountryStatus = useSelector((state: RootState) => state.countrySlice.getInputCountryStatus)
    const getDistrictDetailsStatus = useSelector((state: RootState) => state.districtSlice.getDistrictDetailsStatus)
    const getProvinceStatus = useSelector((state: RootState) => state.provinceSlice.getProvinceByCountryIdStatus)
    const pageNumber = useSelector((state: RootState) => state.districtSlice.paginationObject.currentPage)

    const getCountry = useCallback(async () => {
        await dispatch(getListInputCountryAsync())
    }, [dispatch])
    const getProvinceByCountryId = useCallback(
        async (id: string) => {
            await dispatch(getProvinceByCountryIdAsync(id))
        },
        [dispatch]
    )
    const getDistrictDetails = useCallback(async () => {
        await dispatch(getDistrictDetailsAsync(editDistrictId))
    }, [dispatch, editDistrictId])
    const onSelectCountryChange = async (value: string) => {
        setCountry(value)
        setProvince(undefined)
        await getProvinceByCountryId(value)
    }
    const onSelectProvinceChange = async (value: string) => {
        setProvince(value)
    }
    useEffect(() => {
        if (openEditDistrict) getDistrictDetails()
    }, [getDistrictDetails, openEditDistrict])
    useEffect(() => {
        if (getDistrictDetailsStatus === 'succeeded' && openEditDistrict) {
            setName(editDistrictData.name || '')
            setProvince(editDistrictData.provinceId)
            setCountry(editDistrictData.countryId)
        }
    }, [
        editDistrictData.countryId,
        editDistrictData.name,
        editDistrictData.provinceId,
        getDistrictDetailsStatus,
        openEditDistrict
    ])
    useEffect(() => {
        if (openEditDistrict) getCountry()
    }, [getCountry, openEditDistrict])
    useEffect(() => {
        if (getCountryStatus === 'succeeded') {
            setIsDisabledCountry(false)
        } else {
            setIsDisabledCountry(true)
        }
    }, [getCountryStatus])
    useEffect(() => {
        if (openEditDistrict) getProvinceByCountryId(editDistrictData.countryId || '')
    }, [editDistrictData.countryId, getProvinceByCountryId, openEditDistrict])
    useEffect(() => {
        if (getProvinceStatus === 'succeeded') {
            setIsDisabledProvince(false)
        } else {
            setIsDisabledProvince(true)
        }
    }, [getProvinceStatus])
    const handleEditDistrict = async () => {
        if (name === '') {
            toastError('Tên là bắt buộc')
        } else if (country === undefined) {
            toastError('Bạn cần chọn quốc gia')
        } else if (province === undefined) {
            toastError('Bạn cần chọn tỉnh')
        } else {
            dispatch(showProgressLoading('Đang sửa...'))
            try {
                await dispatch(
                    updateDistrictAsync({
                        id: editDistrictId,
                        name: name,
                        provinceId: province || ''
                    })
                )
            } finally {
                dispatch(hideProgressLoading())
                dispatch(setOpenEditDistrict(false))
                await dispatch(
                    getAllDistrictAsync({
                        PageNumber: pageNumber,
                        PageSize: 25
                    })
                )
                setName('')
                setCountry(undefined)
                setProvince(undefined)
            }
        }
    }
    return (
        <Drawer
            open={openEditDistrict}
            className='p-4'
            onClose={() => dispatch(setOpenEditDistrict(false))}
            placement='right'
            overlayProps={<div className='fixed top-0 right-0 left-0 bottom-0 bg-black-50/50'></div>}
        >
            <div className='mt-12'>
                <div className='mb-6 flex items-center justify-between'>
                    <Typography variant='h5' color='blue-gray'>
                        Chỉnh sửa Quận / Huyện
                    </Typography>
                    <IconButton variant='text' color='blue-gray' onClick={() => dispatch(setOpenEditDistrict(false))}>
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
                            Tên Quận / Huyện
                        </Typography>
                        <Input
                            size='md'
                            placeholder=''
                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm'
                            labelProps={{
                                className: 'before:content-none after:content-none'
                            }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            crossOrigin={undefined}
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
                            Tỉnh
                        </Typography>
                        <Select
                            showSearch
                            style={{ height: '2.5rem', borderRadius: '0.125rem', borderColor: '#000' }}
                            placeholder='Search to Select'
                            optionFilterProp='children'
                            disabled={isDisabledProvince}
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={provinceData.map((item, index) => {
                                return {
                                    value: item.id,
                                    label: item.name
                                }
                            })}
                            value={province}
                            onChange={onSelectProvinceChange}
                        />
                    </div>
                </form>
            </div>
            <div className='flex gap-2 fixed bottom-6'>
                <Button size='sm' className='rounded-sm px-6' onClick={handleEditDistrict}>
                    Lưu
                </Button>
                <Button
                    size='sm'
                    variant='outlined'
                    onClick={() => dispatch(setOpenEditDistrict(false))}
                    className='rounded-sm'
                >
                    Hủy bỏ
                </Button>
            </div>
        </Drawer>
    )
}

export default EditDistrictForm
