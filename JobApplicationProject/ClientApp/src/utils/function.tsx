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
