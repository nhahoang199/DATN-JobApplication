import { Typography, List, ListItem } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'
import './index.scss'
import React, { useEffect } from 'react'
import { CompanyCardItem, CompanySearch } from './components'
import { Pagination } from 'components/common'
import { useDispatch } from 'react-redux'
import { setNavigation } from 'apps/navBar.slice'

function SearchCompanyPage() {
    const data = [
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            id: '5f02604a-b688-4bab-9f3d-01be94b6173b',
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        }
    ]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setNavigation(1))
    }, [dispatch])
    const handlePageChange = (pageNumber: number) => {
        // Khi trang thay đổi, dispatch action để gọi API với trang mới
    }
    return (
        <section className='pb-10'>
            <div className='px-40 pt-20 pb-10 h-72 bgCompanySearch relative'>
                <div className='bg-company-overlay'></div>
                <CompanySearch />
            </div>
            <div className='px-32 3xl:px-64'>
                <div className='flex flex-col items-center w-full h-24 px-0 my-8  divide-y-2 divide-solid divide-gray-200'>
                    <div className='w-full mb-2'>
                        <Typography variant='h3' className='text-gray-800'>
                            Công ty đang hoạt động
                        </Typography>
                    </div>
                    <div className='w-full flex flex-row items-center py-4'>
                        <Typography variant='paragraph' className='font-medium text-gray-800'>
                            Tìm thấy {data.length} công ty
                        </Typography>
                        <Typography variant='paragraph' className='ml-4 text-gray-600'>
                            |
                        </Typography>
                        <Typography variant='paragraph' className='font-medium ml-4 text-gray-500'>
                            Hiển thị 1 - 12 trên xxx
                        </Typography>
                    </div>
                </div>
                <List className='grid items-center justify-center w-full grid-cols-2  mt-8 gap-8 gap-y-12 justify-items-center xl:grid-cols-3 3xl:gap-x-12'>
                    {data.map((item, index) => (
                        <NavLink to={`details/${item.id}`} className='w-full' key={index}>
                            <ListItem className='flex flex-col shadow-lg p-0 rounded-xl overflow-hidden'>
                                <CompanyCardItem />
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
            </div>
            <div className='flex justify-center my-12'>
                <Pagination onPageChange={handlePageChange} />
            </div>
        </section>
    )
}

export default SearchCompanyPage
