import { queryParams } from 'types'
import axiosInstance from './axiosConfig'
import { ICountryModel } from 'models'

const getListInputCountryAPI = async () => {
    const response = await axiosInstance.get(`Country/getAll`)
    return response
}
const getAllCountryAPI = async (queryParams: queryParams) => {
    const response = await axiosInstance.get(
        `Country?PageNumber=${queryParams.PageNumber}&PageSize=${queryParams.PageSize}`
    )
    return response
}
const deleteCountryAPI = (id: string) => {
    return axiosInstance.delete(`Country/${id}`)
}

const createCountryAPI = (body: ICountryModel) => {
    return axiosInstance.post(`Country`, body)
}
const updateCountryAPI = (body: ICountryModel) => {
    return axiosInstance.put(`Country/${body.id}`, body)
}
export { createCountryAPI, getAllCountryAPI, deleteCountryAPI, updateCountryAPI, getListInputCountryAPI }
