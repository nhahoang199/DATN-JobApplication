import { EnvelopeOpenIcon, DocumentTextIcon } from '@heroicons/react/24/solid'
import { Card, CardBody, CardHeader, Typography, Textarea } from '@material-tailwind/react'
import { setOpenAttachmentPreview } from 'apps/dialog.slice'
import { useAppDispatch } from 'apps/store'
import { pdfIcon } from 'assets'
import { IJobApplicationModel } from 'models'

function JobApplicationInfoSection(props: { item: IJobApplicationModel }) {
    const { item } = props
    const dispatch = useAppDispatch()
    return (
        <Card className='h-full w-full rounded-md'>
            <CardHeader floated={false} shadow={false} className='rounded-none pt-0 mx-6'>
                <Typography variant='h6' color='blue-gray' className='mb-2 mr-4 text-lg'>
                    Đơn ứng tuyển
                </Typography>
            </CardHeader>
            <CardBody className='pb-6 mx-6 pt-0 px-0'>
                <div className='flex flex-col grow ml-0'>
                    <div className='mt-2 w-full flex flex-col gap-y-2'>
                        <div className='flex flex-row gap-x-6'>
                            <div className='mb-1 flex flex-row gap-4 w-full items-center'>
                                <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm'>
                                    <DocumentTextIcon className='h-5 w-5 text-blue-gray-800' />
                                </div>
                                <div
                                    className='flex flex-col gap-4'
                                    onClick={() => dispatch(setOpenAttachmentPreview(true))}
                                >
                                    <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                                        CV
                                    </Typography>
                                    <div className='flex gap-x-2 items-end cursor-pointer'>
                                        <img src={pdfIcon} alt='pdfIcon' className='w-4 h-4' />
                                        <Typography
                                            placeholder='Quản lý, thực tập,...'
                                            className=' !border-gray-800 focus:!border-gray-900 rounded-sm text-gray-900 underline underline-offset-4 !bg-white h-5'
                                        >
                                            {' '}
                                            {'CVfile'}
                                        </Typography>{' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row gap-x-6'>
                            <div className='mb-1 flex flex-row gap-4 w-full items-start'>
                                <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm mt-2'>
                                    <EnvelopeOpenIcon className='h-5 w-5 text-blue-gray-800' />
                                </div>
                                <div className='flex flex-col gap-4 grow'>
                                    <Typography variant='paragraph' color='gray' className='text-gray-500 italic -mb-3'>
                                        Thư xin việc
                                    </Typography>
                                    <Typography
                                        variant='paragraph'
                                        color='gray'
                                        className='text-gray-900 max-h-[120px] overflow-y-scroll scrollbar -mb-3'
                                    >
                                        {item.coverLetter}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default JobApplicationInfoSection
