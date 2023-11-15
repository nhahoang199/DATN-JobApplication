import { JobPagination, JobItems } from './subComponents'
import { List, Typography } from '@material-tailwind/react'
function JobReferences() {
    const data = [
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        },
        {
            name: 'acxzcxczxc',
            desc: 'zxczxczxczxczx'
        }
    ]
    return (
        <section className='flex justify-center bg-gray-100'>
            <div className='!max-w-full container !w-full mx-4 px-0 xl:px-12 3xl:mx-24 3xl:px-4'>
                <div className='flex flex-row justify-between w-full h-24 px-0 2xl:px-2 3xl:px-12'>
                    <Typography variant='h2' className='w-1/5'>
                        Việc làm gợi ý
                    </Typography>
                </div>
                <List className='grid items-center grid-cols-1 gap-6 px-0 align-middle justify-items-center 3xl:gap-12 2xl:px-2 3xl:px-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4'>
                    {data.map((item, index) => (
                        <a href='#zzxczxc' className='w-full'>
                            <JobItems />
                        </a>
                    ))}
                </List>
                <div className='flex justify-center my-12'>
                    <JobPagination />
                </div>
            </div>
        </section>
    )
}

export default JobReferences
