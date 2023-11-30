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
import { Tabs, TabsHeader, Tab, Typography, TabsBody, TabPanel } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'
import { RootState, useAppDispatch } from 'apps/store'
import { useSelector } from 'react-redux'
import { setCompanyTab } from 'apps/Tabs.slice'
import CompanyDescription from '../companyDescription'
import CompanyReview from '../companyReview'
import { useState } from 'react'

export default function CompanyTabs() {
    const dispatch = useAppDispatch()
    // const activeTab = useSelector((state: RootState) => state.companyTab.activeTabs)

    const [activeTab, setActiveTab] = useState(0)
    const data = [
        {
            label: 'Giới thiệu',
            href: '',
            index: 0,
            component: <CompanyDescription />
        },
        {
            label: 'Đánh giá',
            href: 'review',
            index: 1,
            component: <CompanyReview />
        }
    ]

    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className='rounded-none border-b border-blue-gray-50 bg-transparent p-0 flex flex-row mb-1'
                indicatorProps={{
                    className: 'bg-transparent border-b-4 border-gray-900 shadow-none rounded-none'
                }}
            >
                {data.map(({ label, href, index }) => (
                    // <NavLink to={href}>
                    <Tab
                        value={index}
                        onClick={() => dispatch(setCompanyTab(index))}
                        className={`${activeTab === index ? 'text-gray-900' : ''} py-6  px-6 !w-fit text-gray-600`}
                    >
                        <Typography
                            variant='h5'
                            className={`${activeTab === index ? 'text-gray-900' : 'text-gray-600'} `}
                        >
                            {label}
                        </Typography>
                    </Tab>
                    // </NavLink>
                ))}
            </TabsHeader>
            <TabsBody className='mt-0'>
                {data.map(({ label, component }, index) => (
                    <TabPanel key={label} value={index}>
                        {component}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    )
}
