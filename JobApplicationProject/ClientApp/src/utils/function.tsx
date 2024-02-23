import { Chip } from '@material-tailwind/react'
import { boyavatar, boyavatar2, girlavatar, girlavatar2 } from 'assets'
import { toast } from 'react-toastify'

export const toastError = (message: string) => {
    return toast.error(message, {
        autoClose: 3000,
        theme: 'light'
    })
}

export const toastSuccess = (message: string) => {
    return toast.success(message, {
        autoClose: 3000,
        theme: 'light'
    })
}

export const toastWarning = (message: string) => {
    return toast.warning(message, {
        autoClose: 3000,
        theme: 'light'
    })
}
export const formatDisplayDate = (inputDate: string) => {
    // Chuyển đổi chuỗi ngày giờ thành đối tượng Date
    const dateObj = new Date(inputDate)

    // Lấy thông tin ngày, tháng, năm
    const day = dateObj.getDate()
    const month = dateObj.getMonth() + 1 // Tháng trong JavaScript đếm từ 0
    const year = dateObj.getFullYear()

    // Lấy thông tin giờ, phút, giây
    const hours = dateObj.getHours()
    const minutes = dateObj.getMinutes()
    const seconds = dateObj.getSeconds()

    // Tạo chuỗi mới
    const newDateStr = `${day}/${month}/${year} `

    return newDateStr
}
export const getUserAvatar = (avatarSrc: string | null, gender: number) => {
    if (avatarSrc !== null && avatarSrc !== '') {
        return avatarSrc
    } else {
        if (gender === 2) return girlavatar2
        else return boyavatar2
    }
}
export const getUserAvatar2 = (avatarSrc: string | null, gender: number) => {
    if (avatarSrc !== null && avatarSrc !== '') {
        return avatarSrc
    } else {
        if (gender === 2) return girlavatar
        else return boyavatar
    }
}
export const getUserRole = (userRole: string) => {
    switch (userRole) {
        case 'HROFFICER':
            return 'Người dùng Nhân sự'
        case 'HRADMIN':
            return 'Quản trị Nhân sự'
        case 'BASICUSER':
            return 'Người dùng cơ bản'
        default:
            return 'Khách'
    }
}

export const renderJobApplicationStatus = (status: number) => {
    switch (status) {
        case 0:
            return (
                <Chip
                    variant='ghost'
                    size='sm'
                    value={'Đã gửi'}
                    color={'green'}
                    className='font-medium text-gray-900 capitalize'
                />
            )
        case 1:
            return (
                <Chip
                    variant='ghost'
                    size='sm'
                    value={'Chờ phản hồi'}
                    color={'light-blue'}
                    className='font-medium text-gray-900 capitalize'
                />
            )
        case 2:
            return (
                <Chip
                    variant='ghost'
                    size='sm'
                    value={'Đã đồng ý'}
                    color={'lime'}
                    className='font-medium text-gray-900 capitalize'
                />
            )
        case 3:
            return (
                <Chip
                    variant='ghost'
                    size='sm'
                    value={'Đã đồng ý - Chờ xác nhận'}
                    color={'light-blue'}
                    className='font-medium text-gray-900 capitalize'
                />
            )
        case 4:
            return (
                <Chip
                    variant='ghost'
                    size='sm'
                    value={'Đóng - đồng ý làm'}
                    color={'lime'}
                    className='font-medium text-gray-900 capitalize'
                />
            )
        case 5:
            return (
                <Chip
                    variant='ghost'
                    size='sm'
                    value={'Đóng - từ chối làm'}
                    color={'red'}
                    className='font-medium text-gray-900 capitalize'
                />
            )
        case 6:
            return (
                <Chip
                    variant='ghost'
                    size='sm'
                    value={'Đã từ chối'}
                    color={'red'}
                    className='font-medium text-gray-900 capitalize'
                />
            )
        case 7:
            return (
                <Chip
                    variant='ghost'
                    size='sm'
                    value={'Đóng- Đã từ chối'}
                    color={'red'}
                    className='font-medium text-gray-900 capitalize'
                />
            )
        case 8:
            return (
                <Chip
                    variant='ghost'
                    size='sm'
                    value={'Đã thu hồi'}
                    color={'orange'}
                    className='font-medium text-gray-900 capitalize'
                />
            )
        default:
            return null
    }
}
