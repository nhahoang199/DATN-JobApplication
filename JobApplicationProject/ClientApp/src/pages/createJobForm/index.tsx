import { Button, Card, CardHeader, CardBody, CardFooter } from '@material-tailwind/react'
import React from 'react'
import { CreatedJobStepper } from './components'
import { Outlet } from 'react-router-dom'

function CreateJobForm() {
    const [activeStep, setActiveStep] = React.useState(0)
    const [isLastStep, setIsLastStep] = React.useState(false)
    const [isFirstStep, setIsFirstStep] = React.useState(false)

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1)
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1)
    const handleActiveStep = (value: number) => {
        if (value > activeStep) setActiveStep(activeStep)
        else setActiveStep(value)
    }

    return (
        <Card className='h-full w-full rounded-md !bg-transparent shadow-none'>
            <CardHeader floated={false} shadow={false} className='rounded-none pt-0 px-0 m-0 h-20 !bg-transparent'>
                <CreatedJobStepper
                    setIsLastStep={setIsLastStep}
                    setIsFirstStep={setIsFirstStep}
                    setActiveStep={handleActiveStep}
                    activeStep={activeStep}
                />
            </CardHeader>
            <CardBody className='p-0 h-[calc(100vh-16.1rem)]  shadow-none' children={<Outlet />}></CardBody>
            <CardFooter className='flex items-center justify-between border-t border-blue-gray-50 p-0 pt-4'>
                <Button onClick={handlePrev} disabled={isFirstStep} className='rounded-sm shadow-lg'>
                    Prev
                </Button>
                <Button onClick={handleNext} disabled={isLastStep} className='rounded-sm shadow-lg'>
                    Next
                </Button>
            </CardFooter>
        </Card>
    )
}

export default CreateJobForm
