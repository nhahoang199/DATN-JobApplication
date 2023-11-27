import { queryParams } from 'types'
import axiosInstance from './axiosConfig'

const getJobRefer = (queryParams: queryParams) => {
    return axiosInstance.get(
        `JobApplication/JobsRefer?PageNumber=${queryParams.PageNumber}&PageSize=${queryParams.PageSize}`
    )
}
const getJobDetail = (id: string) => {
    return axiosInstance.get(`JobApplication/details/${id}`)
}
export { getJobRefer, getJobDetail }
