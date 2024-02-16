import { IconButton, Drawer, Typography, Input, Button } from '@material-tailwind/react'
import { Select, Space } from 'antd'
import { getListInputCountryAPI } from 'apis/countryAPI'
import { getListInputCountryAsync } from 'apps/country.slice'
import { hideProgressLoading, showProgressLoading } from 'apps/loading.slice'
import { createProvinceAsync, getAllProvinceAsync, setOpenEditProvince, updateProvinceAsync } from 'apps/province.slice'
import { useAppDispatch, RootState } from 'apps/store'
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function EditProvinceForm() {
    const dispatch = useAppDispatch()
    const [isDisabled, setIsDisabled] = useState(true)
    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const openEditProvince = useSelector((state: RootState) => state.provinceSlice.openEditProvince)
    const editProvinceData = useSelector((state: RootState) => state.provinceSlice.editProvince)
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
        setName(editProvinceData.name || '')
        setCountry(editProvinceData.countryId)
    }, [editProvinceData.countryId, editProvinceData.name])

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
    const handleEditProvince = async () => {
        dispatch(showProgressLoading('Đang sửa...'))
        try {
            await dispatch(
                updateProvinceAsync({
                    id: editProvinceData.id,
                    name: name,
                    countryId: country
                })
            )
        } finally {
            dispatch(hideProgressLoading())
            dispatch(setOpenEditProvince(false))
            await dispatch(
                getAllProvinceAsync({
                    PageNumber: pageNumber,
                    PageSize: 25
                })
            )
        }
    }
    return (
        <Drawer
            open={openEditProvince}
            className='p-4'
            onClose={() => dispatch(setOpenEditProvince(false))}
            placement='right'
            overlayProps={<div className='fixed top-0 bottom-0 left-0 right-0 bg-black-50/50'></div>}
        >
            <div className='mt-12'>
                <div className='flex items-center justify-between mb-6'>
                    <Typography variant='h5' color='blue-gray'>
                        Chỉnh sửa tỉnh / thành phố
                    </Typography>
                    <IconButton variant='text' color='blue-gray' onClick={() => dispatch(setOpenEditProvince(false))}>
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
                <form className='flex flex-col w-full mt-4 gap-y-2' onSubmit={handleEditProvince}>
                    <div className='flex flex-col w-full gap-4 mb-1'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
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
                    <div className='flex flex-col w-full gap-4 mb-1 custom-form'>
                        <Typography variant='h6' color='blue-gray' className='-mb-2'>
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
            <div className='fixed flex gap-2 bottom-6'>
                <Button size='sm' className='px-6 rounded-sm' onClick={handleEditProvince}>
                    Lưu
                </Button>
                <Button
                    size='sm'
                    variant='outlined'
                    onClick={() => dispatch(setOpenEditProvince(false))}
                    className='rounded-sm'
                >
                    Hủy bỏ
                </Button>
            </div>
        </Drawer>
    )
}

export default EditProvinceForm
