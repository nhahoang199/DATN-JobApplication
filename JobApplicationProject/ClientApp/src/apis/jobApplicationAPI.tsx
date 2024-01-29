import { queryParams } from 'types'
import axiosInstance from './axiosConfig'
import { IJobApplicationModel } from 'models'

const getJobReferAPI = (queryParams: queryParams) => {
    return axiosInstance.get(
        `JobApplication/JobsRefer?PageNumber=${queryParams.PageNumber}&PageSize=${queryParams.PageSize}`
    )
}
const getJobDetailAPI = (id: string) => {
    return axiosInstance.get(`JobApplication/details/${id}`)
}

const createJobAPI = (body: IJobApplicationModel) => {
    return axiosInstance.post(`JobApplication/createJob`, body)
}
export { getJobReferAPI, getJobDetailAPI, createJobAPI }
