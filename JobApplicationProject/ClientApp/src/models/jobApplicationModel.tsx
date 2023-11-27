import { ICompanyModel } from './companyModel'

interface IJobApplicationModel {
    id: string
    companyName: string
    companyId: string
    districtId: string
    districtName: string
    provinceId: string
    provinceName: string
    createdOn: string
    description: string
    expiredOn: string
    expirence: number
    gender: string
    position: string
    quantity: number
    salary: number
    title: string
    type: number
    updatedOn: string
}
interface IJobDetail {
    addressId: string
    company: ICompanyModel
    companyId: string
    companyName: string
    description: string
    districtId: string
    districtName: string
    expirence: string
    expiredOn: string
    gender: string
    id: string
    position: string
    provinceId: string
    provinceName: string
    quantity: number
    salary: number
    title: string
    type: number
}

export type { IJobApplicationModel, IJobDetail }
