import { queryParams } from 'types'
import axiosInstance from './axiosConfig'
import { IJobApplicationModel } from 'models'

const createJobApplicationAPI = (body: IJobApplicationModel) => {
    return axiosInstance.post(`JobApplication`, body)
}

const getAllJobApplicationAPI = async (queryParams: queryParams) => {
    const response = await axiosInstance.get(
        `JobApplication?PageNumber=${queryParams.PageNumber}&PageSize=${queryParams.PageSize}`
    )
    return response
}
const updateJobApplicationAPI = async ( body: IJobApplicationModel) => {
    const response = await axiosInstance.put(`JobApplication/${body.id}`, body)
    return response
}
const getJobApplicationByIdAPI = async (id: string) => {
    const response = await axiosInstance.get(`JobApplication/${id}`)
    return response
}
export { createJobApplicationAPI, getAllJobApplicationAPI, getJobApplicationByIdAPI, updateJobApplicationAPI }
