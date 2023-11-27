import { Input } from '@material-tailwind/react'
import SearchButton from 'components/common/searchButton'
import React from 'react'

function CompanySearch() {
    return (
        <form className='relative'>
            <h1 className='mb-4 text-4xl font-bold text-center text-gray-200'>Tìm kiếm công ty mà bạn đang quan tâm</h1>
            <h1 className='mb-6 font-bold text-lg text-center text-gray-200'>
                Các công ty đang hoạt động tại
                <span className='text-deep-purple-400'> Việt Nam</span>
            </h1>
            <div className='items-center justify-center px-2 py-1 mb-20 rounded-lg sm:flex'>
                <div className='w-8/12 mx-8 bg-white rounded-lg h-11'>
                    <Input
                        label='Nhập tên công ty'
                        crossOrigin=''
                        className='h-12'
                        size='lg'
                        labelProps={{
                            className: '!text-gray-900 h-12'
                        }}
                    />
                </div>
                <SearchButton />
            </div>
        </form>
    )
}

export default CompanySearch
