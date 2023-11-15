import axiosInstance from './axiosConfig'

const register = (name: string, userName: string, password: string) => {
    return axiosInstance.post('auth/register', { name, userName, password })
}

const logIn = (userName: string, password: string) => {
    return axiosInstance.post('auth/login', { userName, password })
}

const logOut = () => {
    return axiosInstance.post('auth/logout')
}

export { register, logIn, logOut }
