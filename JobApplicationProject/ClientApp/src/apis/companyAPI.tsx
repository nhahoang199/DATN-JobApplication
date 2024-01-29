import { queryParams } from 'types'
import axiosInstance from './axiosConfig'
import { ICompanyModel } from 'models'

// const getListInputDistrictAPI = async () => {
//     const response = await axiosInstance.get(`Country/getAll`)
//     return response
// }
const getAllCompanyAPI = async (queryParams: queryParams) => {
    const response = await axiosInstance.get(
        `Company?PageNumber=${queryParams.PageNumber}&PageSize=${queryParams.PageSize}`
    )
    return response
}
const getCompanyDetailsAPI = async (id: string) => {
    const response = await axiosInstance.get(`Company/getDetails?id=${id}`)
    return response
}

const createCompanyAPI = (body: ICompanyModel) => {
    return axiosInstance.post(`Company`, body)
}
const updateCompanyAPI = (body: ICompanyModel) => {
    return axiosInstance.put(`Company/${body.id}`, body)
}
export { createCompanyAPI, getAllCompanyAPI, updateCompanyAPI, getCompanyDetailsAPI }
