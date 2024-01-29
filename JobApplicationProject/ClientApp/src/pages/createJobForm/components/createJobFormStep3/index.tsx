import { Card, Input, Typography } from '@material-tailwind/react'
import DOMPurify from 'dompurify'
import { IJobApplicationModel } from 'models'
import './index.scss'
import React from 'react'
import {
    BriefcaseIcon,
    ClockIcon,
    CurrencyDollarIcon,
    MapPinIcon,
    QueueListIcon,
    UserIcon,
    UsersIcon
} from '@heroicons/react/24/solid'

function CreateJobStep3(props: { formData: IJobApplicationModel }) {
    const { formData } = props
    const sanitizedData = (data: string) => ({
        __html: DOMPurify.sanitize(data)
    })
    const renderTypeString = (type: number) => {
        if (type === 0) return 'Toàn thời gian'
        else if (type === 1) return 'Bán thời gian'
        else if (type === 2) return 'Từ xa'
        else return '-'
    }
    return (
        <>
            <Card color='white' shadow={true} className='w-full h-fit pb-6 rounded-md'>
                <Typography variant='h5' color='blue-gray' className='px-6 py-4 border-b-2 border-b-gray-200'>
                    Thông tin cơ bản
                </Typography>
                <form className='mt-4 px-6 w-full flex flex-col gap-y-2'>
                    <div className='flex flex-row gap-x-6'>
                        <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                            <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                {/* <Bars2Icon className='h-5 w-5 text-blue-gray-800' />
                                 */}
                                <img
                                    alt='titleicon'
                                    className='w-5 h-5'
                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcklEQVR4nO3XwQ2AIBQE0d/VlMCR/quBBriZ4ALzEi/eNqMYqyRJf6L1ceJV1w+pQ+CQMFgkDBYJw/NFSPngfS3ikGaR4aOF70j31GL38ZsGh4TBImGwSBgsEgaLhMEiYbBIGJ4rwuLnJvFeXTtEklQbTe5Pn155HoAFAAAAAElFTkSuQmCC'
                                ></img>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                                    Tiêu đề
                                </Typography>
                                <Typography
                                    placeholder='Quản lý, thực tập,...'
                                    className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                >
                                    {formData.title || '-'}
                                </Typography>{' '}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-6 '>
                        <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                            <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    id='Layer_1'
                                    data-name='Layer 1'
                                    viewBox='0 0 24 24'
                                    width={512}
                                    height={512}
                                    className='h-5 w-5 text-blue-gray-800'
                                >
                                    <path d='m12,0c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5Zm8,23c0-.553-.447-1-1-1H5c-.553,0-1,.447-1,1s.447,1,1,1h14c.553,0,1-.447,1-1Zm-4-5c0-.553-.447-1-1-1h-6c-.553,0-1,.447-1,1s.447,1,1,1h6c.553,0,1-.447,1-1Zm1-5c0-.553-.447-1-1-1h-8c-.553,0-1,.447-1,1s.447,1,1,1h8c.553,0,1-.447,1-1Zm3.5-6c.459,0,.859-.313.97-.757l.357-1.43,1.432-.385c.443-.119.748-.525.74-.984-.008-.458-.328-.853-.775-.956l-1.404-.325-.351-1.406C21.359.312,20.959,0,20.5,0s-.859.313-.97.757l-.354,1.418-1.418.354c-.445.111-.757.511-.757.97,0,.459.313.859.757.97l1.418.354.354,1.418c.111.445.511.757.97.757ZM3,20c.307,0,.583-.187.697-.472l.526-1.316,1.318-.556c.283-.119.464-.398.459-.705-.006-.307-.198-.579-.484-.687l-1.299-.492-.52-1.301c-.114-.285-.39-.472-.697-.472s-.583.187-.697.472l-.523,1.308-1.308.523C.187,16.417,0,16.693,0,17c0,.307.187.583.472.697l1.308.523.523,1.308c.114.285.39.472.697.472Zm13.877-10.521c.176-.32.162-.711-.035-1.019l-.105-.165c-.925-1.438-2.497-2.296-4.206-2.296h-1.061c-1.709,0-3.281.858-4.207,2.298l-.104.163c-.197.308-.211.698-.035,1.019.175.321.512.521.877.521h8c.365,0,.702-.199.877-.521Z' />
                                </svg>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                                    Kinh nghiệm
                                </Typography>
                                <Typography
                                    placeholder='Quản lý, thực tập,...'
                                    className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                >
                                    {formData.expirence || '-'}
                                </Typography>{' '}
                            </div>
                        </div>
                        <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                            <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                <UsersIcon className='h-5 w-5 text-blue-gray-800' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                                    Số lượng
                                </Typography>
                                <Typography
                                    placeholder='Quản lý, thực tập,...'
                                    className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                >
                                    {formData.quantity || '-'}
                                </Typography>{' '}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-6'>
                        <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                            <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                <QueueListIcon className='w-5 h-5 text-blue-gray-800' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                                    Cấp bậc
                                </Typography>
                                <Typography
                                    placeholder='Quản lý, thực tập,...'
                                    className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                >
                                    {formData.position || '-'}
                                </Typography>{' '}
                            </div>
                        </div>
                        <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                            <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                <BriefcaseIcon className='w-5 h-5 text-blue-gray-800' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                                    Loại hình công việc
                                </Typography>
                                <Typography
                                    placeholder='Quản lý, thực tập,...'
                                    className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                >
                                    {renderTypeString(formData.type || -1)}
                                </Typography>{' '}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-6'>
                        <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                            <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                <CurrencyDollarIcon className='h-5 w-5 text-blue-gray-800' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                                    Mức lương
                                </Typography>
                                <Typography
                                    placeholder='Quản lý, thực tập,...'
                                    className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                >
                                    {formData.salary || '-'}
                                </Typography>{' '}
                            </div>
                        </div>
                        <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                            <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                <UserIcon className='h-5 w-5 text-blue-gray-800' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                                    Giới tính
                                </Typography>
                                <Typography
                                    placeholder='Quản lý, thực tập,...'
                                    className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                >
                                    {formData.gender || '-'}
                                </Typography>{' '}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-6'>
                        <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                            <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                <MapPinIcon className='h-5 w-5 text-blue-gray-800' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                                    Địa điểm
                                </Typography>
                                <Typography
                                    placeholder='Quản lý, thực tập,...'
                                    className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                >
                                    {'-'}
                                </Typography>{' '}
                            </div>
                        </div>
                        <div className='mb-1 flex flex-row gap-4 w-1/2 items-center'>
                            <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                <ClockIcon className='h-5 w-5 text-blue-gray-800' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                                    Thời gian hết hạn
                                </Typography>
                                <Typography
                                    placeholder='Quản lý, thực tập,...'
                                    className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 !bg-white h-5'
                                >
                                    {formData.expiredOn || '-'}
                                </Typography>{' '}
                            </div>
                        </div>
                    </div>
                </form>
            </Card>
            <Card color='white' shadow={true} className='w-full h-fit pb-6 mt-4 rounded-md'>
                <Typography variant='h5' color='blue-gray' className='px-6 py-4 border-b-2 border-b-gray-200'>
                    Miêu tả chi tiết công việc
                </Typography>
                <form className='mt-4 px-6 w-full flex flex-col gap-y-4 '>
                    <div className='flex flex-row gap-x-6 '>
                        <div className='mb-1 flex flex-col gap-4 w-full'>
                            <Typography variant='h6' color='blue-gray' className='italic mb-0'>
                                Mô tả công việc
                            </Typography>
                            <div
                                className='render-content px-5'
                                dangerouslySetInnerHTML={sanitizedData(formData.description || '')}
                            ></div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-6'>
                        <div className='mb-1 flex flex-col gap-4 w-full'>
                            <Typography variant='h6' color='blue-gray' className='-mb-1 italic'>
                                Yêu cầu công việc
                            </Typography>
                            <div
                                className='render-content px-5'
                                dangerouslySetInnerHTML={sanitizedData(formData.jobRequired || '')}
                            ></div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-6'>
                        <div className='mb-1 flex flex-col gap-4 w-full'>
                            <Typography variant='h6' color='blue-gray' className='-mb-1 italic'>
                                Tại sao bạn thích làm việc ở đây
                            </Typography>
                            <div
                                className='render-content px-5'
                                dangerouslySetInnerHTML={sanitizedData(formData.jobBenefit || '')}
                            ></div>
                        </div>
                    </div>
                </form>
            </Card>
        </>
    )
}

export default CreateJobStep3
