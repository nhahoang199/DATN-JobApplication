// import { Typography } from '@material-tailwind/react'
// import './index.scss'
// import React, { useState } from 'react'

// function CompanyTabs() {
//     const [isActive, setIsActive] = useState(1)
//     function classNames(...classes: any) {
//         return classes.filter(Boolean).join(' ')
//     }
//     return (
//         <div className='w-full flex flex-row border-b-2 border-solid'>
//             <Typography
//                 variant='h5'
//                 color='blue-gray'
//                 className={classNames(
//                     isActive === 1 ? 'company-tab-active fade-in' : 'fade-out',
//                     'px-6 py-3 cursor-pointer company-tab'
//                 )}
//                 onClick={() => setIsActive(1)}
//             >
//                 Giới thiệu
//             </Typography>
// <Typography
//     variant='h5'
//     color='blue-gray'
//     className={classNames(
//         isActive === 2 ? 'company-tab-active fade-in' : 'fade-out',
//         'px-6 py-3 cursor-pointer company-tab'
//     )}
//     onClick={() => setIsActive(2)}
// >
//     Đánh giá
// </Typography>
//         </div>
//     )
// }

// export default CompanyTabs
import React from 'react'
import { Tabs, TabsHeader, Tab, Typography } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'

export default function CompanyTabs() {
    const [activeTab, setActiveTab] = React.useState('html')
    const data = [
        {
            label: 'Giới thiệu',
            value: 'html',
            href: ''
        },
        {
            label: 'Đánh giá',
            value: 'react',
            href: 'review'
        }
    ]
    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className='rounded-none border-b border-blue-gray-50 bg-transparent p-0 flex flex-row'
                indicatorProps={{
                    className: 'bg-transparent border-b-4 border-gray-900 shadow-none rounded-none'
                }}
            >
                {data.map(({ label, value, href }) => (
                    <NavLink to={href}>
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={`${activeTab === value ? 'text-gray-900' : ''} py-6  px-6 !w-fit text-gray-600`}
                        >
                            <Typography
                                variant='h5'
                                className={`${activeTab === value ? 'text-gray-900' : 'text-gray-600'} `}
                            >
                                {label}
                            </Typography>
                        </Tab>
                    </NavLink>
                ))}
            </TabsHeader>
        </Tabs>
    )
}
