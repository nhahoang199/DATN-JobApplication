import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Select, Spin } from 'antd'
import type { SelectProps } from 'antd'
import debounce from 'lodash/debounce'
import axiosInstance from 'apis/axiosConfig'
import { ICompanyModel } from 'models'
import { Spinner } from '@material-tailwind/react'

export interface DebounceSelectProps<ValueType = any>
    extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
    fetchOptions: (search: string) => Promise<ValueType[]>
    debounceTimeout?: number
}

function DebounceSelect<ValueType extends { key?: string; label: React.ReactNode; value: string | number } = any>({
    fetchOptions,
    debounceTimeout = 800,
    ...props
}: DebounceSelectProps<ValueType>) {
    const [fetching, setFetching] = useState(false)
    const [options, setOptions] = useState<ValueType[]>([])
    const fetchRef = useRef(0)
    const fetchCompanyList = useCallback(async () => {
        const companyList = await axiosInstance.get(`Company`)
        setOptions(
            companyList.data.items.map((item: ICompanyModel) => ({
                label: `${item.name}`,
                value: item.id
            }))
        )
    }, [])
    useEffect(() => {
        fetchCompanyList()
    }, [fetchCompanyList])

    const debounceFetcher = useMemo(() => {
        const loadOptions = (value: string) => {
            if (value !== '') {
                fetchRef.current += 1
                const fetchId = fetchRef.current
                setOptions([])
                setFetching(true)

                fetchOptions(value).then((newOptions) => {
                    if (fetchId !== fetchRef.current) {
                        // for fetch callback order
                        return
                    }

                    setOptions(newOptions)
                    setFetching(false)
                })
            } else {
                setFetching(false)
            }
        }

        return debounce(loadOptions, debounceTimeout)
    }, [fetchOptions, debounceTimeout])

    return (
        <Select
            labelInValue
            showSearch
            filterOption={false}
            onSearch={debounceFetcher}
            notFoundContent={
                fetching ? (
                    <div className='flex justify-center py-2'>
                        <Spinner className='w-8 h-8' />
                    </div>
                ) : (
                    <div className='flex justify-center py-2 text-gray-400'>Không tìm thấy công ty nào</div>
                )
            }
            {...props}
            options={options}
        />
    )
}

// Usage of DebounceSelect
interface UserValue {
    label: string
    value: string
}

async function searchCompanyList(companyName: string): Promise<UserValue[]> {
    return axiosInstance.get(`Company/searchByName?name=${companyName.trim()}`).then((response) =>
        response.data.map((item: ICompanyModel) => ({
            label: `${item.name}`,
            value: item.id
        }))
    )
}
interface SearchCompanyFieldProps {
    value: UserValue | undefined // Change the type according to your use case
    setFieldValue: (value: UserValue | undefined) => void // Change the type according to your use case
    // Add other props as needed
}
const SearchCompanyField = ({ value, setFieldValue, ...props }: SearchCompanyFieldProps) => {
    return (
        <DebounceSelect
            // mode='multiple'
            value={value}
            placeholder='Tìm kiếm công ty'
            fetchOptions={searchCompanyList}
            onChange={(newValue) => {
                setFieldValue(newValue as UserValue)
            }}
            style={{ height: '2.5rem', borderRadius: '0.125rem', borderColor: '#000' }}
            {...props}
        />
    )
}

export default SearchCompanyField
