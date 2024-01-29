import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { Card, CardBody, Typography } from '@material-tailwind/react'
import { setOpenEditCompanySkill } from 'apps/companyProfile.slice'
import { useAppDispatch } from 'apps/store'
import React from 'react'

function CompanySkills() {
    const dispatch = useAppDispatch()
    return (
        <Card className='h-full w-full rounded-md'>
            <CardBody className='py-6 mx-6 px-0 '>
                <div className='flex flex-row'>
                    <div className='flex flex-col grow ml-4'>
                        <div className='flex flex-row justify-between'>
                            <Typography variant='h5' color='blue-gray' className='py-2'>
                                Chuyên môn
                            </Typography>{' '}
                            <PencilSquareIcon
                                className='h-6 w-6 cursor-pointer text-deep-purple-500'
                                onClick={() => dispatch(setOpenEditCompanySkill(true))}
                            />
                        </div>
                        <div className='mt-2 w-full flex flex-col gap-y-2 max-h-[calc(60vh-17.1rem)] overflow-y-scroll scrollbar'>
                            <Typography variant='paragraph' className='py-2'>
                                Lorem Ipsum color
                            </Typography>{' '}
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default CompanySkills
