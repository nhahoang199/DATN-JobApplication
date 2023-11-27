import { MapPinIcon } from '@heroicons/react/24/outline'
import { Avatar, Typography } from '@material-tailwind/react'
import { myavatar } from 'assets'
import React from 'react'
import RatingCompany from './ratingCompany'

function CompanyDetailsHeader() {
    return (
        // <div className='container mx-auto'>
        <div className='relative -mt-40 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-lg  z-1 '>
            <div className='px-6'>
                <div className='flex flex-wrap justify-between'>
                    <div className='flex w-full justify-start px-4 lg:order-1 lg:w-5/12'>
                        <div className='relative'>
                            <div className='-mt-16 w-40'>
                                <Avatar
                                    src={myavatar}
                                    alt='Profile picture'
                                    variant='circular'
                                    className='h-full w-full shadow-xl'
                                />
                            </div>
                        </div>
                        <div className='ml-4 mt-4 flex flex-col items-start'>
                            <Typography variant='h3' color='blue-gray' className='mb-2'>
                                Matthew Stones
                            </Typography>
                            <div className='mb-16 flex items-center justify-center gap-2'>
                                <MapPinIcon className='-mt-px h-4 w-4 text-blue-gray-700' />
                                <Typography className='font-medium text-blue-gray-700'>Đông Lào, California</Typography>
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
                            <div className='p-3 text-center lg:mr-4'>
                                <Typography variant='lead' color='blue-gray' className='font-bold uppercase '>
                                    89
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
                                <div className='mb-2 flex items-center justify-center gap-2'>
                                    <BriefcaseIcon className='-mt-px h-4 w-4 text-blue-gray-700' />
                                    <Typography className='font-medium text-blue-gray-700'>
                                        Solution Manager - Creative Tim Officer
                                    </Typography>
                                </div>
                                <div className='mb-2 flex items-center justify-center gap-2'>
                                    <BuildingLibraryIcon className='-mt-px h-4 w-4 text-blue-gray-700' />
                                    <Typography className='font-medium text-blue-gray-700'>
                                        University of Computer Science
                                    </Typography>
                                </div>
                            </div>

                            <div className='mb-10 border-t border-blue-gray-50 py-6 text-center'>
                                <div className='mt-2 flex flex-wrap justify-center'>
                                    <div className='flex w-full flex-col items-center px-4 lg:w-9/12'>
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
