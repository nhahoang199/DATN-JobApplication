import { queryParams } from 'types'
import axiosInstance from './axiosConfig'
import { IDistrictModel } from 'models'

const getDistrictByProvinceIdAPI = async (id: string) => {
    const response = await axiosInstance.get(`District/getByProvinceId?provinceId=${id}`)
    return response
}
const getAllDistrictAPI = async (queryParams: queryParams) => {
    const response = await axiosInstance.get(
        `District?PageNumber=${queryParams.PageNumber}&PageSize=${queryParams.PageSize}`
    )
    return response
}
const getDistrictDetailsAPI = async (id: string) => {
    const response = await axiosInstance.get(`District/getDetails?id=${id}`)
    return response
}
const deleteDistrictAPI = (id: string) => {
    return axiosInstance.delete(`District/${id}`)
}

const createDistrictAPI = (body: IDistrictModel) => {
    return axiosInstance.post(`District`, body)
}
const updateDistrictAPI = (body: IDistrictModel) => {
    return axiosInstance.put(`District/${body.id}`, body)
}
export {
    createDistrictAPI,
    getAllDistrictAPI,
    deleteDistrictAPI,
    updateDistrictAPI,
    getDistrictDetailsAPI,
    getDistrictByProvinceIdAPI
}
