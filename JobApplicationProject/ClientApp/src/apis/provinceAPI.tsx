import { queryParams } from 'types'
import axiosInstance from './axiosConfig'
import { IProvinceModel } from 'models'

const getAllProvinceAPI = async (queryParams: queryParams) => {
    const response = await axiosInstance.get(
        `Province?PageNumber=${queryParams.PageNumber}&PageSize=${queryParams.PageSize}`
    )
    return response
}
const getAllProvinceByCountryId = async (countryId: string) => {
    const response = await axiosInstance.get(`Province/getProvinceByCountryId?countryId=${countryId}`)
    return response
}
const deleteProvinceAPI = (id: string) => {
    return axiosInstance.delete(`Province/${id}`)
}

const createProvinceAPI = (body: IProvinceModel) => {
    return axiosInstance.post(`Province`, body)
}
const updateProvinceAPI = (body: IProvinceModel) => {
    return axiosInstance.put(`Province/${body.id}`, body)
}
export { createProvinceAPI, getAllProvinceAPI, deleteProvinceAPI, updateProvinceAPI, getAllProvinceByCountryId }
