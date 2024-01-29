import React from 'react'
import { Card, CardBody, Typography, CardHeader } from '@material-tailwind/react'
import {
    UserCommonInfo,
    UserViewIntro,
    UserViewEducation,
    UserViewExperience,
    UserViewSkills,
    UserViewProjects,
    UserViewCertificates,
    UserViewAwards
} from './subcomponents'

function UserInfoSection() {
    return (
        <Card className='h-full w-full rounded-md'>
            <CardHeader floated={false} shadow={false} className='rounded-none pt-0 mx-6'>
                <Typography variant='h6' color='blue-gray' className='mb-2 mr-4 text-lg'>
                    Thông tin cá nhân
                </Typography>
            </CardHeader>
            <CardBody className='pb-6 mx-6 pt-2 px-0'>
                <div className='flex flex-col grow ml-0 divide-y-2 divide-gray-300'>
                    <UserCommonInfo />
                    <UserViewIntro />
                    <UserViewEducation />
                    <UserViewExperience />
                    <UserViewSkills />
                    <UserViewProjects />
                    <UserViewCertificates />
                    <UserViewAwards />
                </div>
            </CardBody>
        </Card>
    )
}

export default UserInfoSection
