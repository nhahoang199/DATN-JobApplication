import { Input } from '@material-tailwind/react'
import React from 'react'
import CityOptions from './cityOptions'
import SearchButton from '../searchButton'

function JobSearch() {
    return (
        <form>
            <div className='items-center justify-between px-2 py-1 mb-8 rounded-lg sm:flex relative'>
                <CityOptions />
                <div className='w-8/12 mx-8 bg-white rounded-lg h-11'>
                    <Input
                        label='Nhập công việc hoặc ngành nghề bạn quan tâm... (skill, job title, company and more)'
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

export default JobSearch
