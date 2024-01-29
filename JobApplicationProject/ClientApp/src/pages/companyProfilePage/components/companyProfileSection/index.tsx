import { CameraIcon } from '@heroicons/react/24/solid'
import { Avatar, Typography, Rating, Tooltip, IconButton } from '@material-tailwind/react'
import {
    setOpenEditBackgroundImage,
    setOpenEditProfileImage,
    setSrcBackgroundImage,
    setSrcProfileImage
} from 'apps/companyProfile.slice'
import { useAppDispatch } from 'apps/store'
import { companyavatar } from 'assets'
import React, { useState } from 'react'

function CompanyProfileSection() {
    const dispatch = useAppDispatch()
    const [rated, setRated] = useState(4.5)
    return (
        <>
            <div className='relative block h-[30vh] rounded-md'>
                <div className='cursor-pointer'>
                    <div className='bg-profile-background absolute top-0 h-full w-full bg-search bg-cover bg-center rounded-md' />
                    <div className='absolute top-0 h-full w-full bg-black/75 bg-cover bg-center rounded-md' />
                </div>

                <Tooltip content='Thay đổi ảnh bìa'>
                    {/* <div> */}
                    <IconButton
                        variant='text'
                        // size='sm'
                        ripple={false}
                        onClick={() => {
                            dispatch(setOpenEditBackgroundImage(true))
                            dispatch(
                                setSrcBackgroundImage(
                                    'https://images.unsplash.com/photo-1629196613836-0a7e2541990a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2634&q=80'
                                )
                            )
                        }}
                        className='absolute right-4 bottom-3 rounded-lg w-10 h-10 bg-transparent flex items-center justify-center cursor-pointer hover:scale-105 duration-200 hover:text-blue-gray-900 z-10 hover:bg-gray-50'
                    >
                        <CameraIcon className='w-6 h-6 text-blue-gray-800' />
                        {/* <input
                            type='file'
                            id='companybackground'
                            name='companybackground'
                            title='companybackground'
                            className='hidden'
                        /> */}
                    </IconButton>
                    {/* </div> */}
                </Tooltip>
            </div>
            <div className='flex w-full -mt-20 relative min-w-0 flex-col break-words rounded-3xl bg-transparent z-1 '>
                <div className='px-6'>
                    <div className='flex flex-wrap justify-between'>
                        <div className='flex w-full justify-start px-4 lg:order-1 lg:w-5/12'>
                            <div className='relative'>
                                <div className='relative -mt-14 w-40'>
                                    <Avatar
                                        src={companyavatar}
                                        alt='Profile picture'
                                        variant='circular'
                                        className='h-full w-full shadow-xl border-solid border-4 border-gray-100 cursor-pointer'
                                    />
                                    <Tooltip content='Thay đổi ảnh đại diện'>
                                        <IconButton
                                            variant='text'
                                            // size='sm'
                                            ripple={false}
                                            onClick={() => {
                                                dispatch(setOpenEditProfileImage(true))
                                                dispatch(setSrcProfileImage(companyavatar))
                                            }}
                                            className='absolute right-2 bottom-2 rounded-full w-10 h-10 bg-gray-50 flex items-center justify-center cursor-pointer hover:scale-105 duration-200 hover:text-blue-gray-900 z-10 hover:bg-gray-50'
                                        >
                                            <CameraIcon className='w-5 h-5 text-blue-gray-800' />
                                            {/* <input
                                                type='file'
                                                id='companyavatar'
                                                name='companyavatar'
                                                title='companyavatar'
                                                className='hidden'
                                            /> */}
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                            <div className='ml-4 -mt-6 flex flex-col items-start'>
                                <Typography variant='h3' color='blue-gray' className='mb-2'>
                                    Google
                                </Typography>
                                <div className='mb-16 flex items-center justify-center gap-2'>
                                    {/* <MapPinIcon className='-mt-px h-4 w-4 text-blue-gray-700' />
                                    <Typography className='font-medium text-blue-gray-700'>California</Typography> */}
                                    <div className='flex flex-col items-center gap-y-0  font-bold text-blue-gray-500'>
                                        <div className='flex flex-row items-center text-xl'>
                                            <Typography
                                                variant='lead'
                                                color='blue-gray'
                                                className='font-bold uppercase'
                                            >
                                                {rated}
                                            </Typography>
                                            <Rating
                                                value={Math.round(rated)}
                                                onChange={(value) => setRated(value)}
                                                className='ml-2 h-full mb-1'
                                                readonly
                                            />
                                        </div>
                                        {/* <Typography
                                            color='blue-gray'
                                            className='font-medium text-sm text-blue-gray-500 mb-0'
                                        >
                                            Based on 134 Reviews
                                        </Typography> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='mt-10 flex w-full justify-center px-4 lg:order-2 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center'>
                                    <Button className='bg-blue-400'>Connect</Button>
                                </div> */}
                        <div className='w-full px-4 lg:order-3 lg:w-4/12'>
                            <div className='flex justify-center items-center py-4 pt-8 lg:pt-4'>
                                {/* <div className='mr-4 p-3 text-center'>
                                            <Typography
                                                variant='lead'
                                                color='blue-gray'
                                                className='font-bold uppercase'
                                            >
                                                22
                                            </Typography>
                                            <Typography variant='small' className='font-normal text-blue-gray-500'>
                                                Friends
                                            </Typography>
                                        </div>
                                        <div className='mr-4 p-3 text-center'>
                                            <Typography
                                                variant='lead'
                                                color='blue-gray'
                                                className='font-bold uppercase'
                                            >
                                                10
                                            </Typography>
                                            <Typography variant='small' className='font-normal text-blue-gray-500'>
                                                Photos
                                            </Typography>
                                        </div> */}
                                {/* <div className='p-3 text-center lg:mr-4'>
                                    <Typography variant='lead' color='blue-gray' className='font-bold uppercase '>
                                        89
                                    </Typography>
                                    <Typography variant='small' className='font-normal text-blue-gray-500'>
                                        Việc làm
                                    </Typography>
                                </div> */}
                                <div className='p-3 text-center lg:mr-4'>
                                    {/* <div className='flex flex-col items-center gap-y-0  font-bold text-blue-gray-500'>
                                        <div className='flex flex-row items-center text-xl'>
                                            <Typography
                                                variant='lead'
                                                color='blue-gray'
                                                className='font-bold uppercase'
                                            >
                                                {rated}
                                            </Typography>

                                            <Rating
                                                value={Math.round(rated)}
                                                onChange={(value) => setRated(value)}
                                                className='ml-2 h-full mb-1'
                                                readonly
                                            />
                                        </div>
                                        <Typography
                                            color='blue-gray'
                                            className='font-medium text-sm text-blue-gray-500 mb-0'
                                        >
                                            Based on 134 Reviews
                                        </Typography>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyProfileSection
