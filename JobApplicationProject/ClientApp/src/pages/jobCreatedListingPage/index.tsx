import React, { useEffect } from 'react'
import { Card, CardHeader, Typography, CardBody, CardFooter } from '@material-tailwind/react'
import { useAppDispatch } from 'apps/store'
import { setHRManagerTab } from 'apps/Tabs.slice'
import { SimplePagination } from 'components/common'
import { JobCreatedListingHeader, JobCreatedListingTable } from './components'

// const TABS = [
//     {
//         label: 'All',
//         value: 'all'
//     },
//     {
//         label: 'Monitored',
//         value: 'monitored'
//     },
//     {
//         label: 'Unmonitored',
//         value: 'unmonitored'
//     }
// ]

const TABLE_HEAD = ['Tiêu đề', 'Cấp bậc', 'Số lượng tuyển', 'Được tạo bởi', 'Ngày tạo', 'Ngày hết hạn', 'Trạng thái']

const TABLE_ROWS = [
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        job: 'Programator',
        org: 'Backend Developer',
        online: true,
        date: '23/04/18'
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
        name: 'Alexa Liras',
        email: 'alexa@creative-tim.com',
        job: 'Programator',
        org: 'Junior Front-end Developer',
        online: true,
        date: '23/04/18'
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
        name: 'Laurent Perrier',
        email: 'laurent@creative-tim.com',
        job: 'Manager ',
        org: 'Junior/Intern Project Manager',
        online: true,
        date: '19/09/17'
    }
]

export default function JobCreatedListingPage() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setHRManagerTab(5))
    }, [dispatch])
    return (
        <Card className='w-full h-full px-2 rounded-md shadow-lg shadow-gray-400'>
            <CardHeader floated={false} shadow={false} className='pt-0 rounded-none'>
                <JobCreatedListingHeader />
                {/* <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
                    <Tabs value='all' className='w-full md:w-max'>
                        <TabsHeader>
                            {TABS.map(({ label, value }) => (
                                <Tab key={value} value={value}>
                                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>
                    <div className='w-full md:w-72'>
                        <Input
                            label='Search'
                            icon={<MagnifyingGlassIcon className='w-5 h-5' />}
                            crossOrigin={undefined}
                        />
                    </div>
                </div> */}
            </CardHeader>
            <CardBody className='p-0 mx-4 h-[calc(100vh-17.1rem)] overflow-y-scroll scrollbar'>
                <JobCreatedListingTable TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS} />
            </CardBody>
            <CardFooter className='flex items-center justify-between p-4 pl-8 border-t border-blue-gray-50'>
                <Typography variant='small' color='blue-gray' className='font-normal'>
                    12 items
                </Typography>
                <div className='flex gap-2'>
                    {/* <Button className='flex items-center gap-3 py-3' size='sm' variant='outlined'>
                        <ChevronLeftIcon strokeWidth={2} className='w-4 h-4' />
                        Trang trước
                    </Button>
                    <Button className='flex items-center gap-3 py-3' size='sm' variant='outlined'>
                        Trang sau <ChevronRightIcon strokeWidth={2} className='w-4 h-4' />
                    </Button> */}
                    <SimplePagination
                        onPageChange={function (pageNumber: number): void {
                            throw new Error('Function not implemented.')
                        }}
                        totalPage={0}
                    />
                </div>
            </CardFooter>
        </Card>
    )
}
