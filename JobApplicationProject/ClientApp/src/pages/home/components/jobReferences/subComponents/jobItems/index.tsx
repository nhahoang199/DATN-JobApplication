import { Typography, Tooltip, Avatar, ListItem, ListItemPrefix, ListItemSuffix } from '@material-tailwind/react'
import { Chip } from '@material-tailwind/react'
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/20/solid'
import { myavatar } from 'assets'
import { IJobApplicationModel } from 'models'

export function JobItems(props: { item: IJobApplicationModel }) {
    const { item } = props
    return (
        <ListItem className='flex flex-col w-full p-0 bg-white shadow-lg'>
            <div className='flex flex-row items-start w-full h-fit xl:p-5 3xl:p-6'>
                <ListItemPrefix className='mr-0 w-14'>
                    <Avatar variant='rounded' className='w-full h-14' alt='candice' src={myavatar} />
                </ListItemPrefix>
                <div className='flex flex-col justify-between pl-4 max-w-250 3xl:max-w-312 h-max grow'>
                    <Typography variant='h6' color='blue-gray' className='max-w-full mb-2 truncate'>
                        {item.title}
                    </Typography>
                    <Typography variant='small' color='gray' className='w-full text-sm font-normal truncate'>
                        {item.companyName}
                    </Typography>
                </div>
                <ListItemSuffix className='flex flex-col items-start justify-center ml-0 w-fit'>
                    <Chip
                        variant='ghost'
                        value={item.type === 0 ? 'fulltime' : 'part-time'}
                        className='px-2 text-green-800 bg-gray-100 rounded-2xl w-max !capitalize '
                    />
                </ListItemSuffix>
            </div>
            <div className='flex flex-row w-full p-5 pt-0'>
                <Chip
                    variant='ghost'
                    value={`${item.salary} - ${item.salary} chẹo`}
                    icon={<CurrencyDollarIcon className='text-sm' />}
                    className='px-4 mr-2 text-gray-800 bg-gray-100 rounded-2xl w-max !capitalize '
                />
                <Tooltip
                    content={`${item.districtName} - ${item.provinceName}`}
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 }
                    }}
                >
                    <Chip
                        variant='ghost'
                        icon={<MapPinIcon className='text-sm' />}
                        value={item.provinceName}
                        className='!capitalize mr-2 px-4 text-gray-800 bg-gray-100 rounded-2xl w-max'
                    />
                </Tooltip>
            </div>
        </ListItem>
    )
}
