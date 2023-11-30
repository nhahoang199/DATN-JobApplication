import React from 'react'
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Typography } from '@material-tailwind/react'
import PersonalInformation from '../personalInformation'

export default function UserProfileTab() {
    const [activeTab, setActiveTab] = React.useState(0)

    const data = [
        {
            label: 'Thông tin cá nhân',
            component: <PersonalInformation />
        },
        {
            label: 'Học vấn',
            component: null
        },
        {
            label: 'Kinh nghiệm làm việc',
            component: null
        },
        {
            label: 'Kỹ năng',
            component: null
        }
    ]
    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className='rounded-none border-b border-blue-gray-50 bg-transparent p-0 flex flex-row'
                indicatorProps={{
                    className: 'bg-transparent border-b-8 border-gray-900 shadow-none rounded-none'
                }}
            >
                {data.map(({ label }, index) => (
                    <Tab
                        key={index}
                        value={index}
                        onClick={() => setActiveTab(index)}
                        // className={activeTab === value ? 'text-gray-900' : ''}
                        className={`${activeTab === index ? 'text-gray-900' : ''} py-6  mr-6 !w-fit text-gray-600`}
                    >
                        <Typography
                            variant='h6'
                            className={`${activeTab === index ? 'text-gray-900' : 'text-gray-900 font-normal'} `}
                        >
                            {label}
                        </Typography>
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody className=' pb-6'>
                {data.map(({ label, component }, index) => (
                    <TabPanel
                        key={label}
                        value={index}
                        className='overflow-y-scroll  pl-0 h-[calc(100vh-13.2rem)] scrollbar '
                    >
                        {component}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
        //     <Tabs value={activeTab}>
        //     <TabsHeader
        //         className='rounded-none border-b border-blue-gray-50 bg-transparent p-0 flex flex-row'
        //         indicatorProps={{
        //             className: 'bg-transparent border-b-4 border-gray-900 shadow-none rounded-none'
        //         }}
        //     >
        //         {data.map(({ label, href, index }) => (
        //             <NavLink to={href}>
        //                 <Tab
        //                     value={index}
        //                     onClick={() => dispatch(setCompanyTab(index))}
        //                     className={`${activeTab === index ? 'text-gray-900' : ''} py-6  px-6 !w-fit text-gray-600`}
        //                 >
        //                     <Typography
        //                         variant='h5'
        //                         className={`${activeTab === index ? 'text-gray-900' : 'text-gray-600'} `}
        //                     >
        //                         {label}
        //                     </Typography>
        //                 </Tab>
        //             </NavLink>
        //         ))}
        //     </TabsHeader>
        // </Tabs>
    )
}
