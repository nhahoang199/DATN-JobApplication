import { ArrowUpTrayIcon, DocumentArrowUpIcon, DocumentCheckIcon } from '@heroicons/react/24/outline'
import { Card, CardHeader, Typography, CardBody } from '@material-tailwind/react'
import React, { useState } from 'react'

function UserCVSection() {
    const [cv1File, setCV1File] = useState()
    const [cv1FileName, setCV1FileName] = useState('')
    const [cv2File, setCV2File] = useState()
    const [cv2FileName, setCV2FileName] = useState('')
    const [cv3File, setCV3File] = useState()
    const [cv3FileName, setCV3FileName] = useState('')

    const handleSelectedFile1 = (event: any) => {
        setCV1File(event.target.files[0])
        setCV1FileName(event.target.files[0].name)
    }
    const handleSelectedFile2 = (event: any) => {
        setCV2File(event.target.files[0])
        setCV2FileName(event.target.files[0].name)
    }
    const handleSelectedFile3 = (event: any) => {
        setCV3File(event.target.files[0])
        setCV3FileName(event.target.files[0].name)
    }
    return (
        <Card className='h-full w-full rounded-md '>
            <CardHeader floated={false} shadow={false} className='rounded-none pt-0 mt-6 mx-6'>
                <div className=''>
                    <Typography variant='h5' color='blue-gray' className='py-2'>
                        Quản lý CV
                    </Typography>{' '}
                    <Typography variant='paragraph' className='text-base'>
                        Tải CV của bạn bên dưới để có thể sử dụng xuyên suốt quá trình tìm việc
                    </Typography>
                </div>
            </CardHeader>
            <CardBody className='px-0 py-4 pb-6 mx-6 flex flex-col gap-y-5'>
                <div className='border p-4 flex flex-row gap-x-2 rounded-md'>
                    <div className='w-20 flex items-center justify-center'>
                        {cv1File !== undefined ? (
                            <DocumentCheckIcon className='h-14 w-14 text-teal-200' />
                        ) : (
                            <DocumentArrowUpIcon className='h-14 w-14 text-gray-300' />
                        )}
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <Typography variant='h6' className='text-base'>
                            CV 1
                        </Typography>
                        <Typography variant='paragraph' className='underline text-teal-200'>
                            {cv1FileName}
                        </Typography>
                        <label htmlFor='cvfile1' className='flex gap-x-2 text-deep-purple-700 cursor-pointer'>
                            {cv1File !== undefined ? 'Thay đổi' : 'Tải lên CV của bạn'}
                            <ArrowUpTrayIcon className='w-5 h-5' />
                            <span className='text-gray-400'>
                                (Sử dụng tệp .doc, .docx hoặc .pdf, không chứa mật khẩu bảo vệ và dưới 3MB)
                            </span>
                        </label>
                        <input
                            accept='.png, .pdf'
                            // className='relative z-10 opacity-1 h-20 w-full cursor-pointer'
                            className='w-full rounded-md text-gray-900 cursor-pointer border pr-4 border-gray-800
                                            file:bg-gradient-to-r file:from-gray-800 file:to-gray-900 file:px-6 file:py-3  file:border-none file:mr-4
                                            file:text-white file:cursor-pointer
                                            hover:border hover:border-gray-900 hover:file:bg-gradient-to-r hover:file:from-gray-900 hover:file:to-gray-800 
                                            hidden
                                            '
                            type='file'
                            name='cvfile1'
                            id='cvfile1'
                            placeholder='cvfile1'
                            onChange={handleSelectedFile1}
                        />
                    </div>
                </div>
                <div className='border p-4 flex flex-row gap-x-2 rounded-md'>
                    <div className='w-20 flex items-center justify-center'>
                        <DocumentArrowUpIcon className='h-14 w-14 text-gray-200' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <Typography variant='h6' className='text-base'>
                            CV 2
                        </Typography>
                        <Typography variant='paragraph' className='underline'>
                            {cv2FileName}
                        </Typography>
                        <label htmlFor='cvfile2' className='flex gap-x-2 text-deep-purple-700 cursor-pointer'>
                            Tải lên CV của bạn
                            <ArrowUpTrayIcon className='w-5 h-5' />
                            <span className='text-gray-400'>
                                (Sử dụng tệp .doc, .docx hoặc .pdf, không chứa mật khẩu bảo vệ và dưới 3MB)
                            </span>
                        </label>
                        <input
                            accept='.png, .pdf'
                            // className='relative z-10 opacity-1 h-20 w-full cursor-pointer'
                            className='w-full rounded-md text-gray-900 cursor-pointer border pr-4 border-gray-800
                                            file:bg-gradient-to-r file:from-gray-800 file:to-gray-900 file:px-6 file:py-3  file:border-none file:mr-4
                                            file:text-white file:cursor-pointer
                                            hover:border hover:border-gray-900 hover:file:bg-gradient-to-r hover:file:from-gray-900 hover:file:to-gray-800 
                                            hidden
                                            '
                            type='file'
                            name='cvfile2'
                            id='cvfile2'
                            placeholder='cvfile2'
                            onChange={handleSelectedFile2}
                        />
                    </div>
                </div>
                <div className='border p-4 flex flex-row gap-x-2 rounded-md'>
                    <div className='w-20 flex items-center justify-center'>
                        <DocumentArrowUpIcon className='h-14 w-14 text-gray-200' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <Typography variant='h6' className='text-base'>
                            CV 3
                        </Typography>
                        <Typography variant='paragraph' className={`underline visibility`}>
                            {cv3FileName}
                        </Typography>
                        <label htmlFor='cvfile3' className='flex gap-x-2 text-deep-purple-700 cursor-pointer'>
                            Tải lên CV của bạn
                            <ArrowUpTrayIcon className='w-5 h-5' />
                            <span className='text-gray-400'>
                                (Sử dụng tệp .doc, .docx hoặc .pdf, không chứa mật khẩu bảo vệ và dưới 3MB)
                            </span>
                        </label>
                        <input
                            accept='.png, .pdf'
                            // className='relative z-10 opacity-1 h-20 w-full cursor-pointer'
                            className='w-full rounded-md text-gray-900 cursor-pointer border pr-4 border-gray-800
                                            file:bg-gradient-to-r file:from-gray-800 file:to-gray-900 file:px-6 file:py-3  file:border-none file:mr-4
                                            file:text-white file:cursor-pointer
                                            hover:border hover:border-gray-900 hover:file:bg-gradient-to-r hover:file:from-gray-900 hover:file:to-gray-800 
                                            hidden
                                            '
                            type='file'
                            name='cvfile3'
                            id='cvfile3'
                            placeholder='cvfile3'
                            onChange={handleSelectedFile3}
                        />
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default UserCVSection
