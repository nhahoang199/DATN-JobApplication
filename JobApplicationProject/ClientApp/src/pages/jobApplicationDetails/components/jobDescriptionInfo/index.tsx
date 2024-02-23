import { CardHeader, CardBody, Card, Typography } from '@material-tailwind/react'
import React from 'react'
import { JobDescCommonInfo, JobDescSection, JobBenefitInfo, JobRequiredInfo } from './subComponents'
import { IJobApplicationModel } from 'models'

function JobDescriptionInfoSection(props: { item: IJobApplicationModel }) {
    const { item } = props
    return (
        <Card className='h-full w-full rounded-md'>
            <CardHeader floated={false} shadow={false} className='rounded-none pt-0 mx-6'>
                <Typography variant='h6' color='blue-gray' className='mb-2 mr-4 text-lg'>
                    Thông tin việc làm
                </Typography>
            </CardHeader>
            <CardBody className='pb-6 mx-6 pt-2 px-0'>
                <div className='flex flex-col grow ml-0 divide-y-2 divide-gray-300'>
                    <JobDescCommonInfo item={item}/>
                    <JobDescSection />
                    <JobRequiredInfo />
                    <JobBenefitInfo />
                </div>
            </CardBody>
        </Card>
    )
}

export default JobDescriptionInfoSection
