import { MapPinIcon } from '@heroicons/react/24/outline'
import { Avatar, Typography } from '@material-tailwind/react'
import { avepoint, myavatar } from 'assets'
import React from 'react'
import RatingCompany from './ratingCompany'

function CompanyDetailsHeader() {
    return (
        // <div className='container mx-auto'>
        <div className='relative flex flex-col w-full min-w-0 -mt-40 break-words bg-white shadow-lg rounded-3xl z-1 '>
            <div className='px-6'>
                <div className='flex flex-wrap justify-between'>
                    <div className='flex justify-start w-full px-4 lg:order-1 lg:w-5/12'>
                        <div className='relative'>
                            <div className='w-40 -mt-16'>
                                <Avatar
                                    src={avepoint}
                                    alt='Profile picture'
                                    variant='circular'
                                    className='w-full h-full shadow-xl'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col items-start mt-4 ml-4'>
                            <Typography variant='h3' color='blue-gray' className='mb-2'>
                                AvePoint VietNam
                            </Typography>
                            <div className='flex items-center justify-center gap-2 mb-16'>
                                <MapPinIcon className='w-4 h-4 -mt-px text-blue-gray-700' />
                                <Typography className='font-medium text-blue-gray-700'>Thanh Xuan</Typography>
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
                            <div className='p-3 text-center lg:mr-4'>
                                <Typography variant='lead' color='blue-gray' className='font-bold uppercase '>
                                    4
                                </Typography>
                                <Typography variant='small' className='font-normal text-blue-gray-500'>
                                    Việc làm
                                </Typography>
                            </div>
                            <div className='p-3 text-center lg:mr-4'>
                                <RatingCompany />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='my-8 text-center'>
                                <div className='flex items-center justify-center gap-2 mb-2'>
                                    <BriefcaseIcon className='w-4 h-4 -mt-px text-blue-gray-700' />
                                    <Typography className='font-medium text-blue-gray-700'>
                                        Solution Manager - Creative Tim Officer
                                    </Typography>
                                </div>
                                <div className='flex items-center justify-center gap-2 mb-2'>
                                    <BuildingLibraryIcon className='w-4 h-4 -mt-px text-blue-gray-700' />
                                    <Typography className='font-medium text-blue-gray-700'>
                                        University of Computer Science
                                    </Typography>
                                </div>
                            </div>

                            <div className='py-6 mb-10 text-center border-t border-blue-gray-50'>
                                <div className='flex flex-wrap justify-center mt-2'>
                                    <div className='flex flex-col items-center w-full px-4 lg:w-9/12'>
                                        <Typography className='mb-8 font-normal text-blue-gray-500'>
                                            An artist of considerable range, Jenna the name taken by Melbourne-raised,
                                            Brooklyn-based Nick Murphy writes, performs and records all of his own
                                            music, giving it a warm, intimate feel with a solid groove structure. An
                                            artist of considerable range.
                                        </Typography>
                                        <Button variant='text'>Show more</Button>
                                    </div>
                                </div>
                            </div> */}
            </div>
        </div>
        // </div>
    )
}

export default CompanyDetailsHeader
