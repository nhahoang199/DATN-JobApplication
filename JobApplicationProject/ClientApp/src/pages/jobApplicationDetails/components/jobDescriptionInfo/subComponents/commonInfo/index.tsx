import {
    UserIcon,
    MapPinIcon,
    BriefcaseIcon,
    ClockIcon,
    CurrencyDollarIcon,
    QueueListIcon,
    UsersIcon
} from '@heroicons/react/24/solid'
import React from 'react'
import { Typography } from '@material-tailwind/react'
import { IJobApplicationModel } from 'models'

function JobDescCommonInfo(props: { item: IJobApplicationModel }) {
    const { item } = props
    return (
        <div className='flex flex-col w-full pb-4 mt-0 gap-y-2'>
            <Typography variant='h5' color='blue-gray' className='py-0'>
                {item.jobDescriptionName}
            </Typography>{' '}
            <div className='flex flex-col w-full mt-4 gap-y-2'>
                <div className='flex flex-row gap-x-6 '>
                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                id='Layer_1'
                                data-name='Layer 1'
                                viewBox='0 0 24 24'
                                width={512}
                                height={512}
                                className='w-5 h-5 text-blue-gray-800'
                            >
                                <path d='m12,0c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5Zm8,23c0-.553-.447-1-1-1H5c-.553,0-1,.447-1,1s.447,1,1,1h14c.553,0,1-.447,1-1Zm-4-5c0-.553-.447-1-1-1h-6c-.553,0-1,.447-1,1s.447,1,1,1h6c.553,0,1-.447,1-1Zm1-5c0-.553-.447-1-1-1h-8c-.553,0-1,.447-1,1s.447,1,1,1h8c.553,0,1-.447,1-1Zm3.5-6c.459,0,.859-.313.97-.757l.357-1.43,1.432-.385c.443-.119.748-.525.74-.984-.008-.458-.328-.853-.775-.956l-1.404-.325-.351-1.406C21.359.312,20.959,0,20.5,0s-.859.313-.97.757l-.354,1.418-1.418.354c-.445.111-.757.511-.757.97,0,.459.313.859.757.97l1.418.354.354,1.418c.111.445.511.757.97.757ZM3,20c.307,0,.583-.187.697-.472l.526-1.316,1.318-.556c.283-.119.464-.398.459-.705-.006-.307-.198-.579-.484-.687l-1.299-.492-.52-1.301c-.114-.285-.39-.472-.697-.472s-.583.187-.697.472l-.523,1.308-1.308.523C.187,16.417,0,16.693,0,17c0,.307.187.583.472.697l1.308.523.523,1.308c.114.285.39.472.697.472Zm13.877-10.521c.176-.32.162-.711-.035-1.019l-.105-.165c-.925-1.438-2.497-2.296-4.206-2.296h-1.061c-1.709,0-3.281.858-4.207,2.298l-.104.163c-.197.308-.211.698-.035,1.019.175.321.512.521.877.521h8c.365,0,.702-.199.877-.521Z' />
                            </svg>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography variant='paragraph' color='gray' className='-mb-3 italic text-gray-500'>
                                Kinh nghiệm
                            </Typography>
                            <Typography
                                placeholder='Quản lý, thực tập,...'
                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                            >
                                1-2 năm
                            </Typography>{' '}
                        </div>
                    </div>
                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                            <UsersIcon className='w-5 h-5 text-blue-gray-800' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography variant='paragraph' color='gray' className='-mb-3 italic text-gray-500'>
                                Số lượng
                            </Typography>
                            <Typography
                                placeholder='Quản lý, thực tập,...'
                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                            >
                                5 người
                            </Typography>{' '}
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-x-6'>
                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                            <QueueListIcon className='w-5 h-5 text-blue-gray-800' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography variant='paragraph' color='gray' className='-mb-3 italic text-gray-500'>
                                Cấp bậc
                            </Typography>
                            <Typography
                                placeholder='Quản lý, thực tập,...'
                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                            >
                                Intern / Junior
                            </Typography>{' '}
                        </div>
                    </div>
                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                            <BriefcaseIcon className='w-5 h-5 text-blue-gray-800' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography variant='paragraph' color='gray' className='-mb-3 italic text-gray-500'>
                                Loại hình công việc
                            </Typography>
                            <Typography
                                placeholder='Quản lý, thực tập,...'
                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                            >
                                Toàn thời gian
                            </Typography>{' '}
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-x-6'>
                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                            <CurrencyDollarIcon className='w-5 h-5 text-blue-gray-800' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography variant='paragraph' color='gray' className='-mb-3 italic text-gray-500'>
                                Mức lương
                            </Typography>
                            <Typography
                                placeholder='Quản lý, thực tập,...'
                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                            >
                                10-20 triệu
                            </Typography>{' '}
                        </div>
                    </div>
                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                            <UserIcon className='w-5 h-5 text-blue-gray-800' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography variant='paragraph' color='gray' className='-mb-3 italic text-gray-500'>
                                Giới tính
                            </Typography>
                            <Typography
                                placeholder='Quản lý, thực tập,...'
                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                            >
                                Không yêu cầu
                            </Typography>{' '}
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-x-6'>
                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                            <MapPinIcon className='w-5 h-5 text-blue-gray-800' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography variant='paragraph' color='gray' className='-mb-3 italic text-gray-500'>
                                Địa điểm
                            </Typography>
                            <Typography
                                placeholder='Quản lý, thực tập,...'
                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                            >
                                Thanh Xuân - Hà Nội
                            </Typography>{' '}
                        </div>
                    </div>
                    <div className='flex flex-row items-center w-1/2 gap-4 mb-1'>
                        <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-blue-gray-50'>
                            <ClockIcon className='w-5 h-5 text-blue-gray-800' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography variant='paragraph' color='gray' className='-mb-3 italic text-gray-500'>
                                Thời gian hết hạn
                            </Typography>
                            <Typography
                                placeholder='Quản lý, thực tập,...'
                                className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                            >
                                -
                            </Typography>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDescCommonInfo
