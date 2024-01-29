import {
    Card,
    CardHeader,
    CardBody,
    Avatar,
    Typography,
    CardFooter,
    Chip,
    Button,
    IconButton
} from '@material-tailwind/react'
import { avepoint } from 'assets'
import { CurrencyDollarIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'
import React from 'react'

function SavedJobItem() {
    return (
        <Card className='w-full bg-white p-0 rounded-md'>
            <CardHeader
                shadow={false}
                floated={false}
                className='flex items-center justify-center mb-0 rounded-md mt-6 mx-6'
            >
                <Typography color='blue-gray' variant='h5' className='cursor-pointer'>
                    Lorem Ipsum is simply dummy text of the printing
                </Typography>
            </CardHeader>
            <CardBody className='py-2'>
                <div className='flex flex-row items-start justify-between mb-4 xl'>
                    <div className='relative'>
                        <div className='w-12'>
                            <Avatar src={avepoint} alt='Profile picture' variant='circular' className='h-full w-full' />
                        </div>
                    </div>
                    <Typography
                        color='blue-gray'
                        variant='h6'
                        className='w-10/12 mt-2 ml-2 truncate relative cursor-pointer'
                    >
                        AvePoint VietNam
                    </Typography>
                </div>
                <div className='flex flex-col w-full gap-y-2'>
                    <div className='flex flex-row items-center gap-x-2'>
                        <CurrencyDollarIcon className='w-5 h-5 text-green-600' />
                        <Typography
                            variant='paragraph'
                            className='w-12/12 font-bold text-green-600 !line-clamp-3 flex flex-row'
                        >
                            10 - 14 triệu
                        </Typography>
                    </div>
                    <div className='flex flex-row items-center gap-x-2'>
                        <MapPinIcon className='w-5 h-5' />
                        <Typography
                            variant='paragraph'
                            className='w-12/12 font-medium text-gray-800 !line-clamp-3 flex flex-row text-sm'
                        >
                            Thanh Xuân - Hà Nội
                        </Typography>
                    </div>
                </div>
            </CardBody>
            <CardFooter className='pt-2 flex flex-row justify-between gap-x-3 items-center'>
                <Button
                    className='rounded-sm flex flex-row items-center justify-center gap-2 px-3 grow'
                    variant='outlined'
                    size='sm'
                >
                    <PaperAirplaneIcon className='h-5 w-5' />
                    Ứng tuyển ngay
                </Button>

                <IconButton
                    variant='text'
                    // size='sm'
                    color={'red'}
                    className='p-2'
                    // onClick={handleIsFavorite}
                >
                    <HeartIcon className='h-8 w-8 cursor-pointer text-red-600' />
                </IconButton>
            </CardFooter>
        </Card>
    )
}

export default SavedJobItem
