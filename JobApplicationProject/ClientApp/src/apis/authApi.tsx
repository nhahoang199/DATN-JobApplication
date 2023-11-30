import axiosInstance from './axiosConfig'
import { loginParams, registerParams } from 'types'

const registerAPI = (registerParams: registerParams) => {
    return axiosInstance.post('auth/register', registerParams)
}

const logInAPI = (loginParams: loginParams) => {
    return axiosInstance.post('auth/login', loginParams)
}
const getMeAPI = () => {
    return axiosInstance.get('auth/getme', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
    })
}

const logOutAPI = () => {
    return axiosInstance.post('auth/logout')
}

export { registerAPI, logInAPI, getMeAPI, logOutAPI }
