import axiosInstance from './axiosConfig'
import { loginParams, registerParams } from 'types'

const registerAPI = (registerParams: registerParams) => {
    return axiosInstance.post('auth/register', registerParams)
}

const logInAPI = (loginParams: loginParams) => {
    return axiosInstance.post('auth/login', loginParams)
}
const getMeAPI = (token: string) => {
    return axiosInstance.get('auth/getme', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

const logOutAPI = () => {
    return axiosInstance.post('auth/logout')
}

export { registerAPI, logInAPI, getMeAPI, logOutAPI }
