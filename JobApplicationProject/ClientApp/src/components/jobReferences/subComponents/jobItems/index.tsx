import { Typography, Tooltip, Avatar, ListItem, ListItemPrefix, ListItemSuffix } from '@material-tailwind/react'
import { Chip } from '@material-tailwind/react'
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/20/solid'
import { myavatar } from 'assets'

export function JobItems() {
    return (
        <ListItem className='flex flex-col w-full p-0 bg-white shadow-lg'>
            <div className='flex flex-row items-start w-full h-fit xl:p-5 3xl:p-6'>
                <ListItemPrefix className='mr-0 w-14'>
                    <Avatar variant='rounded' className='w-full h-14' alt='candice' src={myavatar} />
                </ListItemPrefix>
                <div className='flex flex-col justify-between pl-4 max-w-250 3xl:max-w-312 h-max grow'>
                    <Typography variant='h6' color='blue-gray' className='max-w-full mb-2 truncate'>
                        Backend Devzxnc,mzxnczxnc,mzxzxc,nzxc,nmzxcnm,zxcnm,n,zx,nc,zxcn
                    </Typography>
                    <Typography variant='small' color='gray' className='w-full text-sm font-normal truncate'>
                        Cong ty Avepointzxcnzxnc,znczxnc,mzxnc,mnczxnm,zxc,,nmzxczxc,nm
                    </Typography>
                </div>
                <ListItemSuffix className='flex flex-col items-start justify-center ml-0 w-fit'>
                    <Chip
                        variant='ghost'
                        value='fulltime'
                        className='px-2 text-green-800 bg-gray-100 rounded-2xl w-max !capitalize '
                    />
                </ListItemSuffix>
            </div>
            <div className='flex flex-row w-full p-5 pt-0'>
                <Chip
                    variant='ghost'
                    value='15 - 20 chẹo'
                    icon={<CurrencyDollarIcon className='text-sm' />}
                    className='px-4 mr-2 text-gray-800 bg-gray-100 rounded-2xl w-max !capitalize '
                />
                <Tooltip
                    content='Hà Nội'
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 }
                    }}
                >
                    <Chip
                        variant='ghost'
                        icon={<MapPinIcon className='text-sm' />}
                        value='Hà Nhội'
                        className='!capitalize mr-2 px-4 text-gray-800 bg-gray-100 rounded-2xl w-max'
                    />
                </Tooltip>
            </div>
        </ListItem>

        // <Card className='w-full transition-all cursor-pointer'>
        //     <CardBody className='flex flex-row truncate xl:p-4 3xl:p-6'>
        //         <Avatar src={spider_man} alt='avatar' variant='rounded' className='flex flex-row m-2' />
        //         <div className='flex flex-col justify-center w-full mx-4'>
        //             <div className='flex flex-row items-center justify-between w-full mb-2'>
        //                 <Typography
        //                     variant='h6'
        //                     color='blue-gray'
        //                     className='flex items-center w-3/4 truncate 3xl:max-w-250 xl:max-w-150'
        //                 >
        //                     Back End Developerzxczxczxczxc
        //                 </Typography>
        //                 <Chip
        //                     variant='ghost'
        //                     value='fulltime'
        //                     className='px-2 ml-4 text-green-800 bg-gray-100 rounded-2xl w-max !capitalize '
        //                 />
        //             </div>
        //             <Typography className='w-full text-sm truncate 3xl:max-w-350 xl:max-w-250'>
        //                 Công ty TNHH AvePoint Việt Namzxczxczxczxczxczxczzxczxcxzcxz
        //             </Typography>
        //         </div>
        //     </CardBody>
        //     <CardFooter className='flex flex-row items-center pt-0 pb-4 pl-6'>
        //         <Chip
        //             variant='ghost'
        //             value='15 - 20 chẹo'
        //             icon={<CurrencyDollarIcon className='text-sm' />}
        //             className='px-4 mr-2 text-gray-800 bg-gray-100 rounded-2xl w-max !capitalize '
        //         />
        //         <Tooltip
        //             content='Hà Nội'
        //             animate={{
        //                 mount: { scale: 1, y: 0 },
        //                 unmount: { scale: 0, y: 25 }
        //             }}
        //         >
        //             <Chip
        //                 variant='ghost'
        //                 icon={<MapPinIcon className='text-sm' />}
        //                 value='Hà Nhội'
        //                 className='!capitalize mr-2 px-4 text-gray-800 bg-gray-100 rounded-2xl w-max'
        //             />
        //         </Tooltip>
        //     </CardFooter>
        // </Card>
    )
}
