import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { Card, Typography, Textarea, Button, Input, Rating, Switch } from '@material-tailwind/react'
import { useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function CompanyReviewForm() {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const [overallRated, setOverallRated] = useState(0)
    const [benefitRated, setBenefitRated] = useState(0)
    const [trainingRated, setTrainingRated] = useState(0)
    const [careRated, setCareRated] = useState(0)
    const [cultureRated, setCultureRated] = useState(0)
    const [workspaceRated, setWorkspaceRated] = useState(0)
    const [isWantReferToFriend, setIsWantReferToFriend] = useState(false)
    const switchRef = useRef<null | any>(null)
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }
    const handleBack = () => {
        navigate(from, { replace: true })
    }
    const handleSwitchChange = (e: any) => {
        setIsWantReferToFriend(switchRef.current.checked)
    }
    return (
        <section className='px-auto bg-gray-100 h-screen flex flex-col justify-center items-center bg-companyReview'>
            <div className='fixed top-0 left-0 right-0 bottom-0 h-screen w-screen bg-gray-500/60'></div>
            <div className='flex flex-col justify-center h-full z-10'>
                <Card color='white' shadow={true} className='p-8 min-w-700 shadow-2xl z-10'>
                    <Typography variant='h4' color='blue-gray'>
                        Viết đánh giá của bạn
                    </Typography>
                    <Typography color='gray' className='mb-2 font-normal max-w-700 !line-clamp-2 text-gray-800 '>
                        Công ty TNHH AvePoint VN
                    </Typography>
                    <form className='pt-2 mb-2  max-w-screen-lg border-t-2'>
                        <div className='mb-1 flex flex-col gap-4'>
                            <>
                                <Typography variant='h6' color='blue-gray' className='-mb-3 text-lg'>
                                    Tiêu đề
                                </Typography>
                                <Input
                                    size='lg'
                                    // placeholder='name@mail.com'
                                    label='Viết tiêu đề đánh giá'
                                    className='  !border-gray-900 focus:!border-t-gray-900'
                                    // labelProps={{
                                    //     className: 'before:content-none after:content-none'
                                    // }}
                                    crossOrigin={undefined}
                                />
                            </>
                            <div className='flex items-start w-3/5 justify-between'>
                                <Typography variant='h6' color='blue-gray' className='-mb-3 mr-4 text-lg'>
                                    Đánh giá chung
                                </Typography>
                                <Rating
                                    value={Math.round(overallRated)}
                                    className='h-full flex items-center scale-110'
                                    onChange={(value) => setOverallRated(value)}
                                />
                            </div>
                            <>
                                {' '}
                                <Typography variant='h6' color='blue-gray' className='-mb-3 text-lg'>
                                    Nhận xét của bạn
                                </Typography>
                                <Textarea
                                    size='md'
                                    label='Viết nhận xét của bạn về công ty này'
                                    className='border-solid !border-gray-900'
                                />
                            </>
                            <div className='flex flex-col items-start gap-y-2'>
                                <Typography variant='h6' color='blue-gray' className='mr-4 text-lg'>
                                    Đánh giá chi tiết
                                </Typography>
                                <div className='flex items-start w-3/5 justify-between'>
                                    <Typography
                                        variant='h6'
                                        color='blue-gray'
                                        className='-mb-3 text-base font-normal mr-4'
                                    >
                                        Lương thưởng & Phúc lợi
                                    </Typography>
                                    <Rating
                                        value={Math.round(benefitRated)}
                                        className='h-full flex items-center scale-110'
                                        onChange={(value) => setBenefitRated(value)}
                                    />
                                </div>
                                <div className='flex items-start w-3/5 justify-between'>
                                    <Typography
                                        variant='h6'
                                        color='blue-gray'
                                        className='-mb-3 text-base font-normal mr-4'
                                    >
                                        Đào tạo & Học hỏi
                                    </Typography>
                                    <Rating
                                        value={Math.round(trainingRated)}
                                        className='h-full flex items-center scale-110'
                                        onChange={(value) => setTrainingRated(value)}
                                    />
                                </div>
                                <div className='flex items-start w-3/5 justify-between'>
                                    <Typography
                                        variant='h6'
                                        color='blue-gray'
                                        className='-mb-3 text-base font-normal mr-4'
                                    >
                                        Sự quan tâm đến nhân viên
                                    </Typography>
                                    <Rating
                                        value={Math.round(careRated)}
                                        className='h-full flex items-center scale-110'
                                        onChange={(value) => setCareRated(value)}
                                    />
                                </div>
                                <div className='flex items-start w-3/5 justify-between'>
                                    <Typography
                                        variant='h6'
                                        color='blue-gray'
                                        className='-mb-3 text-base font-normal mr-4'
                                    >
                                        Văn hóa công ty
                                    </Typography>
                                    <Rating
                                        value={Math.round(cultureRated)}
                                        className='h-full flex items-center scale-110'
                                        onChange={(value) => setCultureRated(value)}
                                    />
                                </div>
                                <div className='flex items-start w-3/5 justify-between'>
                                    <Typography
                                        variant='h6'
                                        color='blue-gray'
                                        className='-mb-3 text-base font-normal mr-4'
                                    >
                                        Môi trường làm việc
                                    </Typography>
                                    <Rating
                                        value={Math.round(workspaceRated)}
                                        className='h-full flex items-center scale-110'
                                        onChange={(value) => setWorkspaceRated(value)}
                                    />
                                </div>
                            </div>
                            <div className=''>
                                <Typography variant='h6' color='blue-gray' className='mb-2 mr-4 text-lg'>
                                    Bạn có muốn giới thiệu công ty này đến cho bạn bè không
                                </Typography>
                                <div className='w-fit h-6 flex items-center' onClick={handleSwitchChange}>
                                    <Typography
                                        variant='paragraph'
                                        color='blue-gray'
                                        className='-mb-0 text-base font-normal mr-4'
                                    >
                                        Không
                                    </Typography>
                                    <Switch
                                        ripple={false}
                                        crossOrigin={undefined}
                                        className='text-sm'
                                        inputRef={switchRef}
                                    />
                                    <Typography
                                        variant='paragraph'
                                        color='blue-gray'
                                        className='-mb-0 text-base font-normal ml-3'
                                    >
                                        Có
                                    </Typography>
                                </div>
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
                                Gửi Đánh giá
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </section>
    )
}

export default CompanyReviewForm
