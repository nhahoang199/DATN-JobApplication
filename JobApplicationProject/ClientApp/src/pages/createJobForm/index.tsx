import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Drawer,
    IconButton,
    Typography,
    ThemeProvider
} from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { CreateJobFormStep1, CreateJobFormStep2, CreateJobFormStep3, CreatedJobStepper } from './components'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { IJobApplicationModel } from 'models'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'apps/store'
import { createJobAsync, setCreateJobData } from 'apps/jobApplication.slice'
import { hideProgressLoading, showProgressLoading } from 'apps/loading.slice'
import mtTheme from './../../const/MTtheme'
const initialState = {
    id: null,
    companyName: null,
    companyId: null,
    districtId: null,
    districtName: null,
    provinceId: null,
    provinceName: null,
    createdOn: null,
    description: null,
    expiredOn: null,
    expirence: null,
    gender: null,
    position: null,
    quantity: null,
    salary: null,
    title: null,
    type: null,
    updatedOn: null,
    jobBenefit: null,
    jobRequired: null
}
function CreateJobForm() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [activeStep, setActiveStep] = React.useState(0)
    const [isLastStep, setIsLastStep] = React.useState(false)
    const [isFirstStep, setIsFirstStep] = React.useState(false)
    const [formData, setFormData] = useState<IJobApplicationModel>(initialState)
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false)
    const createJobState = useSelector((state: RootState) => state.createJob.data)
    const dispatch = useAppDispatch()
    const step = searchParams.get('step')

    const handleNext = () => {
        if (!isLastStep) {
            setActiveStep((cur) => cur + 1)
            dispatch(setCreateJobData(formData))
        }
    }
    const handlePrev = () => {
        if (!isFirstStep) {
            setActiveStep((cur) => cur - 1)
            setFormData(formData)
        }
    }
    const hanldeSubmit = async () => {
        const updatedFormData = { ...createJobState }
        updatedFormData.companyId = '2ead7047-1fbc-4b5e-be1f-161bacb0adf4'
        updatedFormData.createdBy = 'A4FC8546-14DC-4972-D13A-08DBF3DD914C'
        dispatch(showProgressLoading('Đang tạo công việc...'))
        try {
            await dispatch(createJobAsync(updatedFormData))
        } finally {
            dispatch(hideProgressLoading())
        }
    }
    const handleActiveStep = (value: number) => {
        if (value > activeStep) setActiveStep(activeStep)
        else setActiveStep(value)
    }
    // const openDrawer = () => setOpen(true)
    const closeDrawer = () => setOpen(false)

    const renderFormBody = () => {
        if (step === '1') return <CreateJobFormStep1 formData={formData} setFormData={setFormData} />
        else if (step === '2') return <CreateJobFormStep2 formData={formData} setFormData={setFormData} />
        else if (step === '3') return <CreateJobFormStep3 formData={formData} />
    }
    useEffect(() => {
        // setSearchParams({ step: activeStep.toString() })
        navigate(`/manager/createjob/?step=${activeStep + 1}`, { replace: true })
    }, [activeStep, navigate, setSearchParams])
    useEffect(() => {
        console.log(formData)
    }, [formData])
    // useEffect(() => {
    //     setFormData(createJobState)
    // }, [createJobState])
    return (
        <>
            {' '}
            <Card className='h-full w-full rounded-md !bg-transparent shadow-none'>
                <CardHeader floated={false} shadow={false} className='rounded-none pt-0 px-0 m-0 h-20 !bg-transparent'>
                    <CreatedJobStepper
                        setIsLastStep={setIsLastStep}
                        setIsFirstStep={setIsFirstStep}
                        setActiveStep={handleActiveStep}
                        activeStep={activeStep}
                    />
                </CardHeader>
                <CardBody
                    className='p-0 h-[calc(100vh-16.1rem)] overflow-y-scroll scrollbar scroll-smooth shadow-none'
                    children={renderFormBody()}
                ></CardBody>
                <CardFooter className='flex items-center justify-end border-t border-blue-gray-50 gap-x-5'>
                    <Button
                        disabled={!isLastStep}
                        onClick={hanldeSubmit}
                        className={`rounded-sm shadow-lg ${!isLastStep ? 'hidden' : ''}`}
                    >
                        Lưu
                    </Button>
                    <Button
                        variant='outlined'
                        // ripple={false}
                        // color='amber'
                        className={`focus:!border-gold-900 focus:border-none rounded-sm !bg-gold-900 shadow-lg px-4 !bg-clip-text text-transparent !border-gold-900  active:!border-gold-900`}
                    >
                        Lưu bản nháp
                    </Button>

                    <Button
                        onClick={handlePrev}
                        disabled={isFirstStep}
                        variant='outlined'
                        className={`rounded-sm shadow-lg  ${isFirstStep ? 'hidden' : ''}`}
                    >
                        Trước
                    </Button>
                    <Button
                        onClick={handleNext}
                        variant='outlined'
                        disabled={isLastStep}
                        className={`rounded-sm shadow-lg `}
                    >
                        Sau
                    </Button>
                </CardFooter>
            </Card>
            <ThemeProvider value={mtTheme}>
                <Drawer
                    open={open}
                    className='p-4'
                    onClose={closeDrawer}
                    placement='right'
                    overlayProps={<div className='fixed top-0 right-0 left-0 bottom-0 bg-black-50/50'></div>}
                >
                    <div className='mb-6 flex items-center justify-between'>
                        <Typography variant='h5' color='blue-gray'>
                            Material Tailwind
                        </Typography>
                        <IconButton variant='text' color='blue-gray' onClick={closeDrawer}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={2}
                                stroke='currentColor'
                                className='h-5 w-5'
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </IconButton>
                    </div>
                    <Typography color='gray' className='mb-8 pr-4 font-normal'>
                        Material Tailwind features multiple React and HTML components, all written with Tailwind CSS
                        classes and Material Design guidelines.
                    </Typography>
                    <div className='flex gap-2'>
                        <Button size='sm' variant='outlined' onClick={() => setOpen(false)} className='rounded-sm'>
                            Cancel
                        </Button>
                        <Button size='sm' className='rounded-sm'>
                            Get Started
                        </Button>
                    </div>
                </Drawer>
            </ThemeProvider>
        </>
    )
}

export default CreateJobForm
