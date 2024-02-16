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
                    <div className='absolute top-0 w-full h-full bg-center bg-cover rounded-md bg-profile-background bg-search' />
                    <div className='absolute top-0 w-full h-full bg-center bg-cover rounded-md bg-black/75' />
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
                        className='absolute z-10 flex items-center justify-center w-10 h-10 duration-200 bg-transparent rounded-lg cursor-pointer right-4 bottom-3 hover:scale-105 hover:text-blue-gray-900 hover:bg-gray-50'
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
            <div className='relative flex flex-col w-full min-w-0 -mt-20 break-words bg-transparent rounded-3xl z-1 '>
                <div className='px-6'>
                    <div className='flex flex-wrap justify-between'>
                        <div className='flex justify-start w-full px-4 lg:order-1 lg:w-6/12'>
                            <div className='relative'>
                                <div className='relative w-40 -mt-14'>
                                    <Avatar
                                        src={companyavatar}
                                        alt='Profile picture'
                                        variant='circular'
                                        className='w-full h-full border-4 border-gray-100 border-solid shadow-xl cursor-pointer'
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
                                            className='absolute z-10 flex items-center justify-center w-10 h-10 duration-200 rounded-full cursor-pointer right-2 bottom-2 bg-gray-50 hover:scale-105 hover:text-blue-gray-900 hover:bg-gray-50'
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
                            <div className='flex flex-col items-start ml-4 -mt-6'>
                                <Typography variant='h3' color='blue-gray' className='mb-2'>
                                    AvePoint VietNam
                                </Typography>
                                <div className='flex items-center justify-center gap-2 mb-16'>
                                    {/* <MapPinIcon className='w-4 h-4 -mt-px text-blue-gray-700' />
                                    <Typography className='font-medium text-blue-gray-700'>California</Typography> */}
                                    <div className='flex flex-col items-center font-bold gap-y-0 text-blue-gray-500'>
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
                                                className='h-full mb-1 ml-2'
                                                readonly
                                            />
                                        </div>
                                        {/* <Typography
                                            color='blue-gray'
                                            className='mb-0 text-sm font-medium text-blue-gray-500'
                                        >
                                            Based on 134 Reviews
                                        </Typography> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-center w-full px-4 mt-10 lg:order-2 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center'>
                                    <Button className='bg-blue-400'>Connect</Button>
                                </div> */}
                        <div className='w-full px-4 lg:order-3 lg:w-4/12'>
                            <div className='flex items-center justify-center py-4 pt-8 lg:pt-4'>
                                {/* <div className='p-3 mr-4 text-center'>
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
                                        <div className='p-3 mr-4 text-center'>
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
                                    {/* <div className='flex flex-col items-center font-bold gap-y-0 text-blue-gray-500'>
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
                                                className='h-full mb-1 ml-2'
                                                readonly
                                            />
                                        </div>
                                        <Typography
                                            color='blue-gray'
                                            className='mb-0 text-sm font-medium text-blue-gray-500'
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
