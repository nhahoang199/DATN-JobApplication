import { Stepper, Step, Typography } from '@material-tailwind/react'
import React from 'react'
interface CreatedJobStepperProps {
    setIsLastStep: (value: boolean) => void
    setIsFirstStep: (value: boolean) => void
    setActiveStep: (activeStep: number) => void
    activeStep: number
}
function CreatedJobStepper({ activeStep, setIsLastStep, setIsFirstStep, setActiveStep }: CreatedJobStepperProps) {
    return (
        <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
        >
            <Step onClick={() => setActiveStep(0)} className='w-6 h-6 cursor-default'>
                1
                <div className='absolute left-0  -bottom-[2.75rem] w-max text-left'>
                    <Typography variant='h6' color={activeStep === 0 ? 'blue-gray' : 'gray'} className='text-sm'>
                        Bước 1
                    </Typography>
                    <Typography color={activeStep === 0 ? 'blue-gray' : 'gray'} className='font-normal text-sm'>
                        Thông tin cơ bản
                    </Typography>
                </div>
            </Step>
            <Step onClick={() => setActiveStep(1)} className='w-6 h-6 cursor-default'>
                2{' '}
                <div className='absolute -bottom-[2.75rem] w-max text-center'>
                    <Typography variant='h6' color={activeStep === 1 ? 'blue-gray' : 'gray'} className='text-sm'>
                        Bước 2
                    </Typography>
                    <Typography color={activeStep === 1 ? 'blue-gray' : 'gray'} className='font-normal text-sm'>
                        Chi tiết về công việc
                    </Typography>
                </div>
            </Step>
            <Step onClick={() => setActiveStep(2)} className='w-6 h-6 cursor-default'>
                3
                <div className='absolute right-0 -bottom-[2.75rem] w-max text-right'>
                    <Typography variant='h6' color={activeStep === 2 ? 'blue-gray' : 'gray'} className='text-sm'>
                        Bước 3
                    </Typography>
                    <Typography color={activeStep === 2 ? 'blue-gray' : 'gray'} className='font-normal text-sm'>
                        Xem lại
                    </Typography>
                </div>
            </Step>
        </Stepper>
    )
}

export default CreatedJobStepper
