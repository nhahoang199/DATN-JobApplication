import { Typography } from '@material-tailwind/react'
import { certificateIcon } from 'assets'

function UserViewCertificates() {
    const data = [
        {
            name: ''
        },
        {
            name: ''
        }
    ]
    return (
        <div className='py-4 w-full flex flex-col gap-y-0'>
            <Typography variant='h6' color='blue-gray' className='text-lg '>
                Chứng chỉ
            </Typography>
            {data.length === 0 ? (
                <Typography variant='paragraph' color='gray' className='text-gray-900 h-5'>
                    -
                </Typography>
            ) : (
                <div className='flex flex-col gap-y-2 divide-y-2 divide-dashed'>
                    {data.map((item, index) => {
                        return (
                            <div className='flex flex-row gap-x-4 w-full items-start'>
                                <div className='bg-blue-gray-50 flex items-center justify-center w-10 h-10 rounded-sm mt-3'>
                                    <img
                                        src={certificateIcon}
                                        alt='certificateIcon'
                                        className='h-5 w-5 text-blue-gray-800'
                                    />
                                </div>
                                <div className='flex flex-col gap-y-1 py-1'>
                                    <Typography
                                        variant='h6'
                                        color='gray'
                                        className='text-gray-900 max-h-[120px] overflow-y-scroll scrollbar'
                                    >
                                        C#
                                    </Typography>
                                    <div className='flex flex-row gap-x-4'>
                                        <Typography
                                            variant='paragraph'
                                            color='gray'
                                            className='text-gray-900 max-h-[120px] overflow-y-scroll scrollbar'
                                        >
                                            Udemy
                                        </Typography>
                                        {'|'}
                                        <Typography
                                            variant='paragraph'
                                            color='gray'
                                            className='text-gray-900 max-h-[120px] overflow-y-scroll scrollbar'
                                        >
                                            8/2022
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default UserViewCertificates
