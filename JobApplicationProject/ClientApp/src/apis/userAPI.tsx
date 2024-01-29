import { queryParams } from 'types'
import { IUserModel } from 'models'
import axiosInstance from './axiosConfig'

const createUserAPI = (body: IUserModel) => {
    return axiosInstance.post(`User`, body)
}
const getAllUserAPI = async (queryParams: queryParams) => {
    const response = await axiosInstance.get(
        `User?PageNumber=${queryParams.PageNumber}&PageSize=${queryParams.PageSize}`
    )
    return response
}
export { createUserAPI, getAllUserAPI }
