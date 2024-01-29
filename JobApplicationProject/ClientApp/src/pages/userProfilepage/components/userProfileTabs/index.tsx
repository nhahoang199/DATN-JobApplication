import React from 'react'
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Typography } from '@material-tailwind/react'
import {
    UserEducation,
    UserIntroduce,
    UserExperience,
    UserSkills,
    UserProject,
    UserCertificates,
    UserAwards
} from './subComponents'

export default function UserProfileTab() {
    const [activeTab, setActiveTab] = React.useState(0)

    const data = [
        {
            label: 'Giới thiệu',
            component: <UserIntroduce />
        },
        {
            label: 'Học vấn',
            component: <UserEducation />
        },
        {
            label: 'Kinh nghiệm làm việc',
            component: <UserExperience />
        },
        {
            label: 'Kỹ năng',
            component: <UserSkills />
        },
        {
            label: 'Dự án cá nhân',
            component: <UserProject />
        },
        {
            label: 'Chứng chỉ',
            component: <UserCertificates />
        },
        {
            label: 'Giải thưởng',
            component: <UserAwards />
        }
    ]
    return (
        <Tabs value={activeTab} className=''>
            <TabsHeader
                className='rounded-none border-b border-blue-gray-50 bg-transparent p-0 flex flex-row'
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
                        className={`${activeTab === index ? 'text-gray-900' : ''} pb-4  mr-6 !w-fit text-gray-600`}
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
