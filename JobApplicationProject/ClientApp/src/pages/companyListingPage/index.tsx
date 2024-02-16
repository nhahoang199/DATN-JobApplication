import { Typography, List, ListItem } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'
import './index.scss'
import React, { useEffect } from 'react'
import { CompanyCardItem, CompanySearch } from './components'
import { Pagination } from 'components/common'
import { useDispatch } from 'react-redux'
import { setNavigation } from 'apps/navBar.slice'
import { avepoint, companyavatar } from 'assets'

function SearchCompanyPage() {
    const data = [
        {
            id: '123123',
            name: 'AvePoint VietNam',
            title: 'Software Vendor',
            rating: 4.5,
            src: avepoint
        },
        {
            id: '123123',
            name: 'OneMount VietNam',
            title: 'Software Vendor',
            rating: 5,
            src: companyavatar
        },
        {
            id: '123123',
            name: 'Niteco Vietnam Co., Ltd',
            title: 'Software Vendor',
            rating: 4,
            src: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBenZhT2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--78256eff185961a6e10697371a0cdb77a0c699c9/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/Blue%20Illustrated%20Pool%20Party%20Instagram%20Post.png'
        },
        {
            id: '123123',
            name: 'AZuhlke Engineering Vietnam',
            title: 'Software Vendor',
            rating: 4,
            src: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd3VjSFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2bdbcc850d1da5bfc0f020011301732f4a85a9bc/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/Zuhlke-LOGO(forpartners).jpg'
        },
        {
            id: '123123',
            name: 'Orient Software Development Corp.',
            title: 'Software Vendor',
            rating: 5,
            src: companyavatar
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
            <div className='relative px-40 pt-20 pb-10 h-72 bgCompanySearch'>
                <div className='bg-company-overlay'></div>
                <CompanySearch />
            </div>
            <div className='px-32 3xl:px-64'>
                <div className='flex flex-col items-center w-full h-24 px-0 my-8 divide-y-2 divide-gray-200 divide-solid'>
                    <div className='w-full mb-2'>
                        <Typography variant='h3' className='text-gray-800'>
                            Công ty đang hoạt động
                        </Typography>
                    </div>
                    <div className='flex flex-row items-center w-full py-4'>
                        <Typography variant='paragraph' className='font-medium text-gray-800'>
                            Tìm thấy {data.length} công ty
                        </Typography>
                        <Typography variant='paragraph' className='ml-4 text-gray-600'>
                            |
                        </Typography>
                        <Typography variant='paragraph' className='ml-4 font-medium text-gray-500'>
                            Hiển thị 1 - 12 trên xxx
                        </Typography>
                    </div>
                </div>
                <List className='grid items-center justify-center w-full grid-cols-2 gap-8 mt-8 gap-y-12 justify-items-center xl:grid-cols-3 3xl:gap-x-12'>
                    {data.map((item, index) => (
                        <NavLink to={`details/${item.id}`} className='w-full' key={index}>
                            <ListItem className='flex flex-col p-0 overflow-hidden shadow-lg rounded-xl'>
                                <CompanyCardItem item={item} />
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
