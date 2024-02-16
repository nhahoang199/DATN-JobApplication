import { Card, CardHeader, CardBody, Typography, Avatar } from '@material-tailwind/react'
import { backgroundSearchCompany, myavatar } from 'assets'

function CompanyCardItem(props: { item: any }) {
    const { item } = props
    return (
        // <div className='flex flex-col items-center justify-center text-center rounded-md shadow-lg w-fit 3xl:w-full dark:text-gray-800'>
        <Card className='w-full p-0 bg-transparent rounded-none'>
            <CardHeader
                shadow={false}
                floated={false}
                className='flex items-center justify-center h-40 m-0 rounded-none 3xl:h-52'
            >
                <img src={backgroundSearchCompany} alt='career' className='object-cover w-full h-full' />
            </CardHeader>
            <CardBody className=''>
                <div className='flex flex-row items-center justify-between mb-2 xl'>
                    <div className='relative'>
                        <div className='w-20 -mt-16'>
                            <Avatar
                                src={item.src}
                                alt='Profile picture'
                                variant='circular'
                                className='w-full h-full border-4 border-gray-100 border-solid'
                            />
                        </div>
                    </div>
                    <Typography color='blue-gray' variant='h6' className='relative w-10/12 ml-2 -mt-6 truncate'>
                        {item.name}
                    </Typography>
                </div>
                <div className='flex flex-col items-start justify-start w-full mb-2 overflow-x-wrap'>
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
