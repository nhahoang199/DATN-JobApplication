import { Card, CardHeader, CardBody, Typography, Avatar } from '@material-tailwind/react'
import { backgroundSearchCompany, myavatar } from 'assets'

function CompanyCardItem() {
    return (
        // <div className='flex flex-col items-center justify-center text-center rounded-md shadow-lg w-fit 3xl:w-full dark:text-gray-800'>
        <Card className='w-full bg-transparent p-0 rounded-none'>
            <CardHeader
                shadow={false}
                floated={false}
                className='flex items-center justify-center h-40 3xl:h-52 m-0 rounded-none'
            >
                <img src={backgroundSearchCompany} alt='career' className='object-cover w-full h-full' />
            </CardHeader>
            <CardBody className=''>
                <div className='flex flex-row items-center justify-between mb-2 xl'>
                    <div className='relative'>
                        <div className='-mt-16 w-20'>
                            <Avatar
                                src={myavatar}
                                alt='Profile picture'
                                variant='circular'
                                className='h-full w-full border-solid border-4 border-gray-100'
                            />
                        </div>
                    </div>
                    <Typography color='blue-gray' variant='h6' className='w-10/12 -mt-6 ml-2 truncate relative'>
                        AvePoint VietNam
                    </Typography>
                </div>
                <div className='flex flex-col  mb-2 justify-start items-start w-full overflow-x-wrap'>
                    <Typography variant='paragraph' className='w-12/12 font-medium text-gray-600 !line-clamp-3 h-20'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        beenLorem Ipsum is simply Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has beendummy text of the printing and typesetting industry. Lorem Ipsum
                        has been
                    </Typography>
                </div>
            </CardBody>
        </Card>
        // </div>
    )
}

export default CompanyCardItem
