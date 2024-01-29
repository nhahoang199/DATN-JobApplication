import React from 'react'
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Typography } from '@material-tailwind/react'
import { CompanyCommonProfile, CompanyIntro, CompanySkills, CompanyBenefit, CompanyContactTab } from './subComponents'

export default function CompanyProfileTab() {
    const [activeTab, setActiveTab] = React.useState(0)

    const data = [
        {
            label: 'Thông tin chung',
            component: <CompanyCommonProfile />
        },
        // {
        //     label: 'Địa chỉ',
        //     component: <CompanyAddresses />
        // },
        {
            label: 'Giới thiệu',
            component: <CompanyIntro />
        },
        {
            label: 'Chuyên môn',
            component: <CompanySkills />
        },
        {
            label: 'Phúc lợi',
            component: <CompanyBenefit />
        },
        {
            label: 'Liên hệ',
            component: <CompanyContactTab />
        }
        // {
        //     label: 'Đánh giá',
        //     component: null
        // }
    ]
    return (
        <Tabs value={activeTab} className=''>
            <TabsHeader
                className='rounded-none border-b-2 border-blue-gray-50 bg-transparent p-0 flex flex-row'
                indicatorProps={{
                    className: 'bg-transparent border-b-4 border-gray-900 shadow-none rounded-none'
                }}
            >
                {data.map(({ label }, index) => (
                    <Tab
                        key={index}
                        value={index}
                        onClick={() => setActiveTab(index)}
                        // className={activeTab === value ? 'text-gray-900' : ''}
                        className={`${activeTab === index ? 'text-gray-900' : ''} pb-4  mr-6 !w-fit text-gray-600 `}
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
            <TabsBody className='pb-6'>
                {data.map(({ label, component }, index) => (
                    <TabPanel key={index} value={index} className='px-0'>
                        {component}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    )
}
