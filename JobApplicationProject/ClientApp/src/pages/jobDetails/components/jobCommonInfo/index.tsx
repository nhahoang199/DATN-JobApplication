import { Typography } from '@material-tailwind/react'
import { QueueListIcon, UsersIcon, BriefcaseIcon, UserIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons'
import { IJobDetail } from 'models'

function JobCommonInfo(props: { item: IJobDetail }) {
    const { item } = props
    const data = [
        {
            icon: <QueueListIcon className='w-5 h-5 text-gray-200' />,
            title: 'Cấp bậc',
            value: item.position
        },
        {
            icon: <FontAwesomeIcon icon={faBusinessTime} className='w-5 h-5 text-gray-200' />,
            title: 'Kinh nghiệm',
            value: `${item.expirence} năm`
        },
        {
            icon: <UsersIcon className='w-5 h-5 text-gray-200' />,
            title: 'Số lượng tuyển',
            value: `${item.quantity} người`
        },
        {
            icon: <BriefcaseIcon className='w-5 h-5 text-gray-200' />,
            title: 'Hình thức làm việc',
            value: item.type === 0 ? 'Toàn thời gian' : 'Bán thời gian'
        },
        {
            icon: <UserIcon className='w-5 h-5 text-gray-200' />,
            title: 'Giới tính',
            value: item.gender
        }
    ]
    return (
        <div className='flex flex-col p-6 bg-white rounded-md shadow-lg 3xl:p-8 gap-y-5'>
            <h2 className='text-lg font-bold border-left'>Thông tin chung</h2>
            <div className='flex flex-col gap-y-4'>
                {data.map((item, index) => (
                    <div className='flex items-center gap-4' key={index}>
                        <div className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-gray-800'>
                            {item.icon}
                        </div>
                        <div>
                            <Typography variant='small' className='text-gray-500'>
                                {item.title}
                            </Typography>
                            <Typography variant='h6' className=''>
                                {item.value}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default JobCommonInfo
