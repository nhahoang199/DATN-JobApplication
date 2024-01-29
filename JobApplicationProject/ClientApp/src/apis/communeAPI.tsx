import { queryParams } from 'types'
import axiosInstance from './axiosConfig'
import { ICommuneModel } from 'models'

// const getListInputDistrictAPI = async () => {
//     const response = await axiosInstance.get(`Country/getAll`)
//     return response
// }
const getAllCommuneAPI = async (queryParams: queryParams) => {
    const response = await axiosInstance.get(
        `Commune?PageNumber=${queryParams.PageNumber}&PageSize=${queryParams.PageSize}`
    )
    return response
}
const getCommuneDetailsAPI = async (id: string) => {
    const response = await axiosInstance.get(`Commune/getDetails?id=${id}`)
    return response
}
const deleteCommuneAPI = (id: string) => {
    return axiosInstance.delete(`Commune/${id}`)
}

const createCommuneAPI = (body: ICommuneModel) => {
    return axiosInstance.post(`Commune`, body)
}
const updateCommuneAPI = (body: ICommuneModel) => {
    return axiosInstance.put(`Commune/${body.id}`, body)
}
export { createCommuneAPI, getAllCommuneAPI, deleteCommuneAPI, updateCommuneAPI, getCommuneDetailsAPI }
