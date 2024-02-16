import { queryParams } from 'types'
import axiosInstance from './axiosConfig'
import { IJobDescriptionModel } from 'models'

const getJobReferAPI = (queryParams: queryParams) => {
    return axiosInstance.get(
        `JobDescription/JobsRefer?PageNumber=${queryParams.PageNumber}&PageSize=${queryParams.PageSize}`
    )
}
const getJobDetailAPI = (id: string) => {
    return axiosInstance.get(`JobDescription/details/${id}`)
}

const createJobAPI = (body: IJobDescriptionModel) => {
    return axiosInstance.post(`JobDescription/createJob`, body)
}
export { getJobReferAPI, getJobDetailAPI, createJobAPI }