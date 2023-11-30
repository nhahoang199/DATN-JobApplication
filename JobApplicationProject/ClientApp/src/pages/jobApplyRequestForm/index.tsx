import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { Card, Typography, Button, Textarea, Switch, Select, Option } from '@material-tailwind/react'
import './index.scss'
import React, { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function JobApplyForm() {
    const [isUserCvUsed, setIsUserCvUsed] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const switchRef = useRef<null | any>(null)
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }
    const handleBack = () => {
        navigate(from, { replace: true })
    }
    const handleSwitchChange = (e: any) => {
        setIsUserCvUsed(switchRef.current.checked)
    }
    return (
        <section className='px-auto bg-gray-100 h-screen flex flex-col justify-center items-center bg-cvApply'>
            <div className='fixed top-0 left-0 right-0 bottom-0 h-screen w-screen bg-gray-500/60'></div>
            <div className='flex flex-col justify-center h-full z-10'>
                <Card color='white' shadow={false} className='p-8 min-w-700 shadow-2xl z-10'>
                    <Typography variant='h4' color='blue-gray'>
                        Ứng tuyển việc làm
                    </Typography>
                    <Typography color='gray' className='mt-1 font-normal max-w-700 !line-clamp-2 text-gray-800'>
                        Back-end Developer.
                    </Typography>
                    <form className='mt-8 mb-2  max-w-screen-lg '>
                        <div className='mb-1 flex flex-col gap-6'>
                            <Typography variant='h6' color='blue-gray' className='-mb-3'>
                                Thư xin việc
                            </Typography>
                            <Textarea
                                size='md'
                                label='Giới thiệu nhanh về bạn ở đây'
                                className='border-solid !border-gray-900'
                            />
                            <Typography variant='h6' color='blue-gray' className='-mb-3'>
                                CV ứng tuyển
                            </Typography>
                            <div className='w-fit' onClick={handleSwitchChange}>
                                <Switch
                                    label='Dùng CV của bạn'
                                    ripple={false}
                                    crossOrigin={undefined}
                                    className='text-sm'
                                    inputRef={switchRef}
                                />
                            </div>
                            <div className={`w-full ${!isUserCvUsed ? 'block fadeIn' : 'hidden fadeOut'}`}>
                                <Typography variant='paragraph' color='blue-gray' className='mb-3 text-sm'>
                                    Tải lên CV mới (png, pdf,..)
                                </Typography>
                                <input
                                    accept='.png, .pdf'
                                    // className='relative z-10 opacity-1 h-20 w-full cursor-pointer'
                                    className='w-full rounded-md text-gray-900 cursor-pointer border pr-4 border-gray-800
                                            file:bg-gradient-to-r file:from-gray-800 file:to-gray-900 file:px-6 file:py-3  file:border-none file:mr-4
                                            file:text-white file:cursor-pointer
                                            hover:border hover:border-gray-900 hover:file:bg-gradient-to-r hover:file:from-gray-900 hover:file:to-gray-800 
                                            '
                                    type='file'
                                    name='bgfile'
                                    id='bgfile'
                                    placeholder='cvfile'
                                />
                            </div>
                            <div className={`w-full ${isUserCvUsed ? 'block fadeIn' : 'hidden fadeOut'}`}>
                                <Typography variant='paragraph' color='blue-gray' className='mb-3 text-sm'>
                                    Chọn CV sẵn có của bạn
                                </Typography>
                                <Select
                                    label='Chọn CV của bạn'
                                    animate={{
                                        mount: { y: 0 },
                                        unmount: { y: 25 }
                                    }}
                                    className='border-gray-900 text-gray-900 before:border-gray-900'
                                    labelProps={{
                                        className: 'text-gray-900 hidden before:border-gray-900 after:border-gray-900'
                                    }}
                                    // arrow={}
                                    // color='gray'
                                >
                                    <Option className='text-gray-900'>CV 1</Option>
                                    <Option className='text-gray-900'>CV 2</Option>
                                    <Option className='text-gray-900'>CV 3</Option>
                                </Select>
                            </div>
                        </div>
                        <div className='w-full flex items-center mt-6 justify-end'>
                            <Button
                                className='flex items-center w-40 gap-3 h-fit  text-gray-900 mr-4'
                                variant='outlined'
                                onClick={handleBack}
                            >
                                <ChevronLeftIcon className='h-5 w-5' />
                                Quay lại
                            </Button>
                            <Button className='py-3.5 h-fit' onClick={handleSubmit}>
                                Gửi CV của bạn ngay
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </section>
    )
}

export default JobApplyForm
